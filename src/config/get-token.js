export default function getToken() {
    let userToken = localStorage.getItem("accessToken");
    return userToken
}