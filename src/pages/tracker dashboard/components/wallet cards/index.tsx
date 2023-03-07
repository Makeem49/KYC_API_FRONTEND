import React from 'react';
import UnverifyIcon from '../../../../assets/images/verify.png';
import verifyIcon from '../../../../assets/images/verifyIcon.png';
import { get_tracker_stats_query } from '../../../../queries/tracker_board';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@mantine/core';

const WalletCards = () => {
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

  if (isError) return <Navigate to='/login' />;
  return (
    <>
      <div className='flex gap-14 child:h-[200px]'>
        {/* Card One */}
        <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[450px]  gap-8'>
          <div className='flex items-center justify-between w-full'>
            <p className=' font-medium text-[24px] text-[#8F8E91]'>
              Client’s with no wallet
            </p>
            {list!?.overview?.noWallets > 0 ? (
              <img
                src={UnverifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            ) : (
              <img
                src={verifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            )}
          </div>
          <div className='w-full mb-3 mt-2'>
            <p className='text-[48px] font-bold text-textgrey-darker'>
              {list?.overview?.noWallets ?? 0}
            </p>
          </div>
        </div>

        {/* Card Two */}
        <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[450px]  gap-8'>
          <div className='flex items-center justify-between w-full'>
            <p className=' font-medium text-[24px] text-[#8F8E91]'>
              Failed Funding
            </p>

            {list!?.overview?.failedFunding > 0 ? (
              <img
                src={UnverifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            ) : (
              <img
                src={verifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            )}
          </div>
          <div className='w-full mb-3 mt-2'>
            <p className='text-[48px] font-bold text-textgrey-darker'>
              {list?.overview?.failedFunding ?? 0}
            </p>
          </div>
        </div>

        {/* Card Three */}
        <div className='relative  flex flex-col border-[#DBD9D9] border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 w-[450px]  gap-8'>
          <div className='flex items-center justify-between w-full'>
            <p className=' font-medium text-[24px] text-[#8F8E91]'>
              Unsynced Wallet Transfer
            </p>
            {list!?.overview?.unSyncedWalletTransfer > 0 ? (
              <img
                src={UnverifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            ) : (
              <img
                src={verifyIcon}
                alt='verifiImg'
                className='w-[52px] h-[52px]'
              />
            )}
          </div>
          <div className='w-full mb-3 mt-2'>
            <p className='text-[48px] font-bold text-textgrey-darker'>
              {list?.overview?.unSyncedWalletTransfer ?? 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletCards;
