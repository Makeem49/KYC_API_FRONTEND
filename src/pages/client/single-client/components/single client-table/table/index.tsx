import { t } from 'i18next';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import DataGrid from '../../../../../../components/data-grid';
import { useGetClientTransaction } from '../../../../../../queries';
import { shortDateFormatter } from '../../../../../../utils';

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');
  const { pathname } = useLocation();
  const clientId = pathname.split('/')[2];

  const { data, isError, isLoading } = useGetClientTransaction(
    parseInt(clientId, 10),
    currentPage,
    pageSize,
    filter,
    filters
  );

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: '25px',
        }}
      />
    );
  if (isError) return <Navigate to="/login" />;

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest p-3">
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={data?.lastPage!}
          total={data?.total!}
          setSearch={setSearch}
          setFilters={setFilters}
          setSelectedEntries={setPageSize}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data?.data!}
          headerFilter={[
            { name: 'Transaction Type', accessor: 'transactionType' },
          ]}
          headers={[
            {
              accessor: 'createdAt',
              hidden: false,
              name: `${t('Date Created')}`,
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },

            {
              accessor: 'time',
              hidden: false,
              name: `${t('Time')}`,
              sortable: true,
              static: false,
            },
            {
              accessor: 'amount',
              hidden: false,
              name: `${t('Amount')} ${
                defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'
              }`,
              sortable: true,
              static: true,
            },
            {
              accessor: 'amountBefore',
              hidden: false,
              name: `${t('Total Before')} ${
                defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'
              }`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'amountAfter',
              hidden: false,
              name: `${t('Total After')} ${
                defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'
              }`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'transactionType',
              hidden: false,
              name: `${t('Transaction Type')}`,
              sortable: true,
              static: false,
              row: (val) => {
                if (val === 'Credit') {
                  return <span className=" text-afexgreen-regular">{val}</span>;
                } else {
                  return <span className=" text-afexred-regular">{val}</span>;
                }
              },
            },
            {
              accessor: 'ref',
              hidden: false,
              name: `${t('Reference Id')}`,
              sortable: true,
              static: false,
            },
          ]}
          withExport
          withGlobalFilters
          withCheck // enable checkbox
          // withActions // enable action column
          // ActionComponent={ActionComponent} // action component
          // withNavigation // enable row navigation
          // navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
};

export default Table;
