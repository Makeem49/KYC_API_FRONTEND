import React from 'react';
import { Eye } from 'iconsax-react';
import Table from './table';
const RecentTransaction = () => {
  return (
    <div className='w-full p-8 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center text-[#000000] text-[16px] font-normal'>
        <p>Top 10 recent Transactions</p>
        <div className='flex items-center text-sm text-afexpurple-dark font-bold rounded-md gap-1 bg-[#F1EBFC] p-2'>
          {' '}
          <Eye size='20' color='#a982ea' variant='Bulk' />
          <p>VIEW ALL</p>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default RecentTransaction;
