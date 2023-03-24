import React, { useState } from 'react';
import { Popover } from '@mantine/core';
import { ExportSquare } from 'iconsax-react';

const Exports = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={100}
      position={'bottom-end'}>
      <Popover.Target>
        <button
          className='py-4 px-3 flex gap-2 border items-center rounded-lg text-afexred-regular text-sm xl:text-[14px]  bg-[#FCE9E8] xl:h-[40px] w-full'
          onClick={() => {
            setOpened((o) => !o);
          }}>
          <ExportSquare size='18' color='#E1261C' variant='Bulk' />
          <span>EXPORT</span>
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          PDF
        </button>

        <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexred-extralight  rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
          {' '}
          CSV
        </button>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Exports;
