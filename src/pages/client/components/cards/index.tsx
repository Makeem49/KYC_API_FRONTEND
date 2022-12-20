import React from 'react';
import {
  UserCirlceAdd,
  UserTick,
  UserRemove,
  UserOctagon,
} from 'iconsax-react';
import { Change } from '../../../../components';
import { calculatePercentageChange } from '../../../../utils';

import { useClientStats } from '../../../../context/client_stats_context';

const ClientCard = () => {
  const { stats } = useClientStats();

  return (
    <div className='flex gap-6 child:h-[134px]'>
      {/* Card One */}
      <div className='relative flex flex-col border-[#DADADD] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>TOTAL CLIENTS</p>
          <UserCirlceAdd size='25' color='#EC7670' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            {stats.sectionOne?.totalClients.previousDay}
            <Change
              value={calculatePercentageChange(
                stats.sectionOne?.totalClients?.today ?? 0,
                stats.sectionOne?.totalClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Two */}
      <div className='relative flex flex-col  border-[#DADADD] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>VERIFIED CLIENTS</p>
          <UserTick size='25' color='#EC7670' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] font-bold text-textgrey-dark'>
            {stats.sectionOne?.verifiedClients.previousDay}
            <Change
              value={calculatePercentageChange(
                stats.sectionOne?.verifiedClients?.today ?? 0,
                stats.sectionOne?.verifiedClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Three */}
      <div className='relative flex flex-col border-[#DADADD] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>
            UNVERIFIED CLIENTS
          </p>
          <UserRemove size='25' color='#EC7670' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            200,000{' '}
            <span className='text-[#0DBF66] font-normal  text-[13px]'>
              {' '}
              + 36%{' '}
            </span>
          </p>
          <span>vs previous day</span>
        </div>
      </div>

      {/* Card Four */}
      <div className='relative flex flex-col border-[#DADADD] border-b-4 bg-white rounded-lg text-[#8F8E91] text-[12px] p-3 w-full'>
        <div className='flex items-center justify-between w-full'>
          <p className=' font-normal text-textgrey-normal'>ACTIVE CLIENTS</p>
          <UserOctagon size='25' color='#EC7670' variant='Bulk' />
        </div>
        <div className='w-full mb-3 mt-2'>
          <p className='text-[18px] w-full font-bold text-textgrey-dark'>
            {stats.sectionOne?.activeClients.previousDay}
            <Change
              value={calculatePercentageChange(
                stats?.sectionOne?.activeClients?.today ?? 0,
                stats?.sectionOne?.activeClients?.previousDay ?? 0
              )}
            />
          </p>
          <span>vs previous day</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
