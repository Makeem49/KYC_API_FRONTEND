import { t } from 'i18next';
import React from 'react';

import { useGetTransLocation } from '../../../../queries';
import { commaformatter } from '../../../../utils';

const Locations = () => {
  const { data: arr } = useGetTransLocation();
  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  const filteredData = arr!?.data.filter((item) => {
    const totalValue = parseFloat(item.total_transactions_value);
    return totalValue > 0;
  });

  return (
    <div className="h-full pb-5">
      <div className="overflow-auto w-full ">
        <table className="overflow-auto w-full align-top">
          <thead className="text-[12px] sticky top-0 text-left whitespace-nowrap z-[5]">
            <tr className="child:py-4 border-b  dark:border-[#333233] text-[#C1C0C2] font-normal child:px-1 child:cursor-default child:align-middle">
              <th>{t('Location')}</th>
              <th>
                {t('Amount')}
                {defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'}{' '}
              </th>
              <th>{t('Count')}</th>
            </tr>
          </thead>
          <tbody className="text-[10px] xl:text-[14px] text-[#49474D] dark:text-textgrey-normal">
            {filteredData?.map((el) => (
              <tr
                key={el.id}
                className=" text-left font-normal child:py-2 child:px-2 border-b dark:border-[#333233]">
                <td>{el.name}</td>
                <td>{commaformatter(el.total_transactions_value ?? 0)}</td>
                <td>{commaformatter(el.transactions_count ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Locations;
