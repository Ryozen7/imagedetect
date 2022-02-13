import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { USER_DATA } from '../../config/constants';
import Spinner from '../common/spinner';
import { pathname } from '../constants/pathname.constants';

export default function Home() {
    const navigate = useNavigate();

    useEffect(()=> {
        if(!USER_DATA) {
            navigate(pathname.login)
        } else {
            navigate(`${pathname.dashboard}/${USER_DATA.id}`)
        }
    }, [ navigate ])

    return (
        <div className='w-full h-[50vh] flex justify-center items-center'>
        <Spinner addClassName={'w-[100px] h-[100px] border-primary border-b-4'}/>
        </div>
    )
}