
export async function validateToken(path, token, navigate) {
    if(!path && !token) return;
    if(path && !token) navigate(path);
    if(token)  {
        return
    }
    
}

export function parseToken(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const user = JSON.parse(jsonPayload)

    console.log("user", user)
    return user;
}