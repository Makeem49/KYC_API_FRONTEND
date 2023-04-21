// import { useApiTokenCtx } from '../../../../../../context';

import { Navigate, useLocation } from 'react-router-dom';

import DataGrid from '../../../../components/data-grid';
import React from 'react';
import { Skeleton } from '@mantine/core';
import UserAction from '../drop-down';
import { shortDateFormatter } from '../../../../utils';
import { t } from 'i18next';
import { useGetTokens } from '../../../../queries';

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { pathname } = useLocation();
  const providerId = pathname.split('/')[3];
  const { data, isError, isLoading } = useGetTokens(
    parseInt(providerId, 10),
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

  // console.log(list, 'apis');

  return (
    <div className='bg-white dark:bg-afexdark-darkest p-3'>
      <DataGrid
        loadMore={setCurrentPage}
        lastPage={1}
        total={data!?.data.length}
        title='Search'
        setSearch={setSearch}
        setFilters={setFilters}
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
        data={data!.data}
        headerFilter={[{ name: 'Status', accessor: 'isActive' }]}
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
            accessor: 'apiKey',
            hidden: false,
            name: `${t('Api Key')}`,
            sortable: true,
            static: true,
          },
          {
            accessor: 'noOfRequests',
            hidden: false,
            name: `${t('No Of Requests')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'lastUsedAt',
            hidden: false,
            name: `${t('Last Used')}`,
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
                  <span className=' bg-afexgreen-extralight dark:bg-afexdark-verydark text-afexgreen-darker dark:text-afexgreen-regular rounded-lg p-2'>
                    {val}
                  </span>
                );
              } else {
                return (
                  <span className=' bg-afexred-extralight dark:bg-afexdark-verydark text-afexred-dark dark:text-afexred-regular rounded-lg p-2'>
                    {val}
                  </span>
                );
              }
            },
          },
        ]}
        withExport
        withGlobalFilters
        withCheck // enable checkbox
        withActions // enable action column
        ActionComponent={({ data }: { data: ClientProviderToken }) => (
          <UserAction data={data} />
        )} // action component
        // withNavigation // enable row navigation
        // navigationProps={{ baseRoute: '', accessor: 'id' }} // define navigation
      />
    </div>
  );
};

export default Table;
