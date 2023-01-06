import React, { useState } from 'react';
import { Popover } from '@mantine/core';
import columnIcon from '../../../../../../../assets/images/row-horizontal.png';

const Column = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={250}
      position={'bottom-end'}>
      <Popover.Target>
        <button
          className='py-4 px-3 flex justify-center gap-2 border items-center rounded-lg text-afexred-regular text-sm xl:text-[14px]  bg-[#FCE9E8] xl:h-[40px] w-full'
          onClick={() => {
            setOpened((o) => !o);
          }}>
          <img src={columnIcon} alt='colicon' />
          <span>COLUMNS</span>
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          <input type='checkbox' id='remember' className='checkbox white' />
          Activate all
        </button>

        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight  rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          <input type='checkbox' id='remember' className='checkbox white' />{' '}
          Deactivate all
        </button>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Column;
