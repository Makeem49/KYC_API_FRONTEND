import React from 'react';
import { UserSquare } from 'iconsax-react';
import { Wallet1 } from 'iconsax-react';
import { Receipt } from 'iconsax-react';
import { Chart } from 'iconsax-react';
import redDot from '../../../assets/images/_Dot.svg';
import greenDot from '../../../assets/images/Dot.svg';

const Card = () => {
  return (
    <div className='flex gap-6 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#F1EBFC] border border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL USER</p>
          <UserSquare size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            N2,000{' '}
            <span className='text-[#0DBF66] font-normal text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>

        <div className='absolute bottom-[-10%] item-center flex gap-1'>
          <p className='flex items-center gap-1 text-[#076D3A] bg-[#E7F9F0] px-1 rounded-lg'>
            <img src={greenDot} alt='green' className='w-[6px]' />
            Active: <span>1,300</span>
          </p>
          <p className='flex items-center gap-1 text-[#873031] bg-[#FDEEEE] px-1 rounded-lg'>
            <img src={redDot} alt='red' className='w-[6px]' />
            Inactive: <span>700</span>
          </p>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL TRANSACTION</p>
          <Wallet1 size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
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
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL VALUE</p>
          <Receipt size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold  text-textgrey-dark'>
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
      <div className='relative flex flex-col border border-[#F1EBFC] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>CHANNEL SOURCE</p>
          <Chart size='20' color='#a982ea' variant='Bulk' />
        </div>
        <div className='flex flex-col gap-2 mb-3 mt-2'>
          <p className='text-[#076D3A] bg-[#E7F9F0]  px-2 rounded-md'>
            USD: <span>1,000 | 40B</span>
          </p>
          <p className='text-[#873031] bg-[#FDEEEE] px-2 rounded-md'>
            Mobile: <span>2,000 | 60B</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
