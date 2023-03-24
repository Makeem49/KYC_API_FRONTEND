import React from 'react';
import { Menu } from '@mantine/core';
import { ArrowDown2 } from 'iconsax-react';

const TimeSet = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items-center bg-afexred-extralight gap-1 w-full text-[12px] text-nowrap p-3 text-afexred-regular rounded'>
          <span>1 Hour</span>
          <ArrowDown2 size='18' color='#E1261C' variant='Bulk' />
        </button>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Menu.Label className='text-[14px] mb-2 bg-[#F1EBFC] rounded p-2'>
          <span className='text-[14px]'>Active status</span>
        </Menu.Label>

        <Menu.Label className='text-[14px]  mb-2 bg-[#F1EBFC] rounded'>
          Date joined
        </Menu.Label>
      </Menu.Dropdown>
    </Menu>
  );
};

export default TimeSet;
