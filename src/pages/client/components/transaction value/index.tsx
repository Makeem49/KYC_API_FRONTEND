import React from 'react';
import halfCirc from '../../../../assets/images/ell.svg';
import { get_top_clients_by_trans_value_query } from '../../../../queries/clients_stats';
import { useQuery } from 'react-query';

const TransactionValue = () => {
  const {
    data: topVal,
    isLoading,
    isError,
  } = useQuery(get_top_clients_by_trans_value_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  return (
    <div className='flex flex-col border border-afexpurple-lighter rounded-lg'>
      <div className='relative text-sm rounded-t text-textgrey-darker p-5'>
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute -rotate-90 left-[-7%] top-[-30%] '
        />
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-140 left-[40%] bottom-[-50%] '
        />

        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-20 right-[-7%] top-[-30%] '
        />
        <p className='text-xl font-bold'>Transaction Values (Top Users)</p>
        <span className=''>24 October, 2022</span>
      </div>

      <div className='h-full rounded pb-2'>
        <div className='overflow-auto w-full rounded'>
          <table className='overflow-auto w-full align-top text-[12px] xl:text-[14px]'>
            <thead className='text-[10px] bg-[#F5F5F5] rounded-t sticky top-0 text-left whitespace-nowrap z-[5]'>
              <tr className=' border-b child:p-2 child:text-[14px] child:font-normal child:cursor-default child:align-middle'>
                <th className=''>S/N</th>
                <th className=''>Clients' Name</th>
                <th className=''>Client's Id</th>
                <th className=''>Value</th>
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
                      {el.platformId}
                    </span>
                  </td>

                  <td>
                    <span>{el.valueOfTransactions}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionValue;
