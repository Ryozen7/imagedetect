import React from 'react';
import { useLocation } from 'react-router-dom';
import NavComponent from '../global/nav-component';

export default function Profile() {
    const {state} = useLocation();

    return (
        <div className='w-full h-[85vh] flex flex-col'>
        <NavComponent />
        <div className="flex items-start pt-10 justify-center h-[70vh] w-full bg-gray-100">
                <div className="min-h-[250px] px-8 py-6 text-left bg-gray-light shadow-lg rounded-md min-w-[275px] w-1/3">
                    <h3 className="text-lg md:text-2xl font-semibold text-center">{`USER PROFILE`}</h3>

                    <div className='flex flex-col mt-5'>
                        <div className='flex flex-row justify-between text-md md:text-lg font-semibold'>
                            {`Username: `} 
                            <span className='font-semibold'>
                                {state.username ? state.username : 'No username'}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <div className='flex flex-row justify-between text-md md:text-lg font-semibold'>
                            {`Email: `} 
                            <span className='font-semibold'>
                                {state.email ? state.email : 'No email'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}