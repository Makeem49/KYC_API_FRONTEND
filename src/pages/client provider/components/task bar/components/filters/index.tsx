import React from 'react';
import { Menu } from '@mantine/core';
import { FilterEdit } from 'iconsax-react';

const Filter = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items gap-2 w-full text-[14px] text-nowrap p-3 bg-[#F1EBFC] rounded-lg'>
          <FilterEdit size='18' variant='Bold' color='#7738dd' />
          <span>FILTERS</span>
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

export default Filter;
