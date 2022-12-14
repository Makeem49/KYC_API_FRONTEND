import React from 'react';
import hafCirc from '../../../assets/images/half.svg';

const Header = () => {
  return (
    <div className='relative flex justify-between text-[14px] items-center rounded-lg bg-afexpurple-dark w-full h-[94px] p-5 text-[#F1EBFC] '>
      <img src={hafCirc} alt='' className=' absolute top-0 left-[20%]' />
      <img
        src={hafCirc}
        alt=''
        className=' absolute bottom-[-15%] left-[0%] rotate-180'
      />
      <img
        src={hafCirc}
        alt=''
        className=' absolute top-0 right-[-2%]  rotate-45'
      />

      <div>
        <h2 className='text-[20px] text-[#ffff]'>Welcome, Nancy</h2>
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
