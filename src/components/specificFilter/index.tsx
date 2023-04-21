import React, { useState } from 'react';
import { Popover } from '@mantine/core';
import { Filter } from 'iconsax-react';

interface Props {
  column: any;
  onFilter: (column: string, value: string) => void;
}

const SpecificFilter: React.FC<Props> = ({ column, onFilter }) => {
  const [opened, setOpened] = useState(false);

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilter(column, value);
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={250}
      position={'bottom-end'}>
      <Popover.Target>
        <button
          className='py-4 px-4 flex gap-2 justify-center border items-center rounded-lg text-afexred-regular text-sm xl:text-[14px]  bg-[#FCE9E8] xl:h-[40px] w-full'
          onClick={() => {
            setOpened((o) => !o);
          }}>
          <Filter size={18} variant='Bold' />
          <span>FILTER</span>
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <form onSubmit={handleSubmit}>
          <label className='flex flex-col'>{column}</label>
          <input type='text' value={value} onChange={handleChange} />
          <button type='submit'>Apply</button>
        </form>
      </Popover.Dropdown>
    </Popover>
  );
};

export default SpecificFilter;
