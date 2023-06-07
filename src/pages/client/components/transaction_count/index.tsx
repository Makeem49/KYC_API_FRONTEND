import { t } from 'i18next';
import React from 'react';
import { useQuery } from 'react-query';

import { Skeleton } from '@mantine/core';

import Box from '../../../../assets/images/box.png';
import halfCirc from '../../../../assets/images/ell.svg';
import { get_top_transactions_query } from '../../../../queries/clients_stats';
import { commaformatter } from '../../../../utils';

const TransactionCount = () => {
  const { data, isLoading } = useQuery(get_top_transactions_query());
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

  return (
    <div className=" flex flex-col border border-afexpurple-lighter  dark:border-afexdark-dark rounded-lg">
      <div className=" relative text-sm text-textgrey-darker dark:text-textgrey-normal bg-afexpurple-dark  dark:bg-afexdark-darkest  rounded-t p-5">
        <img
          src={halfCirc}
          alt=""
          className=" dark:hidden absolute -rotate-90 left-[-7%] top-[-30%] "
        />

        <img
          src={halfCirc}
          alt=""
          className=" dark:hidden absolute rotate-140 left-[40%] bottom-[-65%] "
        />

        <img
          src={halfCirc}
          alt=""
          className=" dark:hidden absolute rotate-20 right-[-7%] top-[-30%] "
        />

        <p className="text-xl text-white  dark:text-afexdark-light font-bold">
          {t('Transaction Count')} ({t('Top Users')})
        </p>
      </div>

      <div className="h-full rounded pb-2">
        {data!?.length > 0 ? (
          <div className="overflow-auto w-full rounded">
            <table className="overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]">
              <thead className=" z-10 text-[10px] bg-[#F5F5F5] rounded-full sticky top-0 text-left whitespace-nowrap">
                <tr className=" border-b  dark:border-afexdark-dark child:font-normal text-[#5D5B60]  dark:text-[#C1C0C2] bg-afexpurple-lighter dark:bg-afexdark-darkest child:text-[14px] child:p-2 child:cursor-default child:align-middle">
                  <th>S/N</th>
                  <th>{t("Client's Name")}</th>
                  <th>{t("Client's Id")}</th>
                  <th>{t('Count')}</th>
                </tr>
              </thead>
              <tbody className="text-[12px] xl:text-[14px]">
                {data!?.map((el: any, index) => (
                  <tr
                    key={index}
                    className=" text-left child:p-2 border-b  dark:border-afexdark-dark dark:child:text-textgrey-normal border-dashed ">
                    <td>
                      <span>{data!.indexOf(el) + 1}.</span>
                    </td>

                    <td>
                      {' '}
                      <span>
                        {el.firstName} {el.lastName}
                      </span>
                    </td>

                    <td className=" overflow-x-auto ">
                      <span className="font-medium break-words text-[#C1C0C2]">
                        {el.id}
                      </span>
                    </td>

                    <td>
                      <span>{commaformatter(el.noOfTransactions)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className=" p-16 flex flex-col gap-6 items-center">
            {' '}
            <img src={Box} alt="" className="animate-bounce h-[60px]" />
            <p className=" text-[16px] font-semibold">
              No data to display
            </p>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCount;
