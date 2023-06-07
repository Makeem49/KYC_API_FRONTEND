import { t } from 'i18next';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import DataGrid from '../../../../components/data-grid';
import { get_client_provider_query } from '../../../../queries/client_provider';
import { commaformatter, shortDateFormatter } from '../../../../utils';
import UserAction from '../drop-down';

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useQuery(
    get_client_provider_query(currentPage, filter, filters)
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

  const ActionComponent = ({ data }: { data: ClientProvider }) => (
    <UserAction data={data} />
  );

  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest p-3">
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={1}
          total={data?.data.length!}
          title="Search"
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data?.data!}
          headerFilter={[{ name: 'Status', accessor: 'isActive' }]}
          setSearch={setSearch}
          setFilters={setFilters}
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
              static: false,
            },
            {
              accessor: 'transactionPhrase',
              hidden: false,
              name: `${t('Transaction Phrase')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'noOfClients',
              hidden: false,
              name: 'Number of Clients',
              sortable: true,
              static: false,
              row: (val) => <span>{commaformatter(val)} </span>,
            },

            {
              accessor: 'apiKey',
              hidden: false,
              name: `${t('Api Keys')}`,
              sortable: true,
              static: false,
              row: (val) => <span className=" underline">{t(val)}</span>,
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
                    <span className=" bg-afexgreen-extralight  dark:bg-afexdark-verydark  dark:text-afexgreen-regular text-afexgreen-darker rounded-lg p-2">
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=" bg-afexred-extralight  dark:bg-afexdark-verydark text-afexred-dark dark:text-afexred-regular rounded-lg p-2">
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
