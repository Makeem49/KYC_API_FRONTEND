import React from 'react';
import { Chart21 } from 'iconsax-react';
import { PresentionChart } from 'iconsax-react';
import Chart1 from './chart1';

const Chart = () => {
  return (
    <div className='w-full p-4 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center'>
        <p>Performance Overview</p>
        <div className='flex gap-3'>
          {' '}
          <Chart21
            size='32'
            color='#5D5B60'
            variant='Bulk'
            className='p-2 bg-[#F5F5F5] rounded-md'
          />
          <PresentionChart
            size='32'
            color='#a982ea'
            variant='Bulk'
            className='p-2 bg-[#F1EBFC] rounded-md'
          />
        </div>
      </div>
      <Chart1 />
    </div>
  );
};

export default Chart;
