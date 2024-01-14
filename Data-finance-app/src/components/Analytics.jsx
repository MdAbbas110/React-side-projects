import React from 'react';
import Button from './Button';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg"
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p c>
            Alteryx is a data analytics and visualization platform that offers a
            wide range of tools to help businesses make sense of their data. It
            allows users to easily clean, transform, and analyze large datasets
            from different sources without needing coding or programming
            expertise.
          </p>
          <button className="bg-black w-[200px] rounded-md text-xl font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
