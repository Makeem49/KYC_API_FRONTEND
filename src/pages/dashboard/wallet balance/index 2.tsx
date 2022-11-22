import React from 'react';
import reciptIcon from '../../../assets/images/xsd.svg';

const WalletBallance = () => {
  return (
    <div className=' flex flex-col gap-2 border border-[#DAD9DA] rounded-lg p-5'>
      <div className='px-5 py-3 bg-afexpurple-lighter'>
        <span className=' text-afexpurple-light'>Total wallet balance</span>
        <p className='text-xl text-afexpurple-dark font-bold'>N50,000,000.00</p>
      </div>

      {/* Available Balances */}
      <div className='w-full flex flex-col gap-2 border-b pb-4'>
        {' '}
        <div className='flex justify-between'>
          <p>Number of Users</p>
          <p>N3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p>Number of Users</p>
          <p>N3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p>Number of Users</p>
          <p>N3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p>Number of Users</p>
          <p>N3,0000</p>
        </div>
      </div>

      {/* Total Balance */}
      <div className='flex w-full justify-end'>
        <p>N3,0000</p>
      </div>

      <div className='relative flex gap-2 items-center'>
        <p>Audit Status</p>
        <p className=' bg-[#E7F9F0] font-bold text-[#0DBF66] py-1 px-2 rounded'>
          Passed
        </p>
        <img
          src={reciptIcon}
          alt='rcpt'
          className='absolute bottom-[-150%] right-0'
        />
      </div>
    </div>
  );
};

export default WalletBallance;
