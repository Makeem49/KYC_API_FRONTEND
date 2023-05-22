import { Chart, Receipt, UserSquare, Wallet1 } from 'iconsax-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { Skeleton } from '@mantine/core';

import greenDot from '../../../assets/images/Dot.svg';
import redDot from '../../../assets/images/_Dot.svg';
import { Change } from '../../../components';
import { get_client_stats_query } from '../../../queries/clients_stats';
import { get_dashboard_stats_query } from '../../../queries/dash_board';
import { calculatePercentageChange } from '../../../utils';
import { commaformatter } from '../../../utils';

const Card = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());
  // console.log(list, 'for countrycode');

  const { data } = useQuery(get_client_stats_query());
  const { t } = useTranslation();

  if (isLoading)
    return (
      <Skeleton
        height={150}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <p>Error!!!</p>;

  const inactive = data;

  const inactiveClients =
    (inactive!?.sectionOne?.totalClients?.today ?? 0) -
    (inactive!?.sectionOne?.totalClients?.previousDay ?? 0);

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className="flex gap-6 child:h-[134px]">
      {/* Card One */}
      <div className="relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark  border-b-4 bg-white dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('TOTAL CLIENTS')}
          </p>
          <UserSquare size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full flex flex-col gap-2 mb-3 mt-6">
          <p className=" flex items-center gap-1 text-[22px] font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(data?.sectionOne?.totalClients?.today ?? 0)}
          </p>
        </div>

        <div className="absolute bottom-[-10%]  gap-2 flex item-center justify-items-center w-full">
          <p className="flex items-center gap-1 w-[45%]  text-afexgreen-regular bg-[#E7F9F0] dark:bg-afexdark-darker px-1 rounded-lg">
            <img src={greenDot} alt="green" className="w-[6px]" />
            {t('Active')}:{' '}
            <span>
              {commaformatter(data!?.sectionOne?.activeClients?.today ?? 0)}
            </span>
          </p>
          <p className="flex items-cente w-[45%] gap-1 text-afexred-regular bg-[#FDEEEE] dark:bg-afexdark-darker px-1 rounded-lg">
            <img src={redDot} alt="red" className="w-[6px]" />
            {t('Inactive')}: <span>{inactiveClients}</span>
          </p>
        </div>
      </div>

      {/* Card Two */}
      <div className="relative flex flex-col  border-[#DECFF7] dark:border-afexdark-dark border-b-4 bg-white dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('TOTAL TRANSACTIONS')}
          </p>
          <Wallet1 size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full flex flex-col gap-2 mb-3 mt-2">
          <p className="flex items-center gap-1 text-[22px] font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(list?.sectionOne?.transactions?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                list?.sectionOne?.transactions?.today ?? 0,
                list?.sectionOne?.transactions?.previousDay ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Three */}
      <div className="relative flex flex-col border-[#DECFF7] dark:border-afexdark-dark border-b-4 bg-white dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('TOTAL VALUE')}
          </p>
          <Receipt size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full flex flex-col gap-2 mb-3 mt-2">
          <p className="flex items-center gap-1 text-[22px] w-full font-bold  text-textgrey-dark dark:text-textgrey-normal">
            {defaultCountryCode === 'NG'
              ? '₦'
              : defaultCountryCode === 'KE'
              ? 'KES'
              : 'UGX'}
            <span> {commaformatter(list?.sectionOne?.values?.today ?? 0)}</span>
            <Change
              value={calculatePercentageChange(
                list!.sectionOne.transactions.today ?? 0,
                list!?.sectionOne?.values?.previousDay ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Four */}
      <div className="relative flex flex-col  border-[#DECFF7] dark:border-afexdark-dark border-b-4 bg-white dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('CHANNEL SOURCE')}
          </p>
          <Chart size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="flex flex-col gap-2 mb-3 mt-2">
          <p className=" text-afexgreen-regular bg-[#E7F9F0] dark:bg-afexdark-verydark  px-2 rounded-md">
            USD:{' '}
            <span>
              {commaformatter(list!?.sectionOne?.channels?.today?.ussd)}|{' '}
              {commaformatter(list!?.sectionOne?.channels?.previousDay?.ussd)}
            </span>
          </p>
          <p className=" text-afexred-regular bg-[#FDEEEE] dark:bg-afexdark-verydark px-2 rounded-md">
            {t('Others')}:{' '}
            <span>
              {commaformatter(list!?.sectionOne?.channels?.today?.others)} |{' '}
              {commaformatter(list!?.sectionOne?.channels?.previousDay?.others)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
