import React from 'react';
import profImg from '../../../../assets/images/prof2.svg';

const ProfileBoard = () => {
  return (
    <div className=' w-full flex flex-col gap-10'>
      {/* FIrst Card */}
      <div className=' bg-white rounded-lg  p-8'>
        <div className='flex flex-col justify-center py-3 items-center gap-1'>
          <img src={profImg} alt='profimg' className='w-32 rounded' />
          <p>Adamu Adamu</p>
          <span className='text-[#1863BF] bg-[#E8F1FC] px-3 rounded'>
            Famer
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
              aadamu@afexnigeria.com
            </span>
          </p>
          {/* ROLE */}
          <p className=' text-textgrey-Bold font-bold'>
            Role: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>
              0001-1234-000012345
            </span>
          </p>
          {/* LAST LOGIN */}
          <p className=' text-textgrey-Bold font-bold'>
            Last Login: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>
              0001-1234-000012345
            </span>
          </p>
          {/* STATUS */}
          <div className=' flex justify-between'>
            <p className=' text-textgrey-Bold font-bold'>
              Status: <br />{' '}
              <span className=' text-textgrey-Light font-normal'>Active</span>
            </p>
            <input type='checkbox' className='rounded' />
          </div>
          {/* TWO STEP AUTHEN */}
          <p className=' text-textgrey-Bold font-bold'>
            Two Step Authentication: <br />{' '}
            <span className=' text-textgrey-Light font-normal'>Enabled</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;
