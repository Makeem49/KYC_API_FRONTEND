import React from 'react';
import { SearchNormal } from 'iconsax-react';
import Column from './components/column';
import Filter from './components/filters';
import Exports from './components/exports';
import AddUser from '../modal/add user';

const TaskBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='relative'>
        <SearchNormal
          size='20'
          color='#8f8e91'
          variant='Bulk'
          className=' absolute top-2.5 left-6'
        />
        <input
          type='text'
          name=''
          id=''
          placeholder="Search by client's name, id"
          className='py-2 px-14 rounded text-sm text-[#8F8E91] text-[12px] font-normal border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
        />
      </div>
      <div className='flex items-center text-sm text-afexpurple-dark font-bold rounded-md gap-2'>
        <Column />
        <Filter />
        <Exports />
        <AddUser />
      </div>
    </div>
  );
};

export default TaskBar;
