import React from 'react';
import { Eye } from 'iconsax-react';
import Table from './table';
import { Link } from 'react-router-dom';

const RecentTransaction = () => {
  return (
    <div className='w-full p-8 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center text-[#000000] text-[16px] font-normal'>
        <p>Top 10 recent Transactions</p>
        <div className='flex items-center text-sm text-afexred-regular font-bold rounded-md gap-1  bg-afexred-extralight p-2'>
          {' '}
          <Eye size='20' color='#E1261C' variant='Bulk' />
          <Link to='/transaction'>
            <p>VIEW ALL</p>
          </Link>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default RecentTransaction;
