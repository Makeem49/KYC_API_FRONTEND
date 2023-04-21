import React from 'react';
// import transactionCountImg from '../../../././././../assets/images/transaction-count.svg';
import BubbleChart from './bubbleChat';
import { t } from 'i18next';

const TransactionCount = () => {
  return (
    <div className='w-full rounded-lg border dark:border-afexdark-dark px-2 py-4'>
      <h3 className=' text-textgrey-darker dark:text-afexdark-lighter font-bold text-[18px] ml-3 mb-4'>
        {t('Transaction Count')}
      </h3>
      <BubbleChart />
    </div>
  );
};

export default TransactionCount;
