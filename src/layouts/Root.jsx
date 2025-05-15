import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <div className=' min-h-[calc(100vh-296px)]'>
                
               
                <Outlet></Outlet>
                
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;