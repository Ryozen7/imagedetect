import React , { useEffect }from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getToken from '../../config/get-token';
import SideBar from '../common/side-bar';
import NavComponent from '../global/nav-component';
import FaceDetect from '../common/face-detect';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.pathname.split('/')[1].slice(6)
    const token = getToken();

    useEffect(()=> {
        if(!location.state || !location.state._id || !token) return navigate(`/`);
        if (location.state?._id === userId) return;
        if(userId !== location.state?._id) {
            return navigate(`/p7r18f${location.state._id}`, {state: location.state})
        }
    }, [ ])

    return (
        <div className='w-full h-[85vh] flex flex-col'>
        <NavComponent />
        <div className='w-full h-[75vh] flex md:flex-row flex-col'>
            <div className='w-full bg-gray-200 md:w-1/4 h-1/3 overflowY md:h-full'>
                <SideBar />
            </div>
            <div className='w-full md:w-3/4 h-2/3 md:h-full'>
                <FaceDetect />
            </div>
        </div>
        </div>
    )
}