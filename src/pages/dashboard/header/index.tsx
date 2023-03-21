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
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
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

  console.log(today, 'needs fix');

  return (
    <div className='relative flex justify-between text-[14px] items-center rounded-lg bg-[#54289D] dark:bg-afexdark-darkest w-full h-[94px] p-5 text-[#F1EBFC] '>
      <img src={hafCirc} alt='' className=' absolute top-0 left-[20%]' />
      <img
        src={hafCirc}
        alt=''
        className=' absolute bottom-[-0%] left-[0%] rotate-180'
      />
      <img
        src={hafCirc}
        alt=''
        className=' dark:hidden dark:z-0 absolute top-0 right-[-2%]  rotate-45'
      />

      <div className='hidden dark:block w-[120px] h-[60px] absolute top-2 right-[-3%] -rotate-150 dark:border-afexdark-verydark rounded-t-full border-[22px] border-b-0'></div>

      <div>
        <h2 className='text-[20px] flex items-center text-[#ffff]'>
          <span>
            {t('Welcome')} {list?.username}{' '}
          </span>

          <img src={waving} alt='wave' className='w-10' />
        </h2>
        <p>
          {' '}
          {commaformatter(data?.sectionOne?.transactions?.today ?? 0)}{' '}
          {t('transactions have been initiated')}.
        </p>
      </div>

      <div className='text-[12px] z-20 bg-[#44207E] dark:bg-afexdark-verydark p-3 rounded-lg'>
        <p>{t(today)}</p>
      </div>
    </div>
  );
};

export default Header;
