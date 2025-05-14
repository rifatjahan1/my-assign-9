import React from 'react';
import Banner from '../../component/banner/Banner';
import Companies from '../../component/companies/Companies';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Companies  companies ={data}></Companies>
  

        </div>
    );
};

export default Home;