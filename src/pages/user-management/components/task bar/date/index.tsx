import React from 'react';
import { Add } from 'iconsax-react';
import { Menu } from '@mantine/core';

const Date = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex w-full items-center px-2 py-3 text-[11px] text-[#F1EBFC] bg-[#7738DD] rounded-lg'>
          <span>ADD USER</span>
          <Add size='18' color='#F1EBFC' variant='Bulk' />
        </button>
      </Menu.Target>
    </Menu>
  );
};

export default Date;
