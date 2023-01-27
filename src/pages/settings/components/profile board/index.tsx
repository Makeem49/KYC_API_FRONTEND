import React from 'react';
import userImg from '../../../../assets/images/user.png';
import { get_admin_query } from '../../../../queries/dash_board';
import { useQuery } from 'react-query';

const ProfileBoard = () => {
  const { data: user } = useQuery(get_admin_query());

  return (
    <div className=' w-full flex flex-col gap-10 h-full'>
      {/* FIrst Card */}
      <div className=' bg-white rounded-lg h-full p-8'>
        <div className='flex flex-col justify-center py-3 items-center gap-1'>
          <img src={userImg} alt='profimg' className='w-32 rounded' />
          <p>
            {user!.firstName} {user!.lastName}
          </p>
          <span className='text-[#1863BF] bg-[#E8F1FC] px-3 rounded'>
            {user!.roles[0].name}
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
              ID-300003246357
            </span>
          </p>
          {/* EMAIL */}
          <p className=' text-textgrey-Bold font-bold'>
            Email: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>
              {user!.email}
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
