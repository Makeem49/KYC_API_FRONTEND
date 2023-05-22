import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetBankList } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';
import UserAction from '../dropdown';

const BankList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetBankList(
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

  const ActionComponent = ({ data }: { data: Banks }) => (
    <UserAction data={data} />
  );

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
          data={data?.data!}
          headerFilter={[
            { name: '', accessor: '' },
            { name: '', accessor: '' },
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
              accessor: 'name',
              hidden: false,
              name: `${t('Bank Name')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'code',
              hidden: false,
              name: `${t('Code')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'paymentPortalCode',
              hidden: false,
              name: `${t('Payment Portal Code')}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'countryCode',
              hidden: false,
              name: `${t('Country Code')}`,
              sortable: true,
              static: false,
            },
          ]}
          // withExport
          // withGlobalFilters
          withCheck // enable checkbox
          withActions // enable action column
          ActionComponent={ActionComponent} // action component
          // withNavigation // enable row navigation
          // navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
};

export default BankList;
