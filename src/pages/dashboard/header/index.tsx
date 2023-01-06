import React from 'react';
import hafCirc from '../../../assets/images/half.svg';
import { useUsersCtx } from '../../../context';

const Header = () => {
  const { admin } = useUsersCtx();
  // console.log(admin);
  // const date = new Date();
  // // Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
  // const time = date.toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  const today = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  // "Friday, Jul 2, 2021"

  // console.log(today);
  return (
    <div className='relative flex justify-between text-[14px] items-center rounded-lg bg-[#A01B14] w-full h-[94px] p-5 text-[#F1EBFC] '>
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
        <h2 className='text-[20px] text-[#ffff]'>
          Welcome,{' '}
          {admin?.map((el) => (
            <span>{el.firstName}</span>
          ))}
        </h2>
        <p>200 transactions have been initiated today.</p>
      </div>

      <div className='text-[12px] bg-afexred-darker p-3 rounded-lg'>
        <p>{today}</p>
      </div>
    </div>
  );
};

export default Header;
