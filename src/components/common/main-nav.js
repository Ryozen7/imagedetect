import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../../utils/api';
import { pathname } from '../constants/pathname.constants';
import Button from './button';
import Spinner from './spinner';
import face from '../../assets/face.png';
import { MdMenu } from "react-icons/md";
import MobileNavMenu from './mobile-nav-menu';

export default function MainNav() {
    const {state, pathname: pathURL} = useLocation();
    const navigate= useNavigate();
    const [isLogout, setIsLogout]= useState(false);
    const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
    const userIDpath = `/p7r18f${state?._id}` || '';
    const nav = [
        { name: 'History', path: pathname.history},
        { name: 'Profile', path: pathname.profile},
        { name: 'Logout', path: pathname.logout}
    ]
    const onClickLogout = async(e) => {
        e.preventDefault();
        const options = {
            method: 'POST'
        }
        setIsLogout(true)
        try {
            const response = await fetchAPI(`/api${pathname.logout}/${state._id}`, options)
            setIsLogout((false))
            if(response.error) {
                localStorage.clear();
                navigate(`${pathname.login}`)
            }
            if(response.success) {
                localStorage.clear()
                navigate(`${pathname.login}`)
            }
        } catch(e) {
            setIsLogout(false)
        }
    }

    const onhandleClick = (e, path) => {
        e.preventDefault();
        setMobileMenuIsShown(false)
        if(path.includes('logout')) {
          return onClickLogout(e)
        }
        navigate(`${userIDpath}${path}`, {state: state})
    }
    return (
        <div className='w-full flex justify-between items center h-full bg-gray-light'>
            <Button 
                addClassName='w-[80px] h-full bg-transparent flex justify-center items-center'
                handleClick={e=> onhandleClick(e, '')}
            >
            <img
                className='w-auto h-[40px] md:h-[48px] rounded-md'
                src={face}
                alt={'face'}
            />
            </Button>
            

            <div className='hidden w-full md:flex justify-end items-center pr-4 h-full'>
                { nav.map( button => (
                    <Button 
                    key={button.name}
                    addClassName={`mr-5 text-md font-medium text-black w-1/6 max-w-[120px] bg-primary p-1 rounded-md flex justify-center items-center ${pathURL.includes(pathname.history) && 'bg-secondary'}`} 
                    handleClick={e=> onhandleClick(e, button.path)}
                    >
                        {button.name === 'Logout'? 
                         isLogout ? 
                            <Spinner 
                                addClassName='w-5 h-5 border-b-2 border-white' 
                            />
                            : button.name
                       
                        : button.name
                        }
                    </Button>
                ))}
            </div>
            <div className="md:hidden flex items-center justify-end">
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button>
            {/* CTA button on desktop */}
            
          </div>
            {mobileMenuIsShown && (
                <MobileNavMenu
                buttons={nav}
                face={face}
                onhandleClick={onhandleClick}
                closeSelf={() => setMobileMenuIsShown(false)}
                />
            )}
        </div>
        
    )
}