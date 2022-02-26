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
            let timer1 = setTimeout(() => setIsCopied(false), 3 * 1000);
            return () => {
                clearTimeout(timer1);
            };
        }
    }, [isCopied])

    return (
        <div className='w-full h-[75vh] flex flex-col justify-start items-start bg-gray-200'>
            <span className='text-md font-medium p-4'>{`Here is a sample image link`}</span>
            <div className='w-full text-sm font-medium pl-4 h-full'>
                { links.map(link => {
                    return (
                        <div className='w-full flex flex-row mt-4 relative justify-between items-between'>
                            
                            <div className='opacity-0 hover:opacity-100 w-[180px] overflow-x-auto mb-4 text-xs bg-gray-100 font-normal absolute z-10'>
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
                { isCopied && (
                     <div className='text-md text-primary font-medium mt-8 bg-gray-300 mr-5 text-center rounded-md p-2'>
                         {`Link is copied to the clipboard!`}
                    </div>
                )

                }
              
            </div>
        
        </div>
    )
}