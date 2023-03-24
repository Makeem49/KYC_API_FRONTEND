import React from 'react';
import { Eye } from 'iconsax-react';
import Table from './table';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { get_transaction_list_querry } from '../../../queries/transaction_stats';
import { Skeleton } from '@mantine/core';
import Box from '../../../assets/images/box.png';
import { useTranslation } from 'react-i18next';

const RecentTransaction = () => {
  const { data, isError, isLoading } = useQuery(get_transaction_list_querry(1));
  const { t } = useTranslation();
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
    <div className='w-full p-8 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg'>
      <div className='flex justify-between mb-6 items-center text-[#000000] text-[16px] font-normal'>
        <p className=' dark:text-afexdark-lighter'>
          {t('Top 10 Recent Transactions')}
        </p>
        <div className='flex items-center text-sm text-afexpurple-regular font-bold rounded-md gap-1 bg-afexpurple-lighter dark:bg-afexdark-verydark p-2'>
          {' '}
          <Eye size='20' color='#7738DD' variant='Bulk' />
          <Link to='/transaction'>
            <p>{t('VIEW ALL')}</p>
          </Link>
        </div>
      </div>
      {data!?.length > 0 ? (
        <Table />
      ) : (
        <div className=' p-10 h-[500px] flex flex-col gap-10 items-center'>
          {' '}
          <img src={Box} alt='' className='animate-bounce h-[80px]' />
          <p className=' text-[18px] font-semibold'>
            {t('No data to display')}
          </p>{' '}
        </div>
      )}
    </div>
  );
};

export default RecentTransaction;
