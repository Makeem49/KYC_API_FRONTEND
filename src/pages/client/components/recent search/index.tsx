import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'iconsax-react';
import { useQuery } from 'react-query';
import { get_top_clients_searches_query } from '../../../../queries/clients_stats';

const RecentSearch = () => {
  const navigate = useNavigate();
  const {
    data: topSearch,
    isLoading,
    isError,
  } = useQuery(get_top_clients_searches_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  return (
    <div className=' flex flex-col gap-3 border border-[#DAD9DA] rounded-lg p-5'>
      <div className='text-normal'>
        <p className='text-xl font-bold'>Recent Searches</p>
        <span className=''>24 October, 2022</span>
      </div>

      {topSearch?.map((el: any) => (
        <div className='w-full flex justify-between items-center border-b pb-4'>
          {' '}
          <div className='flex items-center gap-3 text-normal'>
            {' '}
            <span className='p-3 font-bold rounded bg-[#E7F9F0]'>
              {el.firstName.substring(0, 1)} {el.lastName.substring(0, 1)}
            </span>
            <p className=' text-[#000] font-medium'>
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
            className='p-3 rounde bg-[#F5F5F5]'
          />
        </div>
      ))}
    </div>
  );
};

export default RecentSearch;
