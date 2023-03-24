import React, { useState } from 'react';
import { Popover } from '@mantine/core';
import { FilterEdit } from 'iconsax-react';

const Filter = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={250}
      position={'bottom-end'}>
      <Popover.Target>
        <button
          className='py-4 px-3 flex gap-2 border items-center rounded-lg text-afexpurple-regular text-sm xl:text-[14px] bg-afexpurple-lighter xl:h-[40px] w-full'
          onClick={() => {
            setOpened((o) => !o);
          }}>
          <FilterEdit size='18' variant='Bold' color='#7738DD' />
          <span>FILTERS</span>
        </button>
      </Popover.Target>

      {/* <Popover.Dropdown>
        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          <input type='checkbox' id='remember' className='checkbox white' />
          Activate all
        </button>

        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight  rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          <input type='checkbox' id='remember' className='checkbox white' />{' '}
          Deactivate all
        </button>
      </Popover.Dropdown> */}
    </Popover>
  );
};

export default Filter;
