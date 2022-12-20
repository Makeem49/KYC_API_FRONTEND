import React from 'react';
import BarChart from './horizantalBar';

const TransactionValue = () => {
  return (
    <div className='w-full rounded-lg border px-2 py-4'>
      <h3 className=' text-textgrey-darker font-bold text-[18px] ml-3 mb-4'>
        Transaction Value
      </h3>
      <BarChart />
    </div>
  );
};

export default TransactionValue;
