import { t } from 'i18next';
import { CardCoin, MoneySend, SaveAdd, WalletCheck } from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from '@mantine/core';

import { Change } from '../../../../components';
import { get_transaction_stats_query } from '../../../../queries/transaction_stats';
import { calculatePercentageChange } from '../../../../utils';
import { commaformatter } from '../../../../utils';

const TransactionCards = () => {
  const { data: stats, isLoading } = useQuery(get_transaction_stats_query());

  if (isLoading)
    return (
      <Skeleton
        height={150}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className='flex gap-4 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>{t('DEPOSITS')}</p>
          <SaveAdd size='20' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[18px] font-bold text-textgrey-dark'>
            {defaultCountryCode === 'NG'
              ? '₦'
              : defaultCountryCode === 'KE'
              ? 'KES'
              : 'UGX'}{' '}
            {commaformatter(stats?.dailyTransactions?.deposit?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                stats?.dailyTransactions?.deposit?.today ?? 0,
                stats?.dailyTransactions?.deposit?.yesterday ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>{t('WITHDRAWAL')}</p>
          <MoneySend size='20' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[18px] font-bold text-textgrey-dark'>
            {defaultCountryCode === 'NG'
              ? '₦'
              : defaultCountryCode === 'KE'
              ? 'KES'
              : 'UGX'}{' '}
            {commaformatter(stats?.dailyTransactions?.withdrawals?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                stats?.dailyTransactions?.withdrawals?.today ?? 0,
                stats?.dailyTransactions?.withdrawals?.yesterday ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            {t('WALLET TRANSFER')}
          </p>
          <WalletCheck size='20' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[18px] w-full font-bold text-textgrey-dark'>
            {defaultCountryCode === 'NG'
              ? '₦'
              : defaultCountryCode === 'KE'
              ? 'KES'
              : 'UGX'}{' '}
            {commaformatter(stats?.dailyTransactions?.transfer?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                stats?.dailyTransactions?.transfer?.today ?? 0,
                stats?.dailyTransactions?.transfer?.yesterday ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>{t('FEES')}</p>
          <CardCoin size='20' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[18px] w-full font-bold text-textgrey-dark'>
            {defaultCountryCode === 'NG'
              ? '₦'
              : defaultCountryCode === 'KE'
              ? 'KES'
              : 'UGX'}{' '}
            0{' '}
            {/* <span className='text-[#0DBF66] font-normal text-[13px]'> 0% </span> */}
          </p>
          <span>vs previous day</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCards;
