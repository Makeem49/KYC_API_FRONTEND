import React from 'react';
import Column from './components/column';
import Filter from './components/filters';
import Exports from './components/exports';
import Date from './date';

const TaskBar = () => {
  return (
    <div className='flex justify-between'>
      <input
        type='text'
        name=''
        id=''
        placeholder="Search by client's name, id"
        className='p-2 rounded text-sm text-gray-400 border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
      />
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
