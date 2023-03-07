import React from 'react';
import UserAction from '../drop down';
// import { useSingleClientCtx } from '../context/single_user.ctx';
import { useQuery } from 'react-query';
import { get_client_provider_query } from '../../../../queries/client_provider';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@mantine/core';

const Table = () => {
  const {
    data: list,
    isError,
    isLoading,
  } = useQuery(get_client_provider_query());
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

  const ActionComponent = ({ data }: { data: ClientProvider }) => (
    <UserAction data={data} />
  );

  return (
    <>
      <div className='bg-white p-3'>
        <DataGrid
          title='Search'
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={list!}
          headerFilter={[{ name: 'Status' }]}
          headers={[
            {
              accessor: 'createdAt',
              hidden: false,
              name: 'Date Created',
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },
            {
              accessor: 'name',
              hidden: false,
              name: 'Provider Name',
              sortable: true,
              static: true,
            },
            {
              accessor: 'transactionPhrase',
              hidden: false,
              name: 'Transaction Phrase',
              sortable: true,
              static: false,
            },

            // {
            //   accessor: 'numberOfClients',
            //   hidden: false,
            //   name: 'Number of Clients',
            //   sortable: true,
            //   static: false,
            //   row: (val) => <span>0</span>,
            // },

            {
              accessor: 'apiKey',
              hidden: false,
              name: 'Api Keys',
              sortable: true,
              static: false,
              row: (val) => <span className=' underline'>{val}</span>,
            },

            {
              accessor: 'isActive',
              hidden: false,
              name: 'Status',
              sortable: true,
              static: false,
              row: (val) => {
                if (val === 'Active') {
                  return (
                    <span className=' bg-afexgreen-extralight text-afexgreen-darker rounded-lg p-2'>
                      {val}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight text-afexred-dark rounded-lg p-2'>
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
          ActionComponent={ActionComponent} // action component
          withRowNavigation // enable row navigation
          navigationProps={{
            baseRoute: 'client-provider/api-keys',
            accessor: 'id',
          }} // define navigation
        />
      </div>
    </>
  );
};

export default Table;
