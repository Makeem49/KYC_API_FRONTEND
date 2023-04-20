import React from 'react';
import ChanneSource from './channelCharts';
import { get_dashboard_stats_query } from '../../../queries/dash_board';
import { useQuery } from 'react-query';
import Box from '../../../assets/images/box.png';
import { Skeleton } from '@mantine/core';
import { t } from 'i18next';

const ChannelSource = () => {
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
    <div className='h-full flex flex-col gap-8 border border-[#DAD9DA] dark:border-[#333233]  rounded-lg p-5'>
      <p className=' text-textgrey-darker dark:text-afexdark-lighter font-semibold text-[18px] ml-6'>
        {t('Service Provider')}
      </p>
      {list!?.serviceProviderStatus.length > 0 ? (
        <ChanneSource />
      ) : (
        <div className=' p-16 flex flex-col gap-6 items-center'>
          {' '}
          <img src={Box} alt='' className='animate-bounce h-[60px]' />
          <p className=' text-[16px] dark:text-afexdark-lighter font-semibold'>
            {t('No data to display')}
          </p>{' '}
        </div>
      )}
    </div>
  );
};

export default ChannelSource;
