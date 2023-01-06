import React from 'react';
import AuditModal from '../audit modal';
import { useDashboardCtx } from '../../../context';
import { commaformatter } from '../../../utils';

const WalletBallance = () => {
  const { list } = useDashboardCtx();
  console.log(list);
  return (
    <div className=' flex flex-col gap-2 border border-[#DAD9DA] rounded-lg p-5'>
      <div className='px-5 py-3 bg-afexred-lighter'>
        <span className=' text-afexred-regular'>Total wallet balance</span>
        <p className='text-[20px] text-afexred-regular font-semibold'>
          &#8358;{commaformatter(list?.others?.walletBalance ?? 0)}
        </p>
      </div>

      {/* Available Balances */}
      <div className='w-full flex flex-col gap-4 py-2 border-b pb-4'>
        {' '}
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Total Transfers</p>
          <p>{commaformatter(list?.others?.transfer ?? 0)}</p>
        </div>
        {/* <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Open Balance</p>
          <p>&#8358; 3,0000</p>
        </div> */}
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Total Deposits</p>
          <p>{commaformatter(list?.others?.deposit ?? 0)}</p>
        </div>
        <div className='flex justify-between'>
          <p className=' text-textgrey-normal'>Total Withdrawals</p>
          <p>{commaformatter(list?.others?.withdrawals ?? 0)}</p>
        </div>
      </div>
      {/* 
      Total Balance
      <div className='flex w-full justify-end'>
        <p>&#8358; 3,0000</p>
      </div> */}

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
