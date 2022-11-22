import React from 'react';
import ClientCard from './components/cards';
import ClientList from './components/client list';
import RecentSearch from './components/recent search';
import TransactionCount from './components/transaction count';
import TransactionValue from './components/transaction value';
import { ArrowDown2 } from 'iconsax-react';

function Client() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto flex'>
      {/* Left Section */}
      <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
        {/* Title */}

        <div className='flex justify-between items-center'>
          <div className='flex w-full flex-col'>
            <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
              Client
            </h2>
            <p>
              Home/ <span>Clients</span>
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

        <ClientCard />
        <ClientList />
      </div>

      {/* Right Section */}
      <div className='bg-white flex flex-col gap-14 p-8 h-[100%] overflow-y-auto shadow w-[32%]'>
        <RecentSearch />
        <TransactionCount />
        <TransactionValue />
      </div>
    </div>
  );
}

export default Client;
