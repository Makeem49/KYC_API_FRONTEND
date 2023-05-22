import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetNoVirtualAccount } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';

const NoVirtualAccount = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetNoVirtualAccount(
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
  console.log(data);
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

            {
              accessor: 'clientName',
              hidden: false,
              name: `${t('Client Name')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'platformId',
              hidden: false,
              name: `${t('Platform Id')}`,
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
              accessor: 'location',
              hidden: false,
              name: `${t('Location')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'isVerified',
              hidden: false,
              name: `${t('Status')}`,
              sortable: true,
              static: false,

              row: (val) => {
                if (val) {
                  return (
                    <span className=" bg-afexgreen-extralight rounded dark:bg-afexdark-verydark p-1 text-afexgreen-regular">
                      {t('Verified')}
                    </span>
                  );
                } else {
                  return (
                    <span className=" bg-afexred-extralight bg-afexr p-1 rounded dark:bg-afexdark-verydark text-afexred-regular">
                      {t('Unverified')}
                    </span>
                  );
                }
              },
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

export default NoVirtualAccount;
