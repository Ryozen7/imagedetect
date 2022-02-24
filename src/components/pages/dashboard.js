import React , { useEffect }from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavComponent from '../global/nav-component';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.pathname.split('/')[1].slice(6)
    console.log("userId", userId)
    console.log("went here dashboard")
    console.log("location", location)
    useEffect(()=> {
        if(!location.state || !location.state._id) return navigate(`/`);
        if (location.state?._id === userId) return;
        if(userId !== location.state?._id) {
            return navigate(`/p7r18f${location.state._id}`, {state: location.state})
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ])

    return (
        <>
        <NavComponent />
        This is a dashboard content.
        </>
    )
}