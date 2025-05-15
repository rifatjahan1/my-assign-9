import React from 'react';
import { Link } from 'react-router'


const Empty = () => {
    return (
        <div className='text-center space-y-4 py-24'>
            <div className='font-semibold text-3xl'>You Have Not Apply</div>
            <div> 
                <small>Our platform connects you with verified,
                     experienced Lawers across various specialities-all at your convenience.</small>
            </div>
            <Link to='/'>
                <button className='btn btn-primary text-white text-xl h-12'>Please Apply</button>
                </Link>

        </div>
    );
};

export default Empty;