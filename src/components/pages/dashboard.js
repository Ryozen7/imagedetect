import React , { useEffect }from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getToken from '../../config/get-token';
import validateToken from '../../config/validate-token';
import { pathname } from '../constants/pathname.constants';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.pathname.split('/')[1]
    const user = getToken();

    useEffect(()=> {
        validateToken(pathname.login, user, navigate)
    }, [ navigate ])

    return (
        <>
        This is a dashboard content.
        </>
    )
}