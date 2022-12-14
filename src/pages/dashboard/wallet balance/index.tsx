import React from 'react';
import AuditModal from '../audit modal';

const WalletBallance = () => {
  return (
    <div className=' flex flex-col gap-2 border border-[#DAD9DA] rounded-lg p-5'>
      <div className='px-5 py-3 bg-afexpurple-lighter'>
        <span className=' text-afexpurple-light'>Total wallet balance</span>
        <p className='text-xl text-afexpurple-regular font-semibold'>
          &#8358; 50,000,000.00
        </p>
      </div>

      {/* Available Balances */}
      <div className='w-full flex flex-col gap-4 py-2 border-b pb-4'>
        {' '}
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Number of Users</p>
          <p>&#8358; 3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Open Balance</p>
          <p>&#8358; 3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Total Deposit</p>
          <p>&#8358; 3,0000</p>
        </div>
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Total Withdrawal</p>
          <p>&#8358; 3,0000</p>
        </div>
      </div>

      {/* Total Balance */}
      <div className='flex w-full justify-end'>
        <p>&#8358; 3,0000</p>
      </div>

      <div className='relative flex gap-2 items-center'>
        <p>Audit Status</p>
        <p className=' bg-[#E7F9F0] font-semibold text-[#0DBF66] py-1 px-2 rounded'>
          Passed
        </p>
        <AuditModal />
        {/* <Popover
          width={120}
          styles={{
            dropdown: {
              top: '-140% !important',
              left: '80% !important',
              backgroundColor: '#54289D',
              color: '#FFFF',
              fontSize: '16px',
              fontStyle: 'bold',
            },
          }}>
          <Popover.Target>
            <img
              src={reciptIcon}
              alt='rcpt'
              className='absolute bottom-[-150%] right-0'
            />
          </Popover.Target>
          <Popover.Dropdown className='flex flex-col rounded-xl p-5'>
            <div className=' w-full text-center cursor-pointer'>
              {' '}
              <p> Run Audit</p>
            </div>
          </Popover.Dropdown>
        </Popover> */}
      </div>
    </div>
  );
};

export default WalletBallance;
