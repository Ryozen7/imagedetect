

export default function validateToken(path, user, navigate) {
    if(!path && !user) return;
    if(path && !user) navigate(path);
    if(user) navigate(`/p${user._id}r${Math.round(Math.random()*100)}f`);
}