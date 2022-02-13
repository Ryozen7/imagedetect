const CryptoJS = require("crypto-js")
let originalData;
let theData = localStorage.getItem("token");

if(theData !== null) {
    let bytes  = CryptoJS.AES.decrypt(theData, 'secret key 123');
    originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

const apiToken = process.env.REACT_APP_REQUEST_TOKEN;
const gitProxyUrl = process.env.REACT_APP_API_URL + '/authenticate';
const local_url= process.env.REACT_APP_API_URL;
const user_data = originalData;



module.exports = {
  REACT_APP_PROXY_URL : gitProxyUrl,
  REQUEST_TOKEN: apiToken,
  APP_API_URL: local_url,
  USER_DATA: user_data,
};