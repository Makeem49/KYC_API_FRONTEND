import React from 'react';
import verifyIcon from '../../../../assets/images/verify.png';
import { useTrackerStatsCtx } from '../../../../context';
const WalletCards = () => {
  const { list } = useTrackerStatsCtx();

  return (
    <div className='flex gap-6 child:h-[200px]'>
      {/* Card One */}
      <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-full gap-8'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[24px] text-[#8F8E91]'>
            Client’s with no wallet
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-[52px] h-[52px]' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[48px] font-bold text-textgrey-darker'>
            {list?.overview?.noWallets}
          </p>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-full gap-8'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[24px] text-[#8F8E91]'>
            Failed Funding
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-[52px] h-[52px]' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[48px] font-bold text-textgrey-darker'>
            {list?.overview?.failedFunding}
          </p>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-full gap-8'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[24px] text-[#8F8E91]'>
            Unsynced Wallet Transfer
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-[52px] h-[52px]' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[48px] font-bold text-textgrey-darker'>
            {list?.overview?.unsyncedWalletTransfer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletCards;
