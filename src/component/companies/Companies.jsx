import React from 'react';
//import CompaniesTitle from '../companiesTitle/CompaniesTitle';
import { Link } from 'react-router';


const Companies = ({ companies }) => {


    return (
          <div>
     
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4'>
        {companies.map(company => (
                      <div className="flex flex-col items-center gap-2 w-80 h-56 bg-base-200 items-center ">
              <Link  key={company.id} to={`/companydetails/${company.id}`}>
          
                  <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain" />
                  <p className="mt-2 text-center font-medium text-2xl">{company.name}</p>
                
              </Link>
              </div>
           
        ))}
      </div>
    </div>
    );
};

export default Companies;