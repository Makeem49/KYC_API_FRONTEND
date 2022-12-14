import React from 'react';
import TaskBar from './task bar';
import Table from './table';

const SingleClientTable = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'>
      <TaskBar />
      <Table />
    </div>
  );
};

export default SingleClientTable;
