import React from 'react';
import TaskBar from './task bar/';
import Table from './table';

const ClientList = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] shadow rounded-lg'>
      <TaskBar />
      <Table />
    </div>
  );
};

export default ClientList;
