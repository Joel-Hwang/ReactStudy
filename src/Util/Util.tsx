import axios from 'axios';
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


function md5(str:string): string{
    let md5 = new Md5();
    md5.appendStr(str);
    return md5.end() as string;
}

export {md5};