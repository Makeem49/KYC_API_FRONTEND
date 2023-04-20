import { DataGrid } from '../../../../components';
import React from 'react';
import { shortDateFormatter } from '../../../../utils';
import { t } from 'i18next';
import { useGetTransactionList } from '../../../../queries';

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data } = useGetTransactionList(currentPage, filter, filters);

  const defaultCountryCode = localStorage.getItem('decoded-country-code');
  const searchText = t('Search by client name, id');
  return (
    <>
      <div className='p-4 bg-white dark:bg-afexdark-darkest w-full'>
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={data?.lastPage!}
          total={data?.total!}
          setSearch={setSearch}
          setFilters={setFilters}
          title={searchText}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data?.data!}
          headerFilter={[
            { name: 'Transaction Type', accessor: 'transactionType' },
            { name: 'Status', accessor: 'isActive' },
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
              accessor: 'clientName',
              hidden: false,
              name: `${t('Client Name')}`,
              sortable: true,
              static: true,
              secondary_key: 'lastName',
              tertiary_key: 'platformId',
              row: (val, second) => (
                <span className='flex flex-col'>
                  <span>
                    {val} {second}{' '}
                  </span>
                </span>
              ),
            },
            {
              accessor: 'sessionId',
              hidden: false,
              name: `${t('Transaction Id')}`,
              sortable: true,
              static: false,
            },
            {
              accessor: 'amount',
              hidden: false,
              name: `${t('Value')} ${
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
                  return (
                    <span className=' text-afexgreen-regular'>{t(val)}</span>
                  );
                } else {
                  return (
                    <span className=' text-afexred-regular'>{t(val)}</span>
                  );
                }
              },
            },

            {
              accessor: 'status',
              hidden: false,
              name: `${t('Status')}`,
              sortable: true,
              static: false,

              row: (val) => {
                if (val === 'Active') {
                  return (
                    <span className=' bg-afexgreen-extralight text-afexgreen-darker dark:bg-afexdark-verydark dark:text-afexgreen-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight dark:bg-afexdark-verydark text-afexred-dark dark:text-afexred-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                }
              },
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

export default TransactionTable;
