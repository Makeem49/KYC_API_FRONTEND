import React from 'react';
import { UserSquare, Chart, Wallet1, Receipt } from 'iconsax-react';
import redDot from '../../../assets/images/_Dot.svg';
import greenDot from '../../../assets/images/Dot.svg';
import { Change } from '../../../components';
import { calculatePercentageChange } from '../../../utils';
import { commaformatter } from '../../../utils';
import { get_dashboard_stats_query } from '../../../queries/dash_board';
import { get_client_stats_query } from '../../../queries/clients_stats';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';

const Card = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());
  // console.log(list, 'for countrycode');

  const { data } = useQuery(get_client_stats_query());

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
    <div className='flex gap-6 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL ClIENTS</p>
          <UserSquare size='25' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
          <p className=' flex items-center gap-1 text-[22px] font-bold text-textgrey-dark'>
            {commaformatter(data?.sectionOne?.totalClients?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                data!?.sectionOne?.totalClients?.today ?? 0,
                data!?.sectionOne?.totalClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>vs previous day</span>
        </div>

        <div className='absolute bottom-[-10%] item-center flex justify-between'>
          <p className='flex items-center gap-1 text-[#076D3A] bg-[#E7F9F0] px-1 rounded-lg'>
            <img src={greenDot} alt='green' className='w-[6px]' />
            Active: <span>{data!?.sectionOne?.activeClients?.today}</span>
          </p>
          <p className='flex items-center gap-1 text-[#873031] bg-[#FDEEEE] px-1 rounded-lg'>
            <img src={redDot} alt='red' className='w-[6px]' />
            Inactive: <span>{inactiveClients}</span>
          </p>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col  border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL TRANSACTION</p>
          <Wallet1 size='25' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[22px] font-bold text-textgrey-dark'>
            {commaformatter(list?.sectionOne?.transactions?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                list?.sectionOne?.transactions?.today ?? 0,
                list?.sectionOne?.transactions?.previousDay ?? 0
              )}
            />
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL VALUE</p>
          <Receipt size='25' color='#A982EA' variant='Bulk' />
        </div>
        <div className='w-full flex flex-col gap-2 mb-3 mt-2'>
          <p className='flex items-center gap-1 text-[22px] w-full font-bold  text-textgrey-dark'>
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
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col  border-[#DECFF7] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>CHANNEL SOURCE</p>
          <Chart size='25' color='#A982EA' variant='Bulk' />
        </div>
        <div className='flex flex-col gap-2 mb-3 mt-2'>
          <p className='text-[#076D3A] bg-[#E7F9F0]  px-2 rounded-md'>
            USD:{' '}
            <span>
              {commaformatter(list!?.sectionOne?.channels?.today?.ussd)}|{' '}
              {commaformatter(list!?.sectionOne?.channels?.previousDay?.ussd)}
            </span>
          </p>
          <p className='text-[#873031] bg-[#FDEEEE] px-2 rounded-md'>
            Others:{' '}
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
