import React from 'react';
import NavComponent from "./nav-component"
import ContentPages from "./content-pages"
import Footer from "./footer"

export default function Layout() {

    return (
        <div className='h-screen w-screen bg-white'>
            <NavComponent />

            <div className='w-full h-[70vh]'>
            <ContentPages />
            </div>
            
            <Footer />
        </div>
    )
}