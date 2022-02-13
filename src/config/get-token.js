export default function getToken() {
    const CryptoJS = require("crypto-js")
    let token = null;
    let userToken = localStorage.getItem("token");

    if(userToken !== null) {
        const bytes  = CryptoJS.AES.decrypt(userToken, 'secret key user123');
        token = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return token
}