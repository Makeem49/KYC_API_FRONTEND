import React from 'react';
// import transactionCountImg from '../../../././././../assets/images/transaction-count.svg';
import BubbleChart from './bubbleChat';

const TransactionCount = () => {
  return (
    <div className='w-full rounded-lg border px-2 py-4'>
      <h3 className=' text-textgrey-darker font-bold text-[18px] ml-3 mb-4'>
        Transaction Count
      </h3>
      <BubbleChart />
    </div>
  );
};

export default TransactionCount;
