import React from 'react';
import { Menu } from '@mantine/core';
import columnIcon from '../../../../../../assets/images/row-horizontal.svg';

const Column = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <button className='flex items gap-2 w-full text-[14px] text-nowrap p-3 bg-[#F1EBFC] rounded-lg'>
          <img src={columnIcon} alt='colicon' />
          <span>Column</span>
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

export default Column;
