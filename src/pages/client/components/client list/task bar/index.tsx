import React from 'react';
import { SearchNormal } from 'iconsax-react';
import Column from './components/column';
import Filter from './components/filters';
import Exports from './components/exports';
import Date from './date';

const TaskBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='relative'>
        <SearchNormal
          size='20'
          color='#c1c0c2'
          variant='Bulk'
          className=' absolute top-2.5 left-2 '
        />
        <input
          type='text'
          name=''
          id=''
          placeholder="Search by client's name, id"
          className=' py-2 px-10 rounded text-sm text-gray-400 border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
        />
      </div>

      <div className='flex items-center text-sm text-afexpurple-dark font-bold rounded-md gap-3'>
        <Column />
        <Filter />
        <Exports />
        <Date />
      </div>
    </div>
  );
};

export default TaskBar;
