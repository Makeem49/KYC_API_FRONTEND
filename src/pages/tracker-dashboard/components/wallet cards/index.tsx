import { t } from 'i18next';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import UnverifyIcon from '../../../../assets/images/verify.png';
import verifyIcon from '../../../../assets/images/verifyIcon.png';
import { get_tracker_stats_query } from '../../../../queries/tracker_board';

const WalletCards = () => {
  const { data: list, isLoading } = useQuery(get_tracker_stats_query());
  if (isLoading)
    return (
      <Skeleton
        height={200}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  return (
    <>
      <div className="flex gap-14 child:h-[200px]">
        {/* Card One */}
        <Link to="#">
          {' '}
          <div className="relative  flex flex-col border-[#DBD9D9] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[300px] xl:w-[400px]  gap-8">
            <div className="flex items-center justify-between w-full">
              <p className=" font-medium text-[24px] text-[#8F8E91]">
                {t('Clients with no wallet')}
              </p>
              {list!?.overview?.noWallets > 0 ? (
                <img
                  src={UnverifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              ) : (
                <img
                  src={verifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              )}
            </div>
            <div className="w-full mb-3 mt-2">
              <p className="text-[48px] font-bold text-textgrey-darker dark:text-textgrey-normal">
                {list?.overview?.noWallets ?? 0}
              </p>
            </div>
          </div>
        </Link>

        {/* Card Two */}
        <Link to="/tracker-dashboard/failed-funding">
          <div className="relative  flex flex-col border-[#DBD9D9] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[300px] xl:w-[400px]  gap-8">
            <div className="flex items-center justify-between w-full">
              <p className=" font-medium text-[24px] text-[#8F8E91]">
                {t('Failed Funding')}
              </p>

              {list!?.overview?.failedFunding > 0 ? (
                <img
                  src={UnverifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              ) : (
                <img
                  src={verifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              )}
            </div>
            <div className="w-full mb-3 mt-2">
              <p className="text-[48px] font-bold text-textgrey-darker dark:text-textgrey-normal">
                {list?.overview?.failedFunding ?? 0}
              </p>
            </div>
          </div>
        </Link>

        {/* Card Three */}
        <Link to="/tracker-dashboard/unsynced-wallet-transfer">
          {' '}
          <div className="relative  flex flex-col border-[#DBD9D9] dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[300px] xl:w-[400px]  gap-8">
            <div className="flex items-center justify-between w-full">
              <p className=" font-medium text-[24px] text-[#8F8E91]">
                {t('Unsynced Wallet Transfer')}
              </p>
              {list!?.overview?.unSyncedWalletTransfer > 0 ? (
                <img
                  src={UnverifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              ) : (
                <img
                  src={verifyIcon}
                  alt="verifiImg"
                  className="w-[52px] h-[52px]"
                />
              )}
            </div>
            <div className="w-full mb-3 mt-2">
              <p className="text-[48px] font-bold text-textgrey-darker dark:text-textgrey-normal">
                {list?.overview?.unSyncedWalletTransfer ?? 0}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WalletCards;
