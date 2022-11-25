import React from 'react';
import { ArrowDown2 } from 'iconsax-react';
import ApiRequestCards from './components/cards';
import ApiKeys from './components/api keys';
import LoginSessions from './components/login seesions';

const ApiRequest = () => {
  return (
    <div className='w-full h-[100vh]  overflow-y-auto flex'>
      <div className='w-full h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
        {/* Title */}
        <div className='flex w-full justify-between items-center'>
          <div className='flex w-full flex-col'>
            <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
              Api Request
            </h2>
            <p>
              Home/ <span>Api Request</span>
            </p>
          </div>

          <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
            <p>Showing data for </p>
            <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
              Today
              <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
            </button>
          </div>
        </div>

        <ApiRequestCards />
        <ApiKeys />
        <LoginSessions />
      </div>
    </div>
  );
};

export default ApiRequest;
