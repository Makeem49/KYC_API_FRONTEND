import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetClientList } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';

const ClientList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetClientList(
    currentPage,
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

  if (isError) return <Navigate to='/login' />;

  const defaultCountryCode = localStorage.getItem('decoded-country-code');

  return (
    <>
      <div className='bg-white dark:bg-afexdark-darkest px-6 py-3'>
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={data!?.lastPage}
          total={data!?.total}
          title='Search by client name, id..'
          setSearch={setSearch}
          setFilters={setFilters}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data?.data!}
          headerFilter={[
            { name: 'Activity Status', accessor: 'isActive' },
            { name: 'Verification Status', accessor: 'isVerified' },
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
              accessor: 'clientName',
              hidden: false,
              name: `${t('Client Name')}`,
              sortable: true,
              static: true,
              secondary_key: 'platformId',

              row: (val, second) => (
                <span className='flex flex-col'>
                  <span className=' text-afexpurple-regular'>{val}</span>
                  <span className='w-[140px]'>{second}</span>
                </span>
              ),
            },
            {
              accessor: 'balance',
              hidden: false,
              name: `${t('Wallet Balance')} ${
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
              accessor: 'phoneNumber',
              hidden: false,
              name: `${t('Phone Number')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'isActive',
              hidden: false,
              name: `${t('Status')}`,
              sortable: true,
              static: false,
              row: (val) => {
                if (val === 'Active') {
                  return (
                    <span className=' bg-afexgreen-extralight  dark:bg-afexdark-verydark  text-afexgreen-darker  dark:text-afexgreen-regular  rounded-lg p-2'>
                      {val}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight  dark:bg-afexdark-verydark  dark:text-afexred-regular  text-afexred-dark rounded-lg p-2'>
                      {val}
                    </span>
                  );
                }
              },
            },

            {
              accessor: 'providerName',
              hidden: true,
              name: `${t('Provider Name')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'isVerified',
              hidden: true,
              name: `${t('Verification Status')}`,
              sortable: true,
              static: false,

              row: (val) => {
                if (val === 'Verified') {
                  return (
                    <span className=' bg-afexgreen-extralight  dark:bg-afexdark-verydark  text-afexgreen-darker dark:text-afexgreen-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight  dark:bg-afexdark-verydark  text-afexred-dark  dark:text-afexred-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                }
              },
            },

            {
              accessor: 'valueOfTransactions',
              hidden: true,
              name: `${t('Transaction Value')} ${
                defaultCountryCode === 'NG'
                  ? '₦'
                  : defaultCountryCode === 'KE'
                  ? 'KES'
                  : 'UGX'
              }`,
              sortable: true,
              static: false,
            },
          ]}
          withExport
          withGlobalFilters
          withCheck // enable checkbox
          // withActions // enable action column
          // ActionComponent={ActionComponent} // action component
          withNavigation // enable row navigation
          navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
};

export default ClientList;
