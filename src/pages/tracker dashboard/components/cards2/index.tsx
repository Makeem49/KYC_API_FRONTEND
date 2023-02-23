import React from 'react';
import verifyIcon from '../../../../assets/images/verify.png';
import { useQuery } from 'react-query';
import { get_tracker_stats_query } from '../../../../queries/tracker_board';
import { Skeleton } from '@mantine/core';

const VirtualCards = () => {
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
      <div className='w-[66%] flex gap-14 child:h-[200px]'>
        {/* Card One */}
        <div className='relative flex flex-col border-textgrey-light border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6  w-[450px] gap-8 first:'>
          <div className='flex items-center justify-between w-full'>
            <p className=' font-medium text-[24px] text-[#8F8E91]'>
              No Virtual Account
            </p>
            <img
              src={verifyIcon}
              alt='verifiImg'
              className='w-[52px] h-[52px]'
            />
          </div>
          <div className='w-full mb-3 mt-2'>
            <p className='text-[48px] font-bold text-textgrey-darker'>
              {list?.overview?.noVirtualAccount ?? 0}
            </p>
          </div>
        </div>

        {/* Card Two */}
        <div className='relative w-[450px] flex flex-col border-textgrey-light border-b-4 bg-white rounded-lg  text-[#8F8E91] text-[24px]  p-6 gap-8 first:'>
          <div className='flex items-center justify-between w-full'>
            <p className=' font-medium text-[24px] text-[#8F8E91]'>
              Unsynced Withdrawal
            </p>
            <img
              src={verifyIcon}
              alt='verifiImg'
              className='w-[52px] h-[52px]'
            />
          </div>
          <div className='w-full mb-3 mt-2'>
            <p className='text-[48px] font-bold text-textgrey-darker'>
              {list?.overview?.unsyncedWithdrawal ?? 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCards;
