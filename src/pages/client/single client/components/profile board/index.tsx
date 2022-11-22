import React from 'react';
import profImg from '../../../../../assets/images/profile_img.svg';
import verifiedIcon from '../../../../../assets/svgs/verify.svg';
import { ArrowDown2 } from 'iconsax-react';

const ProfileBoard = () => {
  return (
    <div className=' w-full flex flex-col gap-10'>
      {/* FIrst Card */}
      <div className=' bg-white shadow p-8'>
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
          <span className='p-2 rounded bg-[#F0F0F0]'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full flex flex-col gap-5 py-5'>
          <div>
            {' '}
            <p className=' text-textgrey-Bold font-bold'>
              Client ID: <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                0001-1234-000012345
              </span>
            </p>
          </div>

          <div className='w-full flex flex-col gap-5'>
            <p className='text-textgrey-Bold font-bold'>
              Email: <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                {' '}
                aadamu@afexnigeria.com
              </span>
            </p>
            <p className='text-textgrey-Bold font-bold'>
              Address:
              <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                {' '}
                No 3234, Ralph Shodeinde street, Abuja
              </span>
            </p>
            <p className='text-textgrey-Bold font-bold'>
              Phone No:
              <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                {' '}
                080343435234{' '}
              </span>
            </p>
            <p className='text-textgrey-Bold font-bold'>
              Location: <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                {' '}
                Kaduna 1
              </span>
            </p>
            <p className='text-textgrey-Bold font-bold'>
              Warehouse: <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                Anchau{' '}
              </span>
            </p>
            <p className='text-textgrey-Bold font-bold'>
              Last Transaction: <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                Last Transaction: 10 Nov 2022, 6:05 pm
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Second Cards */}

      <div className=' bg-white shadow p-8'>
        {/* Bank Info */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed border-b'>
          <p className=' text-textgrey-Bold font-bold'>Bank Info</p>
          <span className='p-2 rounded bg-[#F0F0F0]'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full py-5 flex flex-col gap-5'>
          <div className='w-full flex justify-between items-center text-[14px]'>
            <p className='text-textgrey-Bold font-bold'>
              BVN:
              <br />{' '}
              <span className=' text-textgrey-Light font-semibold'>
                {' '}
                954-3455-244-2{' '}
              </span>
            </p>
            <span className='p-2 flex justify-between rounded-lg bg-[#E7F9F0] text-[#076D3A]'>
              {' '}
              <img src={verifiedIcon} alt='verified' />
              Verified
            </span>
          </div>

          <p className='text-textgrey-Bold font-bold'>
            Virtual Account: <br />
            <span className=' text-textgrey-Light font-semibold'>
              {' '}
              100-100-2410
            </span>
          </p>

          <p className='text-textgrey-Bold font-bold'>
            Bank: <br />
            <span className=' text-textgrey-Light font-semibold'> GT Bank</span>
          </p>

          <p className='text-textgrey-Bold font-bold'>
            Debit Card Status: <br />
            <span className=' text-textgrey-Light font-semibold'> Issued</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;
