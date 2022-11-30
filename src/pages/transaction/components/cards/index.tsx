import React from 'react';
import { WalletCheck, SaveAdd, MoneySend, CardCoin } from 'iconsax-react';

const TransactionCards = () => {
  return (
    <div className='flex gap-4 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>DEPOSITS</p>
          <SaveAdd size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            N2,000{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>WITHDRAWAL</p>
          <MoneySend size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            N1,000{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>WALLET TRANSFER</p>
          <WalletCheck size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            N200,000,000{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>FEES</p>
          <CardCoin size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            N200,000,000{' '}
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

export default TransactionCards;
