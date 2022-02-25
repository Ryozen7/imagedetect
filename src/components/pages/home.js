import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Spinner from '../common/spinner';
import { pathname } from '../constants/pathname.constants';
import getToken from '../../config/get-token';
import { fetchAPI } from '../../utils/api';

export default function Home() {
    const navigate = useNavigate();
    const token = getToken();

    useEffect(()=> {
        if(token) {
            const fetchUser = async() => {
                try {
                    const response = await fetchAPI(`/api/me`)
                    if(response.error) {
                        alert(`${response.error}`)
                        localStorage.clear();
                        navigate(`${pathname.login}`)
                    }
                    if(response.data) {
                        navigate(`/p7r18f${response.data._id}`, {state: response.data})
                    }
                } catch(e){
                    console.log(e)
                    localStorage.clear();
                }
            }

            fetchUser(); 

        } else  {
            localStorage.clear();
            navigate(`${pathname.login}`)
        }
    }, [ ])    

    return (
        <div className='w-full h-[50vh] flex justify-center items-center'>
            <Spinner addClassName={'w-[100px] h-[100px] border-primary border-b-4'}/>
        </div>
    )
}