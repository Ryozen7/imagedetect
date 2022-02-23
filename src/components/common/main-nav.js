import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../../utils/api';
import { pathname } from '../constants/pathname.constants';
import Button from './button';
import Spinner from './spinner';

export default function MainNav() {
    const {state} = useLocation();
    const navigate= useNavigate();
    const [isLogout, setIsLogout]= useState(false);

    const onClickLogout = async(e) => {
        e.preventDefault();
        const options = {
            method: 'POST'
        }
        setIsLogout(true)
        try {
            const response = await fetchAPI(`/api${pathname.logout}/${state._id}`, options)
            setIsLogout((false))
            if(response.success) {
                localStorage.clear()
                navigate(`${pathname.login}`)
            }
        } catch(e) {
            setIsLogout(false)
        }
    }
    return (
        <div className='w-full flex justify-end items-center pr-4 h-full bg-gray-light'>
            <Button 
            addClassName={`text-md font-medium text-black w-1/6 max-w-[120px] bg-primary p-1 rounded-md flex justify-center items-center`} 
            handleClick={e=> onClickLogout(e)}
            disabled={isLogout}
            >
                { isLogout ? 
                    <Spinner 
                        addClassName='w-5 h-5 border-b-2 border-white' 
                    />
                    : `logout`
                } 
            </Button>
        </div>
    )
}