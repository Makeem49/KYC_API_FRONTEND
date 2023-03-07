import React from 'react';
import { Eye } from 'iconsax-react';
import Table from './table';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { get_transaction_list_querry } from '../../../queries/transaction_stats';
import { Skeleton } from '@mantine/core';
import Box from '../../../assets/images/box.png';

const RecentTransaction = () => {
  const { data, isError, isLoading } = useQuery(get_transaction_list_querry(1));

  if (isLoading)
    return (
      <Skeleton
        height={400}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <Navigate to='/login' />;
  return (
    <div className='w-full p-8 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center text-[#000000] text-[16px] font-normal'>
        <p>Top 10 recent Transactions</p>
        <div className='flex items-center text-sm text-afexpurple-regular font-bold rounded-md gap-1 bg-afexpurple-lighter p-2'>
          {' '}
          <Eye size='20' color='#7738DD' variant='Bulk' />
          <Link to='/transaction'>
            <p>VIEW ALL</p>
          </Link>
        </div>
      </div>
      {data!?.length > 0 ? (
        <Table />
      ) : (
        <div className=' p-10 h-[500px] flex flex-col gap-10 items-center'>
          {' '}
          <img src={Box} alt='' className='animate-bounce h-[80px]' />
          <p className=' text-[18px] font-semibold'>No Data Available</p>{' '}
        </div>
      )}
    </div>
  );
};

export default RecentTransaction;
