import React from 'react';
import NavComponent from "./nav-component"
import ContentPages from "./content-pages"
import Footer from "./footer"

export default function Layout() {

    return (
        <div className='h-screen w-screen bg-white'>
            <div className='w-full h-[85vh] bg-gray-100'>
            <ContentPages />
            </div>
            
            <Footer />
        </div>
    )
}