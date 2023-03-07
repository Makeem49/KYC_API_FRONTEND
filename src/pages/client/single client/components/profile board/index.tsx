import React from 'react';
import userImg from '../../../../../assets/images/user.png';
// import verifiedIcon from '../../../../../assets/svgs/verify.svg';
import { ArrowDown2 } from 'iconsax-react';
// import { useSingleClientCtx } from '../../../../../context';
import { get_a_client_query } from '../../../../../queries/single_client';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
const ProfileBoard = () => {
  // const { stats! } = useSingleClientCtx();

  const { pathname } = useLocation();
  const clientId = pathname.split('/')[2];
  const { data: stats, isLoading } = useQuery(
    get_a_client_query(parseInt(clientId, 10))
  );
  if (isLoading)
    return (
      <Skeleton
        height={600}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  return (
    <div className=' w-full flex flex-col gap-10'>
      {/* FIrst Card */}
      <div className=' bg-white rounded-lg p-8'>
        <div className='flex flex-col justify-center py-3 items-center gap-1'>
          <img src={userImg} alt='profimg' className='w-32 rounded' />
          <p>
            {stats!.firstName} {stats!.lastName}
          </p>
          <span className='text-[#1863BF] bg-[#E8F1FC] px-3 rounded'>
            Client
          </span>
        </div>

        {/* Details */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed border-b'>
          <p className='  text-textgrey-darker font-bold'>Details</p>
          <span className='p-2 rounded bg-[#F0F0F0]'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full flex flex-col gap-5 py-5'>
          <div>
            {' '}
            <p className=' text-textgrey-darker font-bold'>
              Client ID: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!?.id}
              </span>
            </p>
            <p className=' text-textgrey-darker font-bold'>
              Platform ID: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!?.providers?.map(
                  (el: any) => el.clientProviderClient?.platformId
                )}{' '}
              </span>
            </p>
          </div>

          <div className='w-full flex flex-col gap-5'>
            {/* <p className=' text-textgrey-darker font-bold'>
              Email: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {' '}
                aadamu@afexnigeria.com
              </span>
            </p> */}
            {/* <p className=' text-textgrey-darker font-bold'>
              Address:
              <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {' '}
                No 3234, Ralph Shodeinde street, Abuja
              </span>
            </p> */}
            <p className=' text-textgrey-darker font-bold'>
              Phone No:
              <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!.phoneNumber}
              </span>
            </p>
            {/* <p className=' text-textgrey-darker font-bold'>
              Location: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {' '}
                Kaduna 1
              </span>
            </p>
            <p className=' text-textgrey-darker font-bold'>
              Warehouse: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>Anchau </span>
            </p>
            <p className=' text-textgrey-darker font-bold'>
              Last Transaction: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                Last Transaction: 10 Nov 2022, 6:05 pm
              </span>
            </p> */}
          </div>
        </div>
      </div>

      {/* Second Cards */}

      <div className=' bg-white rounded-lg p-8'>
        {/* Bank Info */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed border-b'>
          <p className='  text-textgrey-darker font-bold'>Bank Info</p>
          <span className='p-2 rounded bg-[#F0F0F0]'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full py-5 flex flex-col gap-5'>
          <div className='w-full flex justify-between items-center text-[14px]'>
            <p className=' text-textgrey-darker font-bold'>
              BVN:
              <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!.bvn ? stats!.bvn : 'none'}
              </span>
            </p>
            {/* <span className='p-2 flex justify-between rounded-lg bg-[#E7F9F0] text-[#076D3A]'>
              {' '}
              <img src={verifiedIcon} alt='verified' />
              Verified
            </span> */}
          </div>

          <p className=' text-textgrey-darker font-bold'>
            Virtual Account: <br />
            <span className=' text-textgrey-normal font-normal'> none</span>
          </p>

          <p className=' text-textgrey-darker font-bold'>
            Bank: <br />
            <span className=' text-textgrey-normal font-normal'> none</span>
          </p>

          <p className=' text-textgrey-darker font-bold'>
            Debit Card Status: <br />
            <span className=' text-textgrey-normal font-normal'> none</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;
