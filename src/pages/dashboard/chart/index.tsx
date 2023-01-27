import React, { useState } from 'react';
import { Chart21 } from 'iconsax-react';
import { PresentionChart } from 'iconsax-react';
import Chart1 from './chart1';
import Chart2 from './chart2';

const Chart = () => {
  const [showBarChat, setShowBarChat] = useState(true);
  const [showLineChart, setShowLineChart] = useState(false);

  const activeStyle = 'p-2 bg-afexred-regular bg-opacity-10 text-[#E1261C]  ';
  const baseStyle = 'p-2 bg-[#F1EBFC] bg-opacity-10';

  return (
    <div className='w-full p-4 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center'>
        <p className=' text-[16px] font-normal text-textgrey-darker'>
          Performance Overview
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
      {showBarChat && <Chart1 />}
      {showLineChart && <Chart2 />}
    </div>
  );
};

export default Chart;
