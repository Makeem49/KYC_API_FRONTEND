import React from 'react';
// import tranct from '../../../assets/images/transaction.svg';
import BubbleChart from './bubbleChart';
import { useQuery } from 'react-query';
import { get_dashboard_stats_query } from '../../../queries/dash_board';
import { Skeleton } from '@mantine/core';
import Box from '../../../assets/images/box.png';
import { t } from 'i18next';

const TransactionStatus = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());

  if (isLoading)
    return (
      <Skeleton
        height={300}
        style={{
          borderRadius: '25px',
        }}
      />
    );
  if (isError) return <p>Error!!!</p>;

  return (
    <div className='w-full border border-[#DAD9DA] dark:border-[#333233]  p-6 flex flex-col gap-4 rounded-lg '>
      {/* <img src={tranct} alt='tranct' /> */}
      <p className=' text-[18px] font-bold text-textgrey-darker dark:text-afexdark-lighter'>
        {t('Transaction Status')}
      </p>
      {list!?.transactionStatus ? (
        <BubbleChart />
      ) : (
        <div className=' p-16 flex flex-col gap-6 items-center'>
          {' '}
          <img src={Box} alt='' className='animate-bounce h-[60px]' />
          <p className=' text-[16px] font-semibold'>No data to display</p>{' '}
        </div>
      )}
    </div>
  );
};

export default TransactionStatus;
