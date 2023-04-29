import { Chart21 } from 'iconsax-react';
import { PresentionChart } from 'iconsax-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { Skeleton } from '@mantine/core';

import Box from '../../../assets/images/box.png';
import { get_dashboard_stats_query } from '../../../queries/dash_board';
import Chart1 from './chart1';
import Chart2 from './chart2';

const Chart = () => {
  const [showBarChat, setShowBarChat] = useState(true);
  const [showLineChart, setShowLineChart] = useState(false);
  const { t } = useTranslation();
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());
  // console.log(list?.performanceOverview, 'here');

  if (isLoading)
    return (
      <Skeleton
        height={300}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <p>Error ocured!!!</p>;

  const activeStyle =
    'p-2 bg-afexpurple-regular bg-opacity-10 text-[#7738DD]  ';
  const baseStyle = 'p-2 bg-[#F1EBFC] bg-opacity-10';

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className='w-full p-4 bg-[#ffff] dark:bg-afexdark-darkest rounded-lg'>
      <div className='flex justify-between mb-6 items-center'>
        <p className=' text-[16px] font-normal text-textgrey-darker dark:text-textgrey-normal'>
          {t('Performance Overview')}
          <span className=' text-sm font-bold'>
            {' '}
            {defaultCountryCode === 'NG'
              ? '(₦)'
              : defaultCountryCode === 'KE'
              ? '(KES)'
              : '(UGX)'}
          </span>
        </p>

        <div className='flex gap-3'>
          <Chart21
            size='32'
            variant='Bulk'
            className={showBarChat ? activeStyle : baseStyle}
            onClick={() => {
              setShowBarChat(true);
              setShowLineChart(false);
            }}
          />
          <PresentionChart
            size='32'
            variant='Bulk'
            onClick={() => {
              setShowLineChart(true);
              setShowBarChat(false);
            }}
            className={showLineChart ? activeStyle : baseStyle}
          />
        </div>
      </div>

      {list!?.performanceOverview.length > 0 ? (
        <div>
          {showBarChat && <Chart1 />}
          {showLineChart && <Chart2 />}
        </div>
      ) : (
        <div className=' p-10 h-[500px] flex flex-col gap-10 items-center'>
          {' '}
          <img src={Box} alt='' className='h-[80px]' />
          <p className=' text-[18px] font-semibold dark:text-textgrey-normal'>
            No data to display
          </p>{' '}
        </div>
      )}
    </div>
  );
};

export default Chart;
