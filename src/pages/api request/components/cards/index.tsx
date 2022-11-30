import React from 'react';
import {
  ClipboardTick,
  ClipboardClose,
  ClipboardExport,
  WalletCheck,
} from 'iconsax-react';

const ApiRequestCards = () => {
  return (
    <div className='flex gap-10 child:h-[194px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px] p-6 gap-8 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            TOTAL SUCCESSFUL REQUEST
          </p>
          <ClipboardTick size='25' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[31px]  font-bold text-textgrey-dark'>
            42,469{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[12px] p-6 gap-8 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            TOTAL FAILED REQUEST
          </p>
          <ClipboardClose size='25' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[31px]  font-bold text-textgrey-dark'>
            7,212{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-6 gap-8 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            TOTAL NOT FOUND REQUEST
          </p>
          <ClipboardExport size='25' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[31px] w-full  font-bold text-textgrey-dark'>
            49,681
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-6 gap-8 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            TOTAL SUCCESSFUL REQUEST
          </p>
          <WalletCheck size='25' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[31px] w-full  font-bold text-textgrey-dark'>
            42,469
            <span className='text-[#0DBF66] font-normal text-[13px]'>
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

export default ApiRequestCards;
