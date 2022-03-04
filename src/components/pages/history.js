import React from 'react';
import { useLocation } from 'react-router-dom';
import NavComponent from '../global/nav-component';

export default function History() {
    const {state} = useLocation();

    return (
        <div className='w-full h-[85vh] flex flex-col'>
        <NavComponent />
        <div className="flex items-center justify-center h-[70vh] w-full bg-gray-100">
            <div className='bg-gray-200 shadow-xl w-[95%] h-[98%] overflow-y-auto rounded-md p-5'>
                <div className='w-full h-full flex flex-col'>
                    <div className='w-full flex justify-start text-lg font-medium'>
                        {`Total Image Count : `}
                        <span className='pl-2'>{`${state.imageHistory?.length}`}</span>
                    </div>
                    <div className='w-full flex flex-col justify-start text-lg font-medium'>
                        <span>{`Image History `}</span>
                        <div className='overflow-y-auto'>
                            {state.imageHistory?.length > 0 && state.imageHistory.map((image, id) => {
                                return (
                                    <div key={id} className='w-full border-b-2 border-gray-300 flex flex-col'>
                                        <span> {`Image Link:  ${image.url}`}</span>
                                        <span> {`Date Stamp:  ${image.createdAt}`}</span>
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