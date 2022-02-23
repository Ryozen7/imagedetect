import React from 'react';
import MainNav from '../common/main-nav';
import Button from '../common/button';
import { pathname } from '../constants/pathname.constants';
import getToken from '../../config/get-token';
import { useLocation } from 'react-router-dom';

export default function NavComponent() {
    const loc = useLocation();
    const user = getToken();
    const handleClick = (e, path) => {
        e.preventDefault()
        return window.location.href = path
    }

    return (
        <div className='w-full h-[10vh] text-center'>
        { user ? 
            <MainNav />
        : <div className='text-right h-full flex items-center justify-end pr-4 text-md font-semibold'>
            {
                loc.pathname === pathname.login ?
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