import React from 'react';
import UserAction from '../drop-down';
// import { useSingleClientCtx } from '../context/single_user.ctx';
import { useQuery } from 'react-query';
import { get_client_provider_query } from '../../../../queries/client_provider';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@mantine/core';
import { t } from 'i18next';

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
      <div className='bg-white dark:bg-afexdark-darkest p-3'>
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
              name: `${t('Date Created')}`,
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },
            {
              accessor: 'name',
              hidden: false,
              name: `${t('Provider Name')}`,
              sortable: true,
              static: true,
            },
            {
              accessor: 'transactionPhrase',
              hidden: false,
              name: `${t('Transaction Phrase')}`,
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
              name: `${t('Api Keys')}`,
              sortable: true,
              static: false,
              row: (val) => <span className=' underline'>{t(val)}</span>,
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
                    <span className=' bg-afexgreen-extralight  dark:bg-afexdark-verydark  dark:text-afexgreen-regular text-afexgreen-darker rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight  dark:bg-afexdark-verydark text-afexred-dark dark:text-afexred-regular rounded-lg p-2'>
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
          withActions // enable action column
          ActionComponent={ActionComponent} // action component
          withNavigation // enable row navigation
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
