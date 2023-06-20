import React from 'react';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetRejectedtList } from '../../../../queries';
import UserAction from './actions/drop down';

function PendingList() {
  const { data: list, isLoading } = useGetRejectedtList();

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  const ActionComponent = ({ data }: { data: ClientList }) => (
    <UserAction data={data} />
  );
  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest px-6 py-3">
        <DataGrid
          lastPage={1}
          total={1}
          title="Search"
          rows={10}
          data={list!?.data}
          headers={[
            {
              accessor: 'name',
              hidden: false,
              name: 'Name',
              sortable: true,
              static: false,
            },
            {
              accessor: 'verification_country',
              hidden: false,
              name: 'Country',
              sortable: true,
              static: false,
            },

            {
              accessor: 'average_monthly_income',
              hidden: false,
              name: 'Income',
              sortable: true,
              static: false,
            },

            {
              accessor: 'source',
              hidden: false,
              name: 'Employer',
              sortable: true,
              static: false,
            },

            {
              accessor: 'available_balance',
              hidden: false,
              name: 'Account Balance',
              sortable: true,
              static: false,
            },

            {
              accessor: 'confidence',
              hidden: false,
              name: 'Risk Level',
              sortable: true,
              static: false,
            },
          ]}
          // withExport
          // withGlobalFilters
          withCheck // enable checkbox
          dateFilter={{
            enabled: false,
            accessor: '',
            label: '',
          }}
          headerFilter={[]}
          loadMore={function (page: number): void {
            throw new Error('Function not implemented.');
          }}
          setSearch={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
          }}
          setFilters={function (value: any): void {
            throw new Error('Function not implemented.');
          }}
          withActions // enable action column
          ActionComponent={ActionComponent} // action component
          // withNavigation // enable row navigation
          // navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
}

export default PendingList;
