import { t } from 'i18next';
import {
  UserCirlceAdd,
  UserOctagon,
  UserRemove,
  UserTick,
} from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from '@mantine/core';

import { Change } from '../../../../components';
import {
  useGetClientList,
  useGetUnVerifiedClientList,
} from '../../../../queries';
import { get_client_stats_query } from '../../../../queries/clients_stats';
import { calculatePercentageChange, commaformatter } from '../../../../utils';

const ClientCard = () => {
  const { data: stats, isLoading } = useQuery(get_client_stats_query());
  const { data } = useGetUnVerifiedClientList();
  const { data: total_clients } = useGetClientList();

  if (isLoading)
    return (
      <Skeleton
        height={150}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  return (
    <div className="flex gap-8 child:h-[134px]">
      {/* Card One */}
      <div className="relative flex flex-col border-[#DECFF7]  dark:border-afexdark-dark  border-b-4 bg-white  dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('TOTAL CLIENTS')}
          </p>
          <UserCirlceAdd size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full mb-3 mt-2">
          <p className="flex items-center gap-1 text-[18px] font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(total_clients!?.total ?? 0)}
          </p>

          <span>{t('All')}</span>
        </div>
      </div>

      {/* Card Two */}

      <div className="relative flex flex-col border-[#DECFF7]  dark:border-afexdark-dark  border-b-4 bg-white  dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('ACTIVE CLIENTS')}
          </p>
          <UserOctagon size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full mb-3 mt-2">
          <p className="flex items-center gap-1 text-[18px] w-full font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(stats?.sectionOne?.activeClients?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                stats?.sectionOne?.activeClients?.today ?? 0,
                stats?.sectionOne?.activeClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Three */}
      <div className="relative flex flex-col  border-[#DECFF7]  dark:border-afexdark-dark  border-b-4 bg-white  dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('VERIFIED CLIENTS')}
          </p>
          <UserTick size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full mb-3 mt-2">
          <p className="flex items-center gap-1 text-[18px] font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(stats?.sectionOne?.verifiedClients?.today ?? 0)}
            <Change
              value={calculatePercentageChange(
                stats?.sectionOne?.verifiedClients?.today ?? 0,
                stats?.sectionOne?.verifiedClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>{t('vs previous day')}</span>
        </div>
      </div>

      {/* Card Four */}
      <div className="relative flex flex-col  border-[#DECFF7]  dark:border-afexdark-dark  border-b-4 bg-white  dark:bg-afexdark-darkest rounded-lg text-[#8F8E91] text-[12px] p-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className=" font-normal text-textgrey-normal">
            {t('UNVERIFIED CLIENTS')}
          </p>
          <UserRemove size="25" color="#A982EA" variant="Bulk" />
        </div>
        <div className="w-full mb-3 mt-2">
          <p className="text-[18px] w-full font-bold text-textgrey-dark dark:text-textgrey-normal">
            {commaformatter(data!?.total ?? 0)}
            {/* <span className="text-[#ff5653] font-normal  text-[13px]">
              {' '}
              0.00%{' '}
            </span> */}
          </p>
          <span className=" ">{t('All')}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
