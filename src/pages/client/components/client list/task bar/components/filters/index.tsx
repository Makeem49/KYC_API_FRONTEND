import React from 'react';
import { Menu } from '@mantine/core';
import { FilterEdit } from 'iconsax-react';

const Filter = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items gap-2 w-full text-[14px] text-nowrap py-4 px-6  bg-afexred-extralight text-afexred-regular rounded-lg'>
          <FilterEdit size='18' variant='Bold' color='#E1261C' />
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
