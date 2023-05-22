import { t } from 'i18next';
import { ArrowRight } from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import Box from '../../../../assets/images/box.png';
import { get_top_clients_searches_query } from '../../../../queries/clients_stats';

const RecentSearch = () => {
  const navigate = useNavigate();
  const { data: topSearch, isLoading } = useQuery(
    get_top_clients_searches_query()
  );

  if (isLoading)
    return (
      <Skeleton
        height={300}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  return (
    <div className=' flex flex-col gap-3 border border-[#DAD9DA] dark:border-afexdark-dark rounded-lg p-5'>
      <div className='text-normal'>
        <p className='text-xl font-bold dark:text-afexdark-light'>
          {t('Recent Searches')}
        </p>
      </div>

      {topSearch!?.length > 0 ? (
        <div>
          {' '}
          {topSearch?.map((el: any, index) => (
            <div
              key={index}
              className='w-full flex justify-between items-center border-b  dark:border-afexdark-dark pb-4'>
              {' '}
              <div className='flex items-center gap-3 text-normal'>
                {' '}
                <span className='p-3 font-bold rounded bg-[#E7F9F0]  dark:bg-afexdark-verydark dark:text-textgrey-normal'>
                  {el.firstName.substring(0, 1)} {el.lastName.substring(0, 1)}
                </span>
                <p className='text-[#000] dark:text-textgrey-normal font-medium'>
                  {el.firstName} {el.lastName}
                  <br />{' '}
                  <span className=' font-normal text-textgrey-normal'>
                    {el.platformId}
                  </span>{' '}
                </p>
              </div>{' '}
              <ArrowRight
                onClick={() => navigate(`${el.id}`)}
                size='35'
                variant='Outline'
                className='p-3 rounde bg-[#F5F5F5]  dark:bg-afexdark-verydark'
              />
            </div>
          ))}
        </div>
      ) : (
        <div className=' p-16 flex flex-col gap-6 items-center'>
          {' '}
          <img src={Box} alt='' className='animate-bounce h-[60px]' />
          <p className=' text-[16px] font-semibold'>No data to display</p>{' '}
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
