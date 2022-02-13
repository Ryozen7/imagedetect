import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Spinner from '../common/spinner';
import { pathname } from '../constants/pathname.constants';
import getToken from '../../config/get-token';
import validateToken from '../../config/validate-token';

export default function Home() {
    const navigate = useNavigate();
    const user = getToken();

    useEffect(()=> {
        validateToken(pathname.login, user, navigate)
    }, [ navigate ])

    return (
        <div className='w-full h-[50vh] flex justify-center items-center'>
            <Spinner addClassName={'w-[100px] h-[100px] border-primary border-b-4'}/>
        </div>
    )
}