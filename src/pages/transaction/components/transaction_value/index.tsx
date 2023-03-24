import React from 'react';
import BarChart from './horizantalBar';
import { t } from 'i18next';

const TransactionValue = () => {
  return (
    <div className='w-full rounded-lg border dark:border-afexdark-dark px-2 py-4'>
      <h3 className=' text-textgrey-darker dark:text-afexdark-lighter font-bold text-[18px] ml-3 mb-4'>
        {t('Transaction Value')}
      </h3>
      <BarChart />
    </div>
  );
};

export default TransactionValue;
