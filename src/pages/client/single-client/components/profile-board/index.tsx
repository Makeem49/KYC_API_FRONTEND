import { t } from 'i18next';
// import verifiedIcon from '../../../../../assets/svgs/verify.svg';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import userImg from '../../../../../assets/images/user.png';
// import { useSingleClientCtx } from '../../../../../context';
import { get_a_client_query } from '../../../../../queries/single_client';

const ProfileBoard = () => {
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
      <div className=' bg-white  dark:bg-afexdark-darkest rounded-lg p-8'>
        <div className='flex flex-col justify-center py-3 items-center gap-1 dark:text-textgrey-normal'>
          <img src={userImg} alt='profimg' className='w-32 rounded' />
          <p>
            {stats!.firstName} {stats!.lastName}
          </p>
          <span className='text-[#1863BF] bg-[#E8F1FC]  dark:bg-afexdark-verydark px-3 rounded'>
            {t('Client')}
          </span>
        </div>

        {/* Details */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed dark:border-afexdark-dark border-b'>
          <p className='  text-textgrey-darker  dark:text-textgrey-normal font-bold'>
            {t('Details')}
          </p>
          <span className='p-2 rounded bg-[#F0F0F0]  dark:bg-afexdark-verydark'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full flex flex-col gap-5 py-5'>
          <div>
            {' '}
            <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
              {t('Client ID')}: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!?.id}
              </span>
            </p>
            <p className=' text-textgrey-darker  dark:text-textgrey-normal font-bold'>
              {t('Platform ID')}: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!?.providers?.map(
                  (el: any) => el.clientProviderClient?.platformId
                )}{' '}
              </span>
            </p>
          </div>

          <div className='w-full flex flex-col gap-5'>
            {/* <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
              Email: <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {' '}
                aadamu@afexnigeria.com
              </span>
            </p> */}
            {/* <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
              Address:
              <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {' '}
                No 3234, Ralph Shodeinde street, Abuja
              </span>
            </p> */}
            <p className=' text-textgrey-darker  dark:text-textgrey-normal font-bold'>
              {t('Phone No')}:
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

      <div className=' bg-white dark:bg-afexdark-darkest rounded-lg p-8'>
        {/* Bank Info */}
        <div className='w-full py-5 flex justify-between items-center text-[14px] border-dashed border-b  dark:border-afexdark-dark'>
          <p className='  text-textgrey-darker dark:text-textgrey-normal font-bold'>
            {t('Bank Info')}
          </p>
          <span className='p-2 rounded bg-[#F0F0F0]  dark:bg-afexdark-verydark'>
            <ArrowDown2 size='20' color='#555555' variant='Bulk' />
          </span>
        </div>

        <div className='w-full py-5 flex flex-col gap-5'>
          <div className='w-full flex justify-between items-center text-[14px]'>
            <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
              BVN:
              <br />{' '}
              <span className=' text-textgrey-normal font-normal'>
                {stats!.bvn ? stats!.bvn : t('none')}
              </span>
            </p>
            {/* <span className='p-2 flex justify-between rounded-lg bg-[#E7F9F0] text-[#076D3A]'>
              {' '}
              <img src={verifiedIcon} alt='verified' />
              Verified
            </span> */}
          </div>

          <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
            {t('Virtual Account')}: <br />
            <span className=' text-textgrey-normal font-normal'>
              {stats!.bankAccount ? stats!.bankAccount : t('none')}
            </span>
          </p>

          <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
            {t('Bank')}: <br />
            <span className=' text-textgrey-normal font-normal'>
              {stats!?.bankName ? stats!?.bankName : t('none')}
            </span>
          </p>

          <p className=' text-textgrey-darker dark:text-textgrey-normal font-bold'>
            {t('Debit Card Status')}: <br />
            <span className=' text-textgrey-normal font-normal'>
              {t('none')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBoard;
