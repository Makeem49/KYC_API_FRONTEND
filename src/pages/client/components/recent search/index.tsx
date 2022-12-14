import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'iconsax-react';

const RecentSearch = () => {
  return (
    <div className=' flex flex-col gap-3 border border-[#DAD9DA] rounded-lg p-5'>
      <div className='text-normal'>
        <p className='text-xl font-bold'>Recent Searches</p>
        <span className=''>24 October, 2022</span>
      </div>

      <div className='w-full flex justify-between items-center border-b pb-4'>
        {' '}
        <div className='flex items-center gap-3 text-normal'>
          {' '}
          <span className='p-3 font-bold rounded bg-[#E7F9F0]'>OR</span>
          <p className=' text-[#000] font-medium'>
            Adamu Adamu <br />{' '}
            <span className=' font-normal text-textgrey-normal'>
              001-12343-0000012
            </span>{' '}
          </p>
        </div>
        <NavLink to='/client/single-client'>
          {' '}
          <ArrowRight
            size='35'
            variant='Outline'
            className='p-3 rounde bg-[#F5F5F5]'
          />
        </NavLink>
      </div>

      <div className='w-full flex justify-between items-center border-b pb-4'>
        {' '}
        <div className='flex items-center gap-3 text-normal'>
          {' '}
          <span className='p-3 font-bold text-[#ED5556] rounded bg-[#FDEEEE]'>
            CD
          </span>
          <p className=' text-[#000] font-medium'>
            Chinwe Dozie <br />{' '}
            <span className=' text-textgrey-normal font-normal'>
              001-12343-0000012
            </span>{' '}
          </p>
        </div>
        <ArrowRight
          size='35'
          variant='Outline'
          className='p-3 rounde bg-[#F5F5F5]'
        />
      </div>

      <div className='w-full flex justify-between items-center border-b pb-4'>
        {' '}
        <div className='flex items-center gap-3 text-normal'>
          {' '}
          <span className='p-3 font-bold text-[#E1891C] rounded bg-[#FCF3E8]'>
            VO
          </span>
          <p className=' text-[#000] font-medium'>
            Victory Onye <br />{' '}
            <span className=' text-textgrey-normal font-normal'>
              001-12343-0000012
            </span>{' '}
          </p>
        </div>
        <ArrowRight
          size='35'
          variant='Outline'
          className='p-3 rounde bg-[#F5F5F5]'
        />
      </div>

      <div className='w-full flex justify-between items-center border-b pb-4'>
        {' '}
        <div className='flex items-center gap-3 text-normal'>
          {' '}
          <span className='p-3 font-bold text-[#ED5556] rounded bg-[#FDEEEE]'>
            CD
          </span>
          <p className=' text-[#000] font-medium'>
            Chinwe Dozie <br />{' '}
            <span className=' text-textgrey-normal font-normal'>
              001-12343-0000012
            </span>{' '}
          </p>
        </div>
        <ArrowRight
          size='35'
          variant='Outline'
          className='p-3 rounde bg-[#F5F5F5]'
        />
      </div>

      <div className='w-full flex justify-between items-center border-b pb-4'>
        {' '}
        <div className='flex items-center gap-3 text-normal'>
          {' '}
          <span className='p-3 font-bold text-[#E1891C] rounded bg-[#FCF3E8]'>
            VO
          </span>
          <p className=' text-[#000] font-medium'>
            Victory Onye <br />{' '}
            <span className=' text-textgrey-normal font-normal'>
              001-12343-0000012
            </span>{' '}
          </p>
        </div>
        <ArrowRight
          size='35'
          variant='Outline'
          className='p-3 rounde bg-[#F5F5F5]'
        />
      </div>
    </div>
  );
};

export default RecentSearch;
