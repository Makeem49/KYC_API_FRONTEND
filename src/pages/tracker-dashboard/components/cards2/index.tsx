import { t } from 'i18next';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import UnverifyIcon from '../../../../assets/images/verify.png';
import verifyIcon from '../../../../assets/images/verifyIcon.png';
import { get_tracker_stats_query } from '../../../../queries/tracker_board';

const VirtualCards = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_tracker_stats_query());
  if (isLoading)
    return (
      <Skeleton
        height={200}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <Navigate to="/login" />;
  return (
    <>
      <div className="w-[66%] flex gap-14 child:h-[200px]">
        {/* Card One */}
        <NavLink to="/tracker-dashboard/no-virtual-account">
          {' '}
          <div className="relative flex flex-col border-textgrey-light  dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[300px] xl:w-[400px] gap-8 first:">
            <div className="flex items-center justify-between w-full">
              <p className=" font-medium text-[24px] text-[#8F8E91]">
                {t('No Virtual Account')}
              </p>
              {list!?.overview?.noVirtualAccount > 0 ? (
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
                {list?.overview?.noVirtualAccount ?? 0}
              </p>
            </div>
          </div>
        </NavLink>

        {/* Card Two */}
        <NavLink to="/tracker-dashboard/unsynced-withdrawal">
          <div className="relativew-[300px] xl:w-[400px] flex flex-col border-textgrey-light  dark:border-afexdark-dark dark:bg-afexdark-darkest border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 gap-8 first:">
            <div className="flex items-center justify-between w-full">
              <p className=" font-medium text-[24px] text-[#8F8E91]">
                {t('Unsynced Withdrawal')}
              </p>
              {list!?.overview?.unsyncedWithdrawal > 0 ? (
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
                {list?.overview?.unsyncedWithdrawal ?? 0}
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default VirtualCards;
