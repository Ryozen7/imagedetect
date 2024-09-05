import React from 'react';
import { useLocation } from 'react-router-dom';
import NavComponent from '../global/nav-component';
import moment from 'moment';

export default function History() {
    const {state} = useLocation();

    return (
        <div className='w-full h-[85vh] flex flex-col'>
            <NavComponent />
            <div className="flex items-center justify-center h-[73vh] w-full mt-1">
                <div className='bg-white shadow-xl w-[95%] h-[99%] overflowY rounded-md p-5'>
                    <div className='w-full h-full flex flex-col'>
                        <span className='font-bold text-2xl'>{`Image History `}</span>
                        <div className='w-full flex justify-start text-lg font-medium my-2'>
                            {`Total Image Count : `}
                            <span className='pl-2 text-tertiary font-bold text-xl'>{`${state.imageHistory?.length}`}</span>
                        </div>
                        <div className='border border-gray-500'>
                            <div className='flex flex-row w-full text-lg font-medium border-b border-gray-500 bg-gray-300'>
                                <span className='w-2/3 text-center border-r border-gray-500'>Image Link</span>
                                <span className='w-1/3 text-center'>Created At</span>
                            </div>
                            <div className=''>
                                {state.imageHistory?.length > 0 && state.imageHistory.map((image, id) => {
                                    return (
                                        <div key={id} className='w-full border-b text-md border-gray-500 flex flex-row min-h-[40px] items-center'>
                                            <div className='px-2 w-2/3 text-left border-r border-gray-500 min-h-[40px] truncate'> {`${image.url}`}</div>
                                            <span className='w-1/3 text-center'> {`${moment.utc(image.createdAt).format('LLLL')}`}</span>
                                        </div>
                                    )
                                })}
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}