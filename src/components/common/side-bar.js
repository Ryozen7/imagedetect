import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './button';
import { links } from '../constants/image-links.constants';
import copy from '../../assets/copy.png';

export default function SideBar() {
    const [ isCopied, setIsCopied ] = useState(false); 
    
    const CopyMe = async( link ) => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied(true)
          } catch (err) {
            console.log(err)
          }
    }

    useEffect(()=> {
        if(isCopied) {
            let timer1 = setTimeout(() => setIsCopied(false), 2 * 1000);
            return () => {
                clearTimeout(timer1);
            };
        }
    }, [isCopied])

    return (
        <div className='w-full h-full flex flex-col justify-start items-start'>
            <span className='text-md font-medium p-4 relative'>{`Here is a sample image link`}</span>
            { isCopied && (
                     <div className='text-sm absolute sm:text-md text-primary font-medium mt-10 mx-4 text-center rounded-md p-1 px-2'>
                         {`Link is copied to the clipboard!`}
                    </div>
            )}
            <div className='w-full text-sm font-medium pl-4 h-full max-h-[500px] border-2 bg-gray-200'>
                { links.map((link, i) => {
                    return (
                        <div key={i} className='w-full flex flex-row mt-4 relative justify-between items-between'>
                            
                            <div className='opacity-0 hover:opacity-100 w-[180px] overflowX mb-4 text-xs font-normal absolute z-10'>
                                <span>
                                {link}
                                </span>
                                
                            </div>
                             <div className='w-3/4 truncate'>{link}</div>
                            <Button
                                addClassName={'w-[40px] z-20'}
                                handleClick={() => CopyMe(link)}
                            >
                                <img 
                                    className='h-[20px] w-auto'
                                    src={copy}
                                    alt={'copy'}
                                />
                            </Button>
                        </div>
                    )
                })

                }

            </div>
        
        </div>
    )
}