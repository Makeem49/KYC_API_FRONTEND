import React from 'react';

const ActivityLogs = () => {
  return (
    <div className=' flex text-[14px] flex-col gap-6 py-1'>
      <p className='text-[#000] font-semibold text-[18px]'>Logs</p>

      {/* LOG ONE */}
      <div className='w-full flex flex-col border gap-1 border-[#F0F0F0] p-5 rounded'>
        <span className=' max-w-[80px] rounded p-1 text-center bg-[#E7F9F0] text-[#076D3A]'>
          200 OK
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>

      {/* LOG TWO */}
      <div className='w-full flex flex-col gap-1 border border-[#F0F0F0] p-5 rounded'>
        <span className=' w-20 rounded p-1 text-center bg-[#E7F9F0] text-[#076D3A]'>
          200 OK
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>

      {/* LOG THREE */}
      <div className='w-full flex flex-col gap-1 border border-[#F0F0F0] p-5 rounded'>
        <span className=' max-w-[80px] rounded p-1 text-center bg-[#FDEEEE] text-[#873031]'>
          500 ERR
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>

      {/* LOG FOUR */}
      <div className='w-full flex flex-col gap-1 border border-[#F0F0F0] p-5 rounded'>
        <span className=' max-w-[80px] rounded p-1 text-center bg-[#FCF3E8] text-[#653E0D]'>
          404 WRN
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>

      {/* LOG FIVE */}
      <div className='w-full flex flex-col gap-1 border border-[#F0F0F0] p-5 rounded'>
        <span className=' max-w-[80px] rounded p-1 text-center bg-[#E7F9F0] text-[#076D3A]'>
          200 OK
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>

      {/* LOG SIX */}
      <div className='w-full flex flex-col gap-1 border border-[#F0F0F0] p-5 rounded'>
        <span className=' max-w-[80px] rounded p-1 text-center bg-[#E7F9F0] text-[#076D3A]'>
          200 OK
        </span>
        <p>POST /v1/invoices/in_9896_3062/payment</p>
        <span className='text-[#8F8E91]'>20 Dec 2022, 9:23 pm</span>
      </div>
    </div>
  );
};

export default ActivityLogs;
