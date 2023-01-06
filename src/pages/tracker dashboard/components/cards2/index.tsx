import React from 'react';
import verifyIcon from '../../../../assets/images/verify.png';
import { useTrackerStatsCtx } from '../../../../context';

const VirtualCards = () => {
  const { list } = useTrackerStatsCtx();
  return (
    <div className='w-[66%] flex gap-6 child:h-[200px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-full gap-8 first:'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[24px] text-[#8F8E91]'>
            No Virtual Account
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-[52px] h-[52px]' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[48px] font-bold text-textgrey-darker'>
            {list?.overview?.novirtualAccount}
          </p>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-full gap-8 first:'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[24px] text-[#8F8E91]'>
            Unsynced Withdrawal
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-[52px] h-[52px]' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[48px] font-bold text-textgrey-darker'>
            {list?.overview?.unsyncedWithdrawal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualCards;
