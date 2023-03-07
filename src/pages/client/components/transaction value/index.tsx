import React from 'react';
import halfCirc from '../../../../assets/images/ell.svg';
import { get_top_clients_by_trans_value_query } from '../../../../queries/clients_stats';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
import Box from '../../../../assets/images/box.png';
import { commaformatter } from '../../../../utils';

const TransactionValue = () => {
  const { data: topVal, isLoading } = useQuery(
    get_top_clients_by_trans_value_query()
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
  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className='flex flex-col border border-afexpurple-lighter rounded-lg'>
      <div className='relative text-sm  bg-afexpurple-dark  rounded-t text-white p-5'>
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute -rotate-90 left-[-7%] top-[-30%] '
        />
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-140 left-[40%] bottom-[-65%] '
        />

        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-20 right-[-7%] top-[-30%] '
        />
        <p className='text-xl font-bold'>Transaction Values (Top Users)</p>
      </div>

      <div className='h-full rounded pb-2'>
        {topVal!?.length > 0 ? (
          <div className='overflow-auto w-full rounded'>
            <table className='overflow-auto w-full align-top text-[12px] xl:text-[14px]'>
              <thead className='text-[10px] bg-[#F5F5F5] rounded-t sticky top-0 text-left whitespace-nowrap z-[5]'>
                <tr className=' border-b child:p-2 bg-afexpurple-lighter child:text-[14px] child:font-normal child:cursor-default child:align-middle'>
                  <th className=''>S/N</th>
                  <th className=''>Clients' Name</th>
                  <th className=''>Client's Id</th>
                  <th className=''>
                    Value{' '}
                    {defaultCountryCode === 'NG'
                      ? '₦'
                      : defaultCountryCode === 'KE'
                      ? 'KES'
                      : 'UGX'}
                  </th>
                </tr>
              </thead>
              <tbody className='text-[12px] xl:text-[14px]'>
                {topVal!.map((el: any) => (
                  <tr className=' text-left child:p-2 border-b border-dashed '>
                    <td>
                      <span>{topVal!.indexOf(el) + 1}.</span>
                    </td>

                    <td>
                      {' '}
                      <span>
                        {el.firstName} {el.lastName}
                      </span>
                    </td>

                    <td className=' overflow-x-auto '>
                      <span className='font-medium break-words text-[#C1C0C2]'>
                        {el.id}
                      </span>
                    </td>

                    <td>
                      <span>{commaformatter(el.valueOfTransactions)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className=' p-16 flex flex-col gap-6 items-center'>
            {' '}
            <img src={Box} alt='' className='animate-bounce h-[60px]' />
            <p className=' text-[16px] font-semibold'>
              No data to display
            </p>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionValue;
