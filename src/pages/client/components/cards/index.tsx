import React from 'react';
import {
  UserCirlceAdd,
  UserTick,
  UserRemove,
  UserOctagon,
} from 'iconsax-react';

const ClientCard = () => {
  return (
    <div className='flex gap-6 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#F1EBFC] border border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL CLIENTS</p>
          <UserCirlceAdd size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            &#8358; 2,000{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>VERIFIED CLIENTS</p>
          <UserTick size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            &#8358; 1,000{' '}
            <span className='text-[#0DBF66] font-normal  text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            UNVERIFIED CLIENTS
          </p>
          <UserRemove size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            &#8358; 200,000,000{' '}
            <span className='text-[#0DBF66] font-normal  text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>ACTIVE CLIENTS</p>
          <UserOctagon size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            &#8358; 200,000,000{' '}
            <span className='text-[#0DBF66] font-normal  text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
