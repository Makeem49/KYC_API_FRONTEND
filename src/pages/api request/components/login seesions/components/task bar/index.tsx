import React from 'react';
import Column from './components/column';

const TaskBar = () => {
  return (
    <div className='flex justify-between'>
      <p className=' font-normal'>Login Sessions</p>
      <div className='flex items-center gap-3'>
        {' '}
        <input
          type='text'
          name=''
          id=''
          placeholder="Search by client's name, id"
          className='p-2 rounded text-sm text-gray-400 border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
        />
        <div className='flex items-center text-sm text-afexpurple-dark font-bold rounded-md gap-2'>
          <Column />
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
