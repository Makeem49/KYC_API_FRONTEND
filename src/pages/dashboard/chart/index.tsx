import React, { useState } from 'react';
import { Chart21 } from 'iconsax-react';
import { PresentionChart } from 'iconsax-react';
import Chart1 from './chart1';

const Chart = () => {
  const [showBarChat, setShowBarChat] = useState(true);
  const [showLineChart, setShowLineChart] = useState(false);

  const activeStyle = 'p-2 bg-[#a982ea] bg-opacity-10 text-[#a982ea]  ';
  const baseStyle = 'p-2 bg-[#F1EBFC] bg-opacity-10';

  return (
    <div className='w-full p-4 bg-[#ffff] rounded-lg'>
      <div className='flex justify-between mb-6 items-center'>
        <p>Performance Overview</p>
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
      <Chart1 showBar={showBarChat} showLine={showLineChart} />
    </div>
  );
};

export default Chart;
