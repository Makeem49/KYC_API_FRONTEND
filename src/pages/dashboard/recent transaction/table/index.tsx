import React from 'react';
// import { ArrowDown, ArrowUp } from 'iconsax-react';
import { commaformatter } from '../../../../utils';
import { get_transaction_list_querry } from '../../../../queries/transaction_stats';
import { useQuery } from 'react-query';

const Table = () => {
  const { data, isError, isLoading } = useQuery(get_transaction_list_querry(1));
  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  const arr = data!.slice(0, 10);

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top'>
          <thead className='text-[12px] sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b text-[#C1C0C2] font-normal child:px-1 child:cursor-default child:align-middle'>
              <th className='flex items-center'>
                S/N{' '}
                {/* <span className='flex'>
                  <ArrowUp size='14' color='#c1c0c2' variant='Outline' />
                  <ArrowDown size='14' color='#c1c0c2' variant='Outline' />
                </span> */}
              </th>
              <th>Date</th>
              <th>Client's Name</th>
              <th>
                Amount{' '}
                {defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'}
              </th>
              <th>Transaction type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[14px] text-[#49474D]'>
            {arr.map((el) => (
              <tr className=' text-left child:py-8 child:px-1 border-b'>
                <td>
                  <span className='font-normal'>{data!.indexOf(el) + 1}</span>
                </td>

                <td>
                  {' '}
                  <span className='font-normal '>
                    {el.createdAt.toString()}
                  </span>
                </td>

                <td>
                  <span className='font-normal '>{el.clientName}</span>
                </td>

                <td>
                  <span className='font-normal '>
                    {commaformatter(el.amount)}
                  </span>
                </td>
                <td>
                  {el.transactionType === 'Credit' ? (
                    <span className='font-normal text-afexgreen-dark '>
                      {el.transactionType}
                    </span>
                  ) : (
                    <span className='font-normal text-afexred-regular '>
                      {el.transactionType}
                    </span>
                  )}
                </td>

                <td>
                  <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                    {el.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
