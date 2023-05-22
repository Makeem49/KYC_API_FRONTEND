import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetFailedFundRequest } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';

const FailedFunding = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetFailedFundRequest(
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

  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest px-6 py-3">
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={data!?.lastPage}
          total={data!?.total}
          title="Search"
          setSearch={setSearch}
          setFilters={setFilters}
          setSelectedEntries={setPageSize}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data!?.data}
          headerFilter={[
            { name: 'Request Type', accessor: 'requestType' },
            { name: 'Status', accessor: 'status' },
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

            // {
            //   accessor: 'clientName',
            //   hidden: false,
            //   name: `${t('Client Name')}`,
            //   sortable: true,
            //   static: false,
            // },
            {
              accessor: 'accountName',
              hidden: false,
              name: `${t('Account Name')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'bankAccount',
              hidden: false,
              name: `${t('Bank Account')}`,
              sortable: true,
              static: false,
            },
            {
              accessor: 'bankName',
              hidden: false,
              name: `${t('Bank')}`,
              sortable: true,
              static: false,
            },
            {
              accessor: 'amount',
              hidden: false,
              name: `${t('Amount')}`,
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
              accessor: 'requestType',
              hidden: false,
              name: `${t('Request Type')}`,
              sortable: true,
              static: false,

              row: (val) => {
                if (val === 'Credit') {
                  return (
                    <span className=" text-afexgreen-regular">{t(val)}</span>
                  );
                } else {
                  return (
                    <span className=" text-afexred-regular">{t(val)}</span>
                  );
                }
              },
            },

            {
              accessor: 'ref',
              hidden: true,
              name: `${t('Ref Id')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'status',
              hidden: false,
              name: `${t('Status')}`,
              sortable: true,
              static: false,
              row: (val) => {
                if (val === 'Successful') {
                  return (
                    <span className=" bg-afexgreen-extralight text-afexgreen-darker dark:bg-afexdark-verydark dark:text-afexgreen-regular rounded-lg p-2">
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className="bg-afexred-extralight dark:bg-afexdark-verydark text-afexred-regular dark:text-afexred-regular rounded-lg p-2">
                      {t(val)}
                    </span>
                  );
                }
              },
            },
            {
              accessor: 'description',
              hidden: false,
              name: `${t('Description')}`,
              sortable: true,
              static: false,
            },
          ]}
          // withExport
          // withGlobalFilters
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

export default FailedFunding;
