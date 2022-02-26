import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";
import NotFound from '../pages/error';
import Dashboard from '../pages/dashboard';
import History from '../pages/history';
import Profile from '../pages/profile';

export default function ContentPages() {

    return (
        <div>
            <BrowserRouter >
            <Routes>
                <Route path={"signup"}  element={<Signup />} />
                <Route path={"login"}  element={<Login />} />
                <Route path={"/"}  element={<Home />} />
                <Route path={"/:userId"} element={<Dashboard />} />
                <Route path={"/:userId/history"} element={<History />}/>
                <Route path={"/:userId/profile"} element={<Profile />}/>
                <Route path={"*"}  element={<NotFound />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}