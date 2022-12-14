import React from 'react';

import { Wallet1 } from 'iconsax-react';

const SingleClientCard = () => {
  return (
    <div className='flex gap-4'>
      {/* Card One */}
      <div className='flex flex-col gap-8 border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[16px] h-[200px] p-5 w-full'>
        <div className='flex items-center justify-between w-full'>
          <Wallet1 size='30' color='#a982ea' variant='Bulk' />
        </div>

        <span>TOTAL BALANCE</span>
        <p className='text-[40px] font-bold text-textgrey-darker'>N2,000</p>
      </div>

      {/* Card Two */}
      <div className='flex flex-col gap-8 border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[16px]  h-[200px] p-5 w-full'>
        <div className='flex items-center justify-between w-full'>
          <Wallet1 size='30' color='#a982ea' variant='Bulk' />
        </div>

        <span>AVAILABLE BALANCE</span>
        <p className='text-[40px] font-bold text-textgrey-darker'>N2,000</p>
      </div>
    </div>
  );
};

export default SingleClientCard;
