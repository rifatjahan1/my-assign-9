import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">How It Works</h2>
            <p className="text-gray-600">Create an account, browse companies, and apply directly to jobs you love.</p>
           <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
      Popular Categories
    </h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
      <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
        Frontend Development
      </li>
      <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
        Backend Development
      </li>
      <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
        UI/UX Design
      </li>
      <li className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
        DevOps
      </li>
    </ul>
  </div>
</section>



        </div>
    );
};

export default ExtraSection;