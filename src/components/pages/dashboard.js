import React , { useEffect }from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../common/side-bar';
import NavComponent from '../global/nav-component';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.pathname.split('/')[1].slice(6)

    useEffect(()=> {
        if(!location.state || !location.state._id) return navigate(`/`);
        if (location.state?._id === userId) return;
        if(userId !== location.state?._id) {
            return navigate(`/p7r18f${location.state._id}`, {state: location.state})
        }
    }, [ ])

    return (
        <div className='w-full h-[85vh] flex flex-col'>
        <NavComponent />
        <div className='w-full h-auto flex flex-row'>
            <div className='w-1/4 hidden md:flex flex-row justify-center items-center'>
                <SideBar />
            </div>
            <div className='w-full md:w-3/4 h-full'>
            </div>
        </div>
        </div>
    )
}