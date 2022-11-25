import React from 'react';
import TaskBar from './components/task bar';
import Table from './components/table';

const ApiKeys = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'>
      <TaskBar />
      <Table />
    </div>
  );
};

export default ApiKeys;
