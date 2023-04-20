import { t } from 'i18next';
import React from 'react';

import DataGrid from '../../../../components/data-grid';
// import { useGetActivityLog } from '../../../../queries';
import tableData1 from '../../../../tableData1.json';

// import { Navigate } from 'react-router-dom';

// import { Skeleton } from '@mantine/core';

const ActivityStream = () => {
  const [, setCurrentPage] = React.useState(1);
  const [, setSearch] = React.useState('');
  const [, setFilters] = React.useState('');

  // const { data, isEr } = useGetActivityLog(
  //   currentPage,
  //   filter,
  //   filters
  // );

  // if (isLoading)
  //   return (
  //     <Skeleton
  //       height={500}
  //       style={{
  //         borderRadius: '25px',
  //       }}
  //     />
  //   );

  // if (isError) return <Navigate to='/login' />;

  return (
    <>
      <DataGrid
        loadMore={setCurrentPage}
        lastPage={1}
        total={tableData1.length}
        title='Search'
        setSearch={setSearch}
        setFilters={setFilters}
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'dateCreated' }}
        data={tableData1}
        headerFilter={[{ name: 'Status', accessor: 'isActive' }]}
        headers={[
          {
            accessor: 'userName',
            hidden: false,
            name: `${t('Name')}`,
            sortable: true,
            static: true,
          },
          {
            accessor: 'email',
            hidden: false,
            name: `${t('Email')}`,
            sortable: true,
            static: true,
          },

          {
            accessor: 'actionSummarry',
            hidden: false,
            name: `${t('Action Sumarry')}`,
            sortable: true,
            static: true,
          },

          {
            accessor: 'details',
            hidden: false,
            name: `${t('Details')}`,
            sortable: true,
            static: true,
          },

          {
            accessor: 'dateCreated',
            hidden: false,
            name: `${t('Date')}`,
            sortable: true,
            static: true,
          },

          // {
          //   accessor: 'key',
          //   hidden: false,
          //   name: `${t('Name')}`,
          //   sortable: true,
          //   static: true,
          // },
          // {
          //   accessor: 'type',
          //   hidden: false,
          //   name: `${t('Type')}`,
          //   sortable: true,
          //   static: false,
          // },

          // {
          //   accessor: 'action',
          //   hidden: false,
          //   name: `${t('Action Summary')}`,
          //   sortable: true,
          //   static: false,
          // },
          // {
          //   accessor: 'description',
          //   hidden: false,
          //   name: `${t('Details')}`,
          //   sortable: true,
          //   static: false,
          // },
          // {
          //   accessor: 'actionTime',
          //   hidden: false,
          //   name: `${t('Date')}`,
          //   sortable: true,
          //   static: false,
          // },
          // {
          //   accessor: 'ref',
          //   hidden: false,
          //   name: `${t('Reference Id')}`,
          //   sortable: true,
          //   static: false,
          // },
        ]}
        withExport
        withGlobalFilters
        withCheck // enable checkbox
        // withActions // enable action column
        // ActionComponent={ActionComponent} // action component
        // withNavigation // enable row navigation
        // navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
      />
    </>
  );
};

export default ActivityStream;
