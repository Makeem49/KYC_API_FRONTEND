import React from 'react';

const Notification = () => {
  return (
    <div className=' bg-white dark:bg-afexdark-darkest flex flex-col w-full p-6 rounded'>
      <div className='w-full flex justify-between'>
        <p className='w-full text-[#000] dark:text-textgrey-normal text-[18px] font-semibold'>
          {' '}
          Notification
          <br />
          <span className='text-[12px] dark:text-textgrey-normal font-normal'>
            Customize the type of notification you will like to receive
          </span>
        </p>
      </div>
      <div className='w-full flex justify-between dark:text-textgrey-normal items-center py-3 mt-2'>
        <div className='w-full flex gap-6'>
          {' '}
          <input type='checkbox' />
          <p>Transfer notification</p>
        </div>

        <p className='w-full dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          default limit:
          <br />
          <span className=' text-[#000] dark:bg-afexdark-verydark dark:text-textgrey-normal font-semibold '>
            2,000,0000
          </span>
        </p>

        <p className='bg-[#F0F0F0] dark:bg-afexdark-verydark px-4 py-1 w-[280px] rounded dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          Input your limit:
          <br />
          <span className=' text-[#000] dark:text-textgrey-normal font-semibold '>
            {' '}
            0.00
          </span>
        </p>
      </div>
      <div className='w-full flex justify-between dark:text-textgrey-normal items-center py-3 mt-2'>
        <div className='w-full flex gap-6'>
          {' '}
          <input type='checkbox' />
          <p>Storage notification</p>
        </div>

        <p className='w-full dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          default limit:
          <br />
          <span className=' text-[#000] dark:text-textgrey-normal font-semibold '>
            2,000,0000
          </span>
        </p>

        <p className='bg-[#F0F0F0]  dark:bg-afexdark-verydark px-4 py-1 w-[280px] rounded dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          Input your limit:
          <br />
          <span className=' text-[#000] dark:text-textgrey-normal font-semibold '>
            {' '}
            0.00
          </span>
        </p>
      </div>
      <div className='w-full flex justify-between items-center dark:text-textgrey-normal py-3 mt-2'>
        <div className='w-full flex gap-6'>
          {' '}
          <input type='checkbox' />
          <p>Withdrawal notification</p>
        </div>

        <p className='w-full dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          default limit:
          <br />
          <span className=' text-[#000] dark:text-textgrey-normal font-semibold '>
            2,000,0000
          </span>
        </p>

        <p className='bg-[#F0F0F0]  dark:bg-afexdark-verydark px-4 py-1 w-[280px] rounded dark:text-textgrey-normal text-[14px] font-normal'>
          {' '}
          Input your limit:
          <br />
          <span className=' text-[#000] dark:text-textgrey-normal font-semibold '>
            {' '}
            0.00
          </span>
        </p>
      </div>
      <div className='w-full flex justify-end items-center py-6 mt-2 border-b  dark:border-afexdark-dark'>
        <p className=' bg-afexpurple-lighter  dark:bg-afexdark-verydark text-afexpurple-regular px-4 py-1 rounded text-[10px] font-bold'>
          {' '}
          SAVE
        </p>
      </div>
      <div className='w-full text-[12px] py-2'></div>
    </div>
  );
};

export default Notification;
