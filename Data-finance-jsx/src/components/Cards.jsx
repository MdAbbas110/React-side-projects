import React from 'react';
import Button from './Button';
import SingleCard from './SingleCard';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <SingleCard
          img="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true"
          h1="Partnership"
          price="$299"
          p1="500 GB storage"
          p2="3 Grant User"
          p3="Spend upto 10 GB"
        />

        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-10 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/double.png?raw=true"
            alt="/"
          />
          <h1 className="text-2xl font-bold text-center py-8 ">Single User</h1>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
            <p className="py-2 border-b mx-8">1 Grant User</p>
            <p className="py-2 border-b mx-8">Spend upto 2 GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md text-xl font-medium my-6 mx-auto py-3 text-[#00df9a]">
            Start trail
          </button>
        </div>

        <SingleCard
          img="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/triple.png?raw=true"
          h1="Organization "
          price="$399"
          p1="1500 GB storage"
          p2="20 Grant User"
          p3="Spend upto 20 GB"
        />
      </div>
    </div>
  );
};

export default Cards;
