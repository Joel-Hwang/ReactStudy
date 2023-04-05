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

const BASE_URL = "http://localhost:9000";
const API = {
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  CRITERIA: `${BASE_URL}/criteria`,
};

function md5(str:string): string{
    let md5 = new Md5();
    md5.appendStr(str);
    return md5.end() as string;
}

async function post(url: string, body?:object, header?: object){
  try{
      let res = await axios.post(url, body, header);
      return res;
  }catch(e : any){
      return {status:e.response.status, data:e.response.data};
  }finally{

  }
}

export {md5,API,post};