import { Edit2, Trash } from 'iconsax-react';
import React from 'react';

import { Icon } from '@iconify/react';

const TwoStepAuthentication = () => {
  return (
    <div className=' bg-white dark:bg-afexdark-darkest flex flex-col w-full p-6 mtrounded'>
      <div className='w-full flex justify-between'>
        <p className='w-full text-[#000] dark:text-textgrey-normal text-[18px] font-semibold'>
          {' '}
          Two Step Authentication <br />
          <span className='text-[12px] text-textgrey-Light font-normal'>
            Keep your account extra secure with a second authentication step
          </span>
        </p>

        <div className='flex gap-2 w-[280px] items-center justify-center bg-afexpurple-lighter dark:bg-afexdark-verydark font-bold rounded text-afexpurple-regular'>
          <Icon icon='system-uicons:fingerprint' className='text-[20px]' />
          <p className='text-[10px]'>ADD AUTHENTICATION STEP</p>
        </div>
      </div>

      <div className='w-full flex justify-between gap-4 items-center border-b dark:border-afexdark-dark dark:text-textgrey-normal py-3 mt-2'>
        <p className='w-full text-[10px] font-semibold'>
          {' '}
          SMS <br />
          <span className='text-[12px]  font-normal'>+234 703 234 264</span>
        </p>
        <Edit2 size='15' color='#8f8e91' variant='Bulk' />
        <Trash size='15' color='#8f8e91' variant='Bulk' />
      </div>

      <div className='w-full flex justify-between items-center mt-2'>
        <p className='w-full text-[10px] font-semibold'>
          {' '}
          If you lose your mobile device or security key, you can{' '}
          <span className='text-[#458EE6]'>generate a backup code</span> to sign
          in to your account.
        </p>
      </div>
    </div>
  );
};

export default TwoStepAuthentication;
