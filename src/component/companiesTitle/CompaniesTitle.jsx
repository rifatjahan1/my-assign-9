import React from 'react';
import CompaniesTitle from '../companiesTitle/CompaniesTitle';
import { Link } from 'react-router'; // ✅ FIXED: use react-router-dom

const Companies = ({ companies }) => {
    return (
        <div>
            <CompaniesTitle />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4'>
                {companies.map(company => (
                    <div key={company.id} className="hero bg-base-200 min-h-screen rounded-2xl"> {/* ✅ key moved here */}
                        <div className="hero-content text-center flex flex-col items-center">
                            <Link to={`/companydetails/${company.id}`}>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain" />
                                    <p className="mt-2 text-center font-medium text-2xl">{company.name}</p>
                                </div>
                            </Link>
                            <div>
                                <p className="mt-2 text-center font-medium text-emerald-500">Location: {company.location}</p>
                                <p className="mt-2 text-center font-medium text-orange-500">{company.industry}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies;
