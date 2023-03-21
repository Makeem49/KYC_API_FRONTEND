import React from 'react';
import halfCirc from '../../../../assets/images/ell.svg';
import { get_top_transactions_query } from '../../../../queries/clients_stats';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
import { t } from 'i18next';

const TransactionCount = () => {
  const { data, isError, isLoading } = useQuery(get_top_transactions_query());
  // console.log(data);
  if (isLoading)
    return (
      <Skeleton
        height={300}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <p>Error!!!</p>;

  return (
    <div className=' flex flex-col border border-afexpurple-lighter  dark:border-afexdark-dark rounded-lg'>
      <div className=' relative text-sm text-textgrey-darker bg-afexpurple-dark  dark:bg-afexdark-darkest  rounded-t p-5'>
        <img
          src={halfCirc}
          alt='hafcirc'
          className=' dark:hidden absolute -rotate-90 left-[-7%] top-[-30%] '
        />

        <img
          src={halfCirc}
          alt='hafcirc'
          className=' dark:hidden absolute rotate-140 left-[40%] bottom-[-65%] '
        />

        <img
          src={halfCirc}
          alt='hafcirc'
          className=' dark:hidden absolute rotate-20 right-[-7%] top-[-30%] '
        />

        <p className='text-xl text-white  dark:text-afexdark-regular font-bold'>
          {t('Transaction Count')} ({t('Top Users')})
        </p>
      </div>

      <div className='h-full rounded pb-2'>
        <div className='overflow-auto w-full rounded'>
          <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
            <thead className=' z-10 text-[10px] bg-[#F5F5F5] rounded-full sticky top-0 text-left whitespace-nowrap'>
              <tr className=' border-b  dark:border-afexdark-dark child:font-normal text-[#5D5B60]  dark:text-afexdark-regular bg-afexpurple-lighter dark:bg-afexdark-darkest child:text-[14px] child:p-2 child:cursor-default child:align-middle'>
                <th>S/N</th>
                <th>{t("Client's Name")}</th>
                <th>{t("Client's Id")}</th>
                <th>{t('Count')}</th>
              </tr>
            </thead>
            <tbody className='text-[12px] xl:text-[14px]'>
              {data!.map((el: any, index) => (
                <tr
                  key={index}
                  className=' text-left child:p-2 border-b  dark:border-afexdark-dark border-dashed '>
                  <td>
                    <span>{data!.indexOf(el) + 1}.</span>
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
                    <span>{el.noOfTransactions}</span>
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

export default TransactionCount;
