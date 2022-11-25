import React from 'react';
import { ArrowDown2 } from 'iconsax-react';
import { OpacityContainer } from '../../transitions';
import Header from './header';
import Card from './cards';
import Chart from './chart';
import RecentTransaction from './recent transaction';
import TransactionStatus from './transaction status';
import ChanneSource from './channel source';
import WalletBallance from './wallet balance';

const Dashboard = () => {
  return (
    <OpacityContainer>
      <div className='w-full h-[100vh] overflow-y-auto flex'>
        {/* Left Section */}
        <div className='w-[68%] h-[100vh] flex flex-col gap-14 overflow-y-auto p-10'>
          {/* Title */}
          <div className='flex w-full justify-between items-center'>
            <h2 className='  text-textgrey-Bold text-[18px] font-bold '>
              Dashboard
            </h2>
            <div className='flex w-full px-3 justify-end gap-4 text-[14px] font-normal items-center '>
              <p>Showing data for </p>
              <button className='border flex items-center border-[#BABABA] text-textgrey-Bold p-2 rounded-lg '>
                Today
                <ArrowDown2 size='14' color='#2B2930' variant='Bold' />
              </button>
            </div>
          </div>

          <Header />
          <Card />
          <Chart />
          <RecentTransaction />
        </div>

        {/* Right Section */}
        <div className='bg-white flex flex-col gap-14 p-8 h-[100%] overflow-y-auto w-[32%]'>
          <WalletBallance />
          <TransactionStatus />
          <ChanneSource />
        </div>
      </div>
    </OpacityContainer>
  );
};

export default Dashboard;
