import React from 'react';
import { USER_DATA } from '../../config/constants';
import MainNav from '../common/main-nav';
import Button from '../common/button';
import { pathname } from '../constants/pathname.constants';

export default function NavComponent() {
    const currentPathName = window.location.pathname

    const handleClick = (e, path) => {
        e.preventDefault()
        return window.location.href = path
    }

    return (
        <div className='w-full h-[15vh] text-center'>
        { USER_DATA ? 
            <MainNav />
        : <div className='text-right h-full flex items-center justify-end pr-4 text-md font-semibold'>
            {
                currentPathName === pathname.login ?
                    <div>
                        {`No Account yet? `} 
                        <Button 
                            addClassName={'text-primary font-bold'}
                            handleClick={(e)=> handleClick(e, pathname.signup )}
                        >
                            {`Sign-up Now`}
                        </Button> 
                    </div>
                :  <div>
                        {`Already have an Account? `} 
                        <Button 
                            addClassName={'text-primary font-bold'}
                            handleClick={(e)=> handleClick(e, pathname.login )}
                        >
                            {`Go to Log-in`}
                        </Button> 
                    </div>
            }
          </div>
        }
        </div>
    )
}