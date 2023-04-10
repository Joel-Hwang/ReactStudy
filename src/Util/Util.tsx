import axios from 'axios';
import {Md5} from 'ts-md5';
let rootServer = "http://203.228.101.197/digitalpcc";
let apiServer = "http://203.228.101.197/digitalpcc/server/odata";
let authServer = "http://203.228.101.197/digitalpcc/oauthserver/connect/token";
let databaseName = "DigitalPCC_Test";
//global.rootServer = "http://192.168.0.4/innovatorServer";
//global.apiServer = rootServer + "/server/odata";
//global.authServer = rootServer + "/oauthserver/connect/token";
//global.databaseName = "InnovatorSolutions";
const VAULT_URL = "http://203.228.101.197/digitalpcc/vault/odata";
const SERVER_URL = "http://203.228.101.197/digitalpcc/Server/odata";
const BASE_URL = "http://203.228.117.46:9000";
const API = {
  LIST:`${BASE_URL}/list`,
  DETAIL:`${BASE_URL}/detail`,
  UPDATE:`${BASE_URL}/update`,
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  PRODUCT: `${BASE_URL}/criteria`,
  DOWNLOAD: `${BASE_URL}/download`,
};

function md5(str:string): string{
    let md5 = new Md5();
    md5.appendStr(str);
    return md5.end() as string;
}

async function post(url: string, body?:object, header?: object){
  try{
      let res = await axios.post(url, body, {...header,withCredentials:true});
      return res;
  }catch(e : any){
      return {status:e.response.status, data:e.response.data};
  }finally{

  }
}


async function postString(url: string, body:string, header?: object){
  try{
      let res = await axios.post(url, body, {...header,withCredentials:true});
      return res;
  }catch(e : any){
      return {status:e.response.status, data:e.response.data};
  }finally{

  }
}

async function get(url: string, param?:object){
  try{
      url  = url+ '?param='+JSON.stringify(param);
      let res = await axios.get(url, { withCredentials:true, });
      return res;
  }catch(e : any){
      return {status:e.response.status, data:e.response.data};
  }finally{

  }
}

async function fileupload(file?: File){
  if(file == null) return '';  try{
    
      //transaction 날리고
      let transaction:any = await get(BASE_URL+'/transaction');
      let file_id = generateNewGuid();
      var upload_res = await uploadFile(file, file_id, transaction.data.id, transaction.data.token);
      var commit_res = await commitTransaction(file, file_id, transaction.data.id, transaction.data.token);
      if(commit_res.status == 200) return file_id;
      return '';
  }catch(e : any){
      return '';
  }finally{

  }
}

function generateNewGuid() {
  function randomDigit() {
      if (crypto && crypto.getRandomValues) {
          var rands = new Uint8Array(1);
          crypto.getRandomValues(rands);
          return (rands[0] % 16).toString(16);
      } else {
          return ((Math.random() * 16) | 0).toString(16);
      }
  }
  var crypto = window.crypto;
  return 'xxxxxxxxxxxx4xxx8xxxxxxxxxxxxxxx'.replace(/x/g, randomDigit).toUpperCase();
}

async function uploadFile(file: File, file_id: string, transaction_id: string, token: string, chunk_size = 1000000) {
  let results = [];
  let size = file.size;
  let start = 0;
  let end = 0;

  while (end < size - 1) {
      end = start + chunk_size;
      if (size - end < 0) {
          end = size;
      }

      // get an array of headers for this upload request
      let headers = getUploadHeaders(escapeURL(file.name), start, end - 1, size, transaction_id, token);

      // make the request to upload this file content
      let upload_url = VAULT_URL+"/vault.UploadFile?fileId=" + file_id;
      let chunk = file.slice(start, end);

      //const data = new FormData();
      //data.append('file', chunk, file.name);
      let response = await axios.post(upload_url, chunk, {headers:headers});
      //var response = await post(upload_url, data, headers);
      results.push(response);

      start += chunk_size;
  }

  return Promise.all(results);
}

function escapeURL(url: string) {
  url = url.split('%').join('%25');
  url = url.split(' ').join('%20');
  url = url.split("'").join('%27');
  url = url.split('!').join('%21');
  url = url.split('"').join('%22');
  url = url.split('#').join('%23');
  url = url.split('$').join('%24');
  url = url.split('&').join('%26');
  url = url.split('(').join('%28');
  url = url.split(')').join('%29');
  url = url.split('*').join('%2A');
  url = url.split('+').join('%2B');
  url = url.split('?').join('%3F');

  return url;
}

function getUploadHeaders(escaped_name: string, start_range: number, end_range: number, file_size: number, transaction_id: string, token: string) {
  // start the upload headers array with a clone of the auth_headers array
  let headers = {
      "authorization": "Bearer " + token,
      "Content-Disposition": "attachment;filename*=utf-8''" + escaped_name,
      "Content-Range": "bytes " + start_range + "-" + end_range + "/" + file_size,
      "Content-Type": "application/octet-stream",
      "transactionid": transaction_id
  }
  return headers;
}

async function commitTransaction(file: File, file_id: string, transaction_id: string, token: string) {
  // build the headers and body for the commit request
  var boundary = "batch_" + file_id;
  var commit_headers = getCommitHeaders(boundary, transaction_id, token);
  var commit_url = VAULT_URL+"/vault.CommitTransaction";

  // it's important to use the \r\n end of line character, otherwise commit will fail
  var EOL = "\r\n";

  // build the commit body string
  var commit_body = "--";
  commit_body += boundary;
  commit_body += EOL;
  commit_body += "Content-Type: application/http";
  commit_body += EOL;
  commit_body += EOL;
  commit_body += "POST " + SERVER_URL + "/File HTTP/1.1";
  commit_body += EOL;
  commit_body += "Content-Type: application/json";
  commit_body += EOL;
  commit_body += EOL;
  commit_body += '{"id":"' + file_id + '",';
  commit_body += '"filename":"' + file.name + '",';
  commit_body += '"file_size":' + file.size + ',';
  commit_body += '"Located":[{"file_version":1,"related_id":"67BBB9204FE84A8981ED8313049BA06C"}]}';
  commit_body += EOL;
  commit_body += "--" + boundary + "--";

  // send the commit request to the vault server
  let result = await axios.post(commit_url, commit_body, {headers:commit_headers});
  //var result = await postString("POST", commit_body, commit_headers);
  return result;
}

function getCommitHeaders(boundary: string, transaction_id: string, token: string) {
  var commit_headers ={
      "Content-Type": "multipart/mixed; boundary=" + boundary,
      "transactionid": transaction_id,
      "authorization": "Bearer " + token

  };
  return commit_headers;
}

export {md5,API,post,get, fileupload};