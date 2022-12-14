import React from 'react';
import { Menu } from '@mantine/core';
import { ExportSquare } from 'iconsax-react';

const Exports = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items-center justify-center gap-2 w-full text-[14px] text-nowrap py-3 px-6 bg-[#F1EBFC] rounded-lg'>
          <ExportSquare size='18' color='#7738dd' variant='Bulk' />
          <span>EXPORT</span>
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

export default Exports;
