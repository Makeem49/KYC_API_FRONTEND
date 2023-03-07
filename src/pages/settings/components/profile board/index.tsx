import React from 'react';
import userImg from '../../../../assets/images/user.png';
import { get_admin_query } from '../../../../queries/dash_board';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
import { Navigate } from 'react-router-dom';

const ProfileBoard = () => {
  const { data: user, isLoading, isError } = useQuery(get_admin_query());

  if (isLoading)
    return (
      <Skeleton
        height={700}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <Navigate to='/login' />;

  return (
    <div className=' w-full flex flex-col gap-10 h-full'>
      {/* FIrst Card */}
      <div className=' bg-white flex flex-col gap-8 rounded-lg h-full p-8'>
        <div className='flex flex-col justify-center py-3 items-center gap-3'>
          <img src={userImg} alt='profimg' className='w-32 rounded' />
          <p className=' font-semibold text-textgrey-darker'>
            {user!?.firstName} {user!?.lastName}
          </p>
          <span className='text-[#1863BF] bg-[#E8F1FC] px-3 py-2 rounded'>
            {user!?.roles[0].name}
          </span>
        </div>

        {/* Details */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed border-b'>
          <p className=' text-textgrey-Bold font-bold'>Details</p>
          <button className='py-1 px-4 rounded bg-[#F0F0F0]'>Edit</button>
        </div>

        <div className='w-full text-[12px] flex flex-col gap-5 py-5'>
          {' '}
          {/* USER ID */}
          <p className=' text-textgrey-Bold font-bold'>
            User ID: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>
              {user!?.id}
            </span>
          </p>
          {/* EMAIL */}
          <p className=' text-textgrey-Bold font-bold'>
            Email: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>
              {user!?.email}
            </span>
          </p>
          {/* LAST LOGIN */}
          <p className=' text-textgrey-Bold font-bold'>
            Last Login: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>Today</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;
