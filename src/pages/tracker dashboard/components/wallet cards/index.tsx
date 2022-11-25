import React from 'react';
import verifyIcon from '../../../../assets/images/verify.svg';

const WalletCards = () => {
  return (
    <div className='flex gap-6 child:h-[128px]'>
      {/* Card One */}
      <div className='relative  flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px]  p-6 w-full gap-1'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[12px] text-[#8F8E91]'>
            Wallet Creation
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-8' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[25px] font-bold text-textgrey-Bold'>2,000</p>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative  flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px]  p-6 w-full gap-1'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[12px] text-[#8F8E91]'>Funding</p>
          <img src={verifyIcon} alt='verifiImg' className='w-8' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[25px] font-bold text-textgrey-Bold'>2,000</p>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative  flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px]  p-6 w-full gap-1'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-medium text-[12px] text-[#8F8E91]'>
            Wallet Transfer
          </p>
          <img src={verifyIcon} alt='verifiImg' className='w-8' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[25px] font-bold text-textgrey-Bold'>2,000</p>
        </div>
      </div>
    </div>
  );
};

export default WalletCards;
