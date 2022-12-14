import React from 'react';
import ProfileBoard from './components/profile board';
import { ArrowDown2 } from 'iconsax-react';
import SingleClientCard from './components/cards';
import SingleClientTable from './components/single client table';

const SingleClient = () => {
  return (
    <div className='w-full h-[100vh]  overflow-y-auto flex'>
      {/* Left Section */}
      <div className='w-[35%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
        {/* Title */}
        <div className='flex w-full flex-col'>
          <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
            Client Profile
          </h2>
          <p>
            Home/ <span>Client</span> <span>Client profile</span>
          </p>
        </div>
        <ProfileBoard />
      </div>

      {/* Right Section */}
      <div className='flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[65%]'>
        <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
          <p>Showing data for </p>
          <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
            Today
            <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
          </button>
        </div>

        <SingleClientCard />
        <SingleClientTable />
      </div>
    </div>
  );
};

export default SingleClient;
