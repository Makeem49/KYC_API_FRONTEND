import React from 'react';
import BarChart from './barChart';

const TopTransaction = () => {
  return (
    <div className='w-full flex flex-col h-full gap-4 rounded-lg border px-2 py-4'>
      <h3 className=' text-textgrey-darker font-bold text-[18px] ml-3 mb-4'>
        Top Transaction Location
      </h3>
      {/* <img src={topTransactionImg} alt='tpi' className='w-full' /> */}
      <BarChart />
    </div>
  );
};

export default TopTransaction;
