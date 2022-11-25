import React from 'react';
import { UserSquare } from 'iconsax-react';
import { Wallet1 } from 'iconsax-react';
import { Receipt } from 'iconsax-react';

const ApiRequestCards = () => {
  return (
    <div className='flex gap-8'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-semibold text-[#8F8E91]'>
            TOTAL SUCCESSFUL REQUEST
          </p>
          <UserSquare size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-Bold'>
            42,469 <span className='text-[#0DBF66] text-[13px]'> + 36% </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-semibold text-[#8F8E91]'>TOTAL FAILED REQUEST</p>
          <Wallet1 size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-Bold'>
            7,212 <span className='text-[#0DBF66] text-[13px]'> + 36% </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-semibold text-[#8F8E91]'>
            TOTAL NOT FOUND REQUEST
          </p>
          <Receipt size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-Bold'>
            49,681
            <span className='text-[#0DBF66] text-[13px]'> + 36% </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-semibold text-[#8F8E91]'>
            TOTAL SUCCESSFUL REQUEST
          </p>
          <Receipt size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-Bold'>
            42,469
            <span className='text-[#0DBF66] text-[13px]'> + 36% </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>
    </div>
  );
};

export default ApiRequestCards;
