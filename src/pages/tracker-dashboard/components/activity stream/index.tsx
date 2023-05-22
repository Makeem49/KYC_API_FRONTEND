import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import DataGrid from '../../../../components/data-grid';
import { useGetActivityLog } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';

// import tableData1 from '../../../../tableData1.json';

const ActivityStream = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetActivityLog(
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

  if (isError) return <Navigate to="/login" />;

  return (
    <>
      <DataGrid
        loadMore={setCurrentPage}
        lastPage={1}
        total={data!?.data.length}
        title="Search"
        setSearch={setSearch}
        setFilters={setFilters}
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'dateCreated' }}
        data={data!?.data}
        headerFilter={[{ name: 'Status', accessor: 'isActive' }]}
        headers={[
          {
            accessor: 'key',
            hidden: false,
            name: `${t('Name')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'action',
            hidden: false,
            name: `${t('Action')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'type',
            hidden: false,
            name: `${t('Type')}`,
            sortable: true,
            static: false,
          },
          {
            accessor: 'actionTime',
            hidden: false,
            name: `${t('Action Date')}`,
            sortable: true,
            static: false,
            row: (val) => <span>{shortDateFormatter(val)} </span>,
          },
          {
            accessor: 'time',
            hidden: false,
            name: `${t('Action Time')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'description',
            hidden: false,
            name: `${t('Details')}`,
            sortable: true,
            static: false,
          },

          // {
          //   accessor: 'key',
          //   hidden: false,
          //   name: `${t('Name')}`,
          //   sortable: true,
          //   static: false,
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
