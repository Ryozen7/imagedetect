const CryptoJS = require("crypto-js")
let originalData;
let theData = localStorage.getItem("token");

if(theData !== null) {
    let bytes  = CryptoJS.AES.decrypt(theData, 'secret key user123');
    originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

const apiToken = process.env.REACT_APP_REQUEST_TOKEN;
const local_url= process.env.REACT_APP_API_URL;
const user_data = originalData;



module.exports = {
  REQUEST_TOKEN: apiToken,
  APP_API_URL: local_url,
  USER_DATA: user_data,
};