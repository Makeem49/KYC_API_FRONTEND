import React from 'react';
import hafCirc from '../../../assets/images/half.svg';
import { commaformatter } from '../../../utils';
import {
  get_admin_query,
  get_dashboard_stats_query,
} from '../../../queries/dash_board';
import { useQuery } from 'react-query';
import waving from '../../../assets/svgs/waving.svg';
import { Skeleton } from '@mantine/core';

const Header = () => {
  const { data: list, isLoading } = useQuery(get_admin_query());
  const { data } = useQuery(get_dashboard_stats_query());

  if (isLoading)
    return (
      <Skeleton
        height={300}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  const today = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='relative flex justify-between text-[14px] items-center rounded-lg bg-[#54289D] w-full h-[94px] p-5 text-[#F1EBFC] '>
      <img src={hafCirc} alt='' className=' absolute top-0 left-[20%]' />
      <img
        src={hafCirc}
        alt=''
        className=' absolute bottom-[-15%] left-[0%] rotate-180'
      />
      <img
        src={hafCirc}
        alt=''
        className=' absolute top-0 right-[-2%]  rotate-45'
      />

      <div>
        <h2 className='text-[20px] flex items-center text-[#ffff]'>
          <span>Welcome {list?.username} </span>
          <img src={waving} alt='wave' className='w-10' />
        </h2>
        <p>
          {' '}
          {commaformatter(data?.sectionOne?.transactions?.today ?? 0)}{' '}
          transactions have been initiated.
        </p>
      </div>

      <div className='text-[12px] bg-[#44207E] p-3 rounded-lg'>
        <p>{today}</p>
      </div>
    </div>
  );
};

export default Header;
