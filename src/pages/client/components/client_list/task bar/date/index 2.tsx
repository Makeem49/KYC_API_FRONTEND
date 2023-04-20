import React from 'react';
import { Calendar } from 'iconsax-react';
import { Menu } from '@mantine/core';

const Date = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items-center p-3 bg-[#F1EBFC] rounded-lg'>
          <Calendar size='18' color='#7738dd' variant='Bulk' />
        </button>
      </Menu.Target>
    </Menu>
  );
};

export default Date;
