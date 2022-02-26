import React from 'react';
import { useLocation } from 'react-router-dom';
import NavComponent from '../global/nav-component';

export default function Profile() {
    const {state} = useLocation();

    console.log("state", state) 

    return (
        <div className='w-full h-[85vh] flex'>
        <NavComponent />
        </div>
    )
}