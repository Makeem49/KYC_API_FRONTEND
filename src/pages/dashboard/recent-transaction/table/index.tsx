import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';

import { get_transaction_list_querry } from '../../../../queries/transaction_stats';
// import { ArrowDown, ArrowUp } from 'iconsax-react';
import { commaformatter } from '../../../../utils';

const Table = () => {
  const { data, isError } = useQuery(get_transaction_list_querry(1));
  const { t } = useTranslation();

  if (isError) return <Navigate to="/login" />;

  const arr = data?.data!.slice(0, 10);

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <div className="h-full pb-5">
      <div className="overflow-auto w-full ">
        <table className="overflow-auto w-full align-top">
          <thead className="text-[12px] sticky top-0 text-left whitespace-nowrap z-[5]">
            <tr className="child:py-4 border-b dark:border-[#333233] text-[#C1C0C2]  font-normal child:px-1 child:cursor-default child:align-middle">
              <th className="flex items-center">S/N </th>
              <th>{t('Date')}</th>
              <th>{t("Client's Name")}</th>
              <th>
                {t('Amount')}{' '}
                {defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'}
              </th>
              <th>{t('Transaction type')}</th>
              <th>{t('Status')}</th>
            </tr>
          </thead>
          <tbody className="text-[10px] xl:text-[14px] text-[#49474D] dark:text-textgrey-normal">
            {arr!.map((el, index) => (
              <tr
                key={index}
                className=" text-left child:py-8 dark:border-[#333233] dark:child:text-textgrey-normal  child:px-1 border-b">
                <td>
                  <span className="font-normal">
                    {data!?.data!.indexOf(el) + 1}
                  </span>
                </td>

                <td>
                  {' '}
                  <span className="font-normal ">
                    {el.createdAt.toString()}
                  </span>
                </td>

                <td>
                  <span className="font-normal ">{el.clientName}</span>
                </td>

                <td>
                  <span className="font-normal ">
                    {commaformatter(el.amount)}
                  </span>
                </td>
                <td>
                  {el.transactionType === 'Credit' ? (
                    <span className="font-normal text-afexgreen-dark ">
                      {t(el.transactionType)}
                    </span>
                  ) : (
                    <span className="font-normal text-afexred-regular dark:bg-afexdark-verydark ">
                      {t(el.transactionType)}
                    </span>
                  )}
                </td>

                <td>
                  <span className="font-normal px-3 py-2 bg-[#E7F9F0] dark:bg-afexdark-verydark text-afexgreen-dark  dark:text-afexgreen-regular rounded ">
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
