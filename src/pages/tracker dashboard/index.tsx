import React from 'react';
import { ArrowDown2 } from 'iconsax-react';
import WalletCards from './components/wallet cards';
import VirtualCards from './components/cards2';
import ActivityStream from './components/activity stream';

const TrackerDashboard = () => {
  return (
    <div className='w-full h-[100vh] overflow-y-auto flex'>
      {/* Left Section */}
      <div className='w-full h-[100vh] flex flex-col gap-6 overflow-y-auto p-10'>
        {/* Title */}

        <div className='flex justify-between items-center'>
          <div className='flex w-full flex-col'>
            <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
              Tracker System
            </h2>
          </div>

          <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
            <p>Showing data for </p>
            <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
              Today
              <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
            </button>
          </div>
        </div>

        <WalletCards />
        <VirtualCards />
        <ActivityStream />
      </div>
    </div>
  );
};

export default TrackerDashboard;
