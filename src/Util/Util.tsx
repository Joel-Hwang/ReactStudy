import axios from 'axios';
import { assert } from 'console';
import FormData from 'form-data';
import {Md5} from 'ts-md5';
let rootServer = "http://203.228.101.197/digitalpcc";
let apiServer = "http://203.228.101.197/digitalpcc/server/odata";
let authServer = "http://203.228.101.197/digitalpcc/oauthserver/connect/token";
let databaseName = "DigitalPCC_Test";
//global.rootServer = "http://192.168.0.4/innovatorServer";
//global.apiServer = rootServer + "/server/odata";
//global.authServer = rootServer + "/oauthserver/connect/token";
//global.databaseName = "InnovatorSolutions";

async function getToken(id: string, pw: string): Promise<string>{
    let formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('scope', 'Innovator');
    formData.append('client_id', 'IOMApp');
    formData.append('username', id);
    formData.append('password', pw);
    formData.append('database', 'DigitalPCC_Test');
    axios.defaults.withCredentials = true;
    axios.post(authServer, {
        grant_type:'password',
        scope:'Innovator',
        client_id:'IOMApp',
        username: id,
        password: pw,
        database:'DigitalPCC_Test'
    }, { headers: { 'Content-Type': 'multipart/form-data'} }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //if (res == null || res.data == null) return '';
    //return res.data.access_token;
    return '';
}

function md5(str:string): string{
    let md5 = new Md5();
    md5.appendStr(str);
    return md5.end() as string;
}

export {getToken,md5};