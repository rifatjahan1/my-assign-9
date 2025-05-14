import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <div className=' min-h-[calc(100vh-296px)]'>
                
               
                <Outlet></Outlet>
                
                
                </div>
        </div>
    );
};

export default Root;