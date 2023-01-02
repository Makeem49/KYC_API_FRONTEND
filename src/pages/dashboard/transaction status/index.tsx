import React from 'react';
// import tranct from '../../../assets/images/transaction.svg';
import BubbleChart from './bubbleChart';

const TransactionStatus = () => {
  return (
    <div className='w-full border border-[#DAD9DA] p-6 flex flex-col gap-4 rounded-lg '>
      {/* <img src={tranct} alt='tranct' /> */}
      <p className=' text-[18px] font-bold text-textgrey-darker'>
        Transaction Status
      </p>
      <BubbleChart />
    </div>
  );
};

export default TransactionStatus;
