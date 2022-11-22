import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between text-[14px] items-center rounded-lg bg-afexpurple-dark w-full h-[94px] p-5 text-[#ffff] '>
      <div>
        <h2 className='text-[20px]'>Welcome, Nancy</h2>
        <p>200 transactions have been initiated today.</p>
      </div>

      <div className='text-[12px] bg-afexpurple-darker p-3 rounded-lg'>
        <p>
          TUE 1 NOV <span>10:00 AM</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
