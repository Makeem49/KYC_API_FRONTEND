import React from 'react';
import DataGrid from '../../../../components/data-grid';

import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
import { get_activity_log_query } from '../../../../queries/tracker_board';
import { Navigate } from 'react-router-dom';
import { t } from 'i18next';

// const ActionComponent = ({ data }: { data: any }) => {
//   console.log({ data });
//   return (
//     <span className='flex flex-col'>
//       <p>Hello</p>
//       <p>Action</p>
//     </span>
//   );
// };

const ActivityStream = () => {
  const { data, isError, isLoading } = useQuery(get_activity_log_query());
  console.log(data, 'works');
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

  return (
    <>
      <DataGrid
        title='Search'
        rows={10}
        dateFilter={{ enabled: true, label: '', accessor: 'dateCreated' }}
        data={data!}
        headerFilter={[{ name: 'Status' }]}
        headers={[
          {
            accessor: 'key',
            hidden: false,
            name: `${t('Name')}`,
            sortable: true,
            static: true,
          },
          {
            accessor: 'type',
            hidden: false,
            name: `${t('Type')}`,
            sortable: true,
            static: false,
          },

          {
            accessor: 'action',
            hidden: false,
            name: `${t('Action Summary')}`,
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
          {
            accessor: 'actionTime',
            hidden: false,
            name: `${t('Date')}`,
            sortable: true,
            static: false,
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
    </>
  );
};

export default ActivityStream;
