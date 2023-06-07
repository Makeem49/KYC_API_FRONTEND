import { t } from 'i18next';
import { Wallet1 } from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';
// import { useSingleClientCtx } from '../../../../../context';
import { useLocation } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import { get_a_client_query } from '../../../../../queries/single_client';
import { currentNumberFormatter } from '../../../../../utils/formatter';

const SingleClientCard = () => {
  // const { stats } = useSingleClientCtx();
  const { pathname } = useLocation();
  const clientId = pathname.split('/')[2];
  const { data: stats, isLoading } = useQuery(
    get_a_client_query(parseInt(clientId, 10))
  );
  if (isLoading)
    return (
      <Skeleton
        height={200}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className="lg:flex grid gap-4">
      {/* Card One */}
      <div className="flex flex-col gap-8 border-textgrey-light border-b-4 bg-white dark:bg-afexdark-darkest   dark:border-afexdark-dark rounded-lg  text-[#8F8E91] text-[16px] h-[200px] p-5 w-full">
        <div className="flex items-center justify-between w-full">
          <Wallet1 size="30" color="#A982EA" variant="Bulk" />
        </div>

        <span>{t('TOTAL BALANCE')}</span>
        <p className="text-[40px] font-bold text-textgrey-darker  dark:text-textgrey-normal">
          {defaultCountryCode === 'NG'
            ? '₦'
            : defaultCountryCode === 'KE'
            ? 'KES'
            : 'UGX'}{' '}
          {currentNumberFormatter(stats!?.balance)}
        </p>
      </div>

      {/* Card Two */}
      <div className="flex flex-col gap-8  border-textgrey-light border-b-4 bg-white  dark:bg-afexdark-darkest dark:border-afexdark-dark  rounded-lg  text-[#8F8E91] text-[16px]  h-[200px] p-5 w-full">
        <div className="flex items-center justify-between w-full">
          <Wallet1 size="30" color="#A982EA" variant="Bulk" />
        </div>

        <span>{t('AVAILABLE BALANCE')}</span>
        <p className="text-[40px] font-bold text-textgrey-darker dark:text-textgrey-normal">
          {defaultCountryCode === 'NG'
            ? '₦'
            : defaultCountryCode === 'KE'
            ? 'KES'
            : 'UGX'}{' '}
          {currentNumberFormatter(stats!?.balance)}
        </p>
      </div>
    </div>
  );
};

export default SingleClientCard;
