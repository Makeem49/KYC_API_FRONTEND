import React from 'react';
import BarChart from './barChart';
import { t } from 'i18next';

const TopTransaction = () => {
  return (
    <div className='w-full flex flex-col h-full gap-4 rounded-lg border dark:border-afexdark-dark px-2 py-4'>
      <h3 className=' text-textgrey-darker dark:text-afexdark-lighter font-bold text-[18px] ml-3 mb-4'>
        {t('Top Transaction Location')}
      </h3>
      {/* <img src={topTransactionImg} alt='tpi' className='w-full' /> */}
      <BarChart />
    </div>
  );
};

export default TopTransaction;
