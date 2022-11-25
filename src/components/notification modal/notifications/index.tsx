import React from 'react';
import adamsIcon from '../../../assets/images/Adams.svg';

const Notications = () => {
  return (
    <div className='flex flex-col gap-5 px-8 font-normal'>
      {/* TODAY */}
      <p className=' font-semibold'>Today</p>
      {/* ADAMU ADAMU */}
      <div className='w-full bg-[#F5F5F5] flex justify-between p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img src={adamsIcon} alt='adams' />
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-semibold'>Adamu Adamu</p>
            <span className='text-[12px] text-[#C1C0C2]'>001-12343-00001</span>
            <span className='text-[12px] text-[#5D5B60]'>
              Made a withdrawal N150,000.00
            </span>
          </div>
        </div>

        {/* TIME */}
        <div className=' flex flex-col items-center gap-14'>
          <span className='text-[#C1C0C2] text-[10px]'>10:15</span>
          <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
        </div>
      </div>

      {/* Belau Johnson */}
      <div className='w-full bg-[#F5F5F5] flex justify-between p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img src={adamsIcon} alt='adams' />
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-semibold'>Belau Johnson</p>
            <span className='text-[12px] text-[#C1C0C2]'>001-12343-00001</span>
            <span className='text-[12px] text-[#5D5B60]'>
              Made a withdrawal N150,000.00
            </span>
          </div>
        </div>

        {/* TIME */}
        <div className=' flex flex-col items-center gap-14'>
          <span className='text-[#C1C0C2] text-[10px]'>10:15</span>
          <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
        </div>
      </div>

      {/* ADAMU ADAMU */}
      <div className='w-full bg-[#F5F5F5] flex justify-between p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img src={adamsIcon} alt='adams' />
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-semibold'>Adamu Adamu</p>
            <span className='text-[12px] text-[#C1C0C2]'>001-12343-00001</span>
            <span className='text-[12px] text-[#5D5B60]'>
              Made a withdrawal N150,000.00
            </span>
          </div>
        </div>

        {/* TIME */}
        <div className=' flex flex-col items-center gap-14'>
          <span className='text-[#C1C0C2] text-[10px]'>10:15</span>
          <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
        </div>
      </div>

      {/* Yesterday */}
      <p className=' font-semibold'>Yesterday</p>
      {/* ADAMU ADAMU */}
      <div className='w-full bg-[#F5F5F5] flex justify-between p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img src={adamsIcon} alt='adams' />
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-semibold'>Adamu Adamu</p>
            <span className='text-[12px] text-[#C1C0C2]'>001-12343-00001</span>
            <span className='text-[12px] text-[#5D5B60]'>
              Made a withdrawal N150,000.00
            </span>
          </div>
        </div>

        {/* TIME */}
        <div className=' flex flex-col items-center gap-14'>
          <span className='text-[#C1C0C2] text-[10px]'>10:15</span>
          <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
        </div>
      </div>

      {/* Belau Johnson */}
      <div className='w-full bg-[#F5F5F5] flex justify-between p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img src={adamsIcon} alt='adams' />
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-semibold'>Belau Johnson</p>
            <span className='text-[12px] text-[#C1C0C2]'>001-12343-00001</span>
            <span className='text-[12px] text-[#5D5B60]'>
              Made a withdrawal N150,000.00
            </span>
          </div>
        </div>

        {/* TIME */}
        <div className=' flex flex-col items-center gap-14'>
          <span className='text-[#C1C0C2] text-[10px]'>10:15</span>
          <div className='bg-[#38CB89] rounded-full w-[8px] h-[8px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Notications;
