import React from 'react';
import { Verify } from 'iconsax-react';
import dotted from '../../../../assets/images/line.svg';
import { t } from 'i18next';
import { useGetAudit } from '../../../../queries';
import { useQuery } from 'react-query';
import { get_client_stats_query } from '../../../../queries/clients_stats';
import { commaformatter } from '../../../../utils';

const SystemLog = () => {
  const { data } = useGetAudit();
  const { data: clients } = useQuery(get_client_stats_query());
  const totalAudit = data!?.inflow - data!?.outflow;
  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className=' relative w-full h-full flex flex-col gap-14 px-10 py-10 font-semibold border border-l-4 border-[#C5A9F0] dark:border-afexdark-verydark'>
      <p className='mb-4 text-[18px] font-bold'>{t('System Audit')}</p>

      {/* TOTAL USERS */}
      <div className=' flex relative gap-[10%] text-[14px] items-center'>
        <div className='flex relative flex-col gap-2 items-center'>
          <Verify size='24' color='#38cb89' />
          <div className=' w-[3px] absolute h-[23px] bg-afexgreen-regular top-8'></div>
        </div>

        <p className=' text-textgrey-normal'>{t("Total Client's")}</p>
        <img src={dotted} alt='dotted' className=' mx-10 w-[170px]' />
        <div className='absolute left-[70%]'>
          {' '}
          <p>{clients?.sectionOne?.totalClients?.today ?? 0}</p>
        </div>
      </div>

      {/* Open Balance */}
      {/* <div className='relative flex gap-[10%] text-[14px] items-center'>
        <div className='relative flex flex-col gap-2 items-center'>
          <Verify size='24' color='#38cb89' />
          <div className='absolute w-[3px] h-[23px] bg-afexgreen-regular top-8'></div>
        </div>

        <p className=' text-textgrey-normal'>{t('Open Balance')}</p>
        <img src={dotted} alt='dotted' className=' mx-10 w-[170px]' />
        <div className='absolute left-[70%]'>
          {' '}
          <p>N5,000,000</p>
        </div>
      </div> */}

      {/* Total Outflow*/}
      <div className='relative flex gap-[10%] text-[14px] items-center '>
        <div className='relative flex flex-col gap-2 items-center'>
          <Verify size='24' color='#38cb89' />
          <div className='absolute w-[3px] h-[23px] bg-afexgreen-regular top-8'></div>
        </div>

        <p className=' text-textgrey-normal'>{t('Total Outflow')}</p>
        <img src={dotted} alt='dotted' className=' mx-10 w-[170px]' />
        <div className='absolute left-[70%]'>
          {' '}
          <p>
            {' '}
            <span>
              {' '}
              {defaultCountryCode === 'NG'
                ? '₦'
                : defaultCountryCode === 'KE'
                ? 'KES'
                : 'UGX'}
            </span>
            {commaformatter(data!?.outflow ?? 0)}
          </p>
        </div>
      </div>

      {/* Total Inflow */}
      <div className='relative flex gap-[10%] text-[14px] items-center '>
        <div className='relative flex flex-col gap-2 items-center'>
          <Verify size='24' color='#38cb89' />
          <div className='absolute w-[3px] h-[23px] bg-afexgreen-regular top-8'></div>
        </div>

        <p className=' text-textgrey-normal'>{t('Total Inflow')}</p>
        <img src={dotted} alt='dotted' className=' mx-10 w-[170px]' />
        <div className='absolute left-[70%]'>
          {' '}
          <p>
            {' '}
            <span>
              {' '}
              {defaultCountryCode === 'NG'
                ? '₦'
                : defaultCountryCode === 'KE'
                ? 'KES'
                : 'UGX'}
            </span>
            {commaformatter(data!?.inflow ?? 0)}
          </p>
        </div>
      </div>

      {/* AUDIT STATUS */}
      <div className=' flex text-right bg-[#FDFCFD] dark:bg-afexdark-verydark justify-between items-center mt-28 p-5'>
        {totalAudit <= 0 ? (
          <p className=' bg-afexred-lighter text-afexred-regular text-[18px] text-center flex justify-center items-center rounded-lg px-8 py-3 '>
            {t('Failed')}
          </p>
        ) : (
          <p className=' bg-afexgreen-lighter text-afexgreen-regular text-[18px] text-center flex justify-center items-center rounded-lg px-8 py-3 '>
            {t('Pass')}
          </p>
        )}

        <p className=' text-[24px]'>
          {' '}
          <small className=' text-textgrey-normal text-[14px]'>
            {t('Audited Balance')}
          </small>{' '}
          <br />
          {defaultCountryCode === 'NG'
            ? '₦'
            : defaultCountryCode === 'KE'
            ? 'KES'
            : 'UGX'}
          {commaformatter(totalAudit ?? 0)}
        </p>
      </div>

      {/* <div className='flex justify-end mt-[20%]'>
        <button className=' text-afexpurple bg-afexpurple-lighter rounded-lg font-semibold px-4 py-2'>
          {t('View Log')}
        </button>
      </div> */}
    </div>
  );
};

export default SystemLog;
