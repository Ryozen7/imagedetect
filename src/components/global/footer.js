import React from 'react';


export default function Footer() {

    return (
        <div className='bg-gray-100 h-[15vh] bg-gray-light w-full flex flex-col justify-end items-center pb-4'>
        <span className='font-bold text-sm'>
        {`All rights reserved...`}
        </span>
        <span className='font-bold text-sm italic text-primary'>
        {`Ⓒ Philip Rockyboy Fuentes`}
        </span>
        
        </div>
    )
}