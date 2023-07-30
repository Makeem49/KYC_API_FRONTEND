import React from 'react';

import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
import { useGetWaitList } from '../../../../queries';
import UserAction from './actions/drop down';
import { shortDateFormatter } from '../../../../utils';

function WatingList() {
  const { data: list, isLoading } = useGetWaitList();

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  const ActionComponent = ({ data }: { data: User }) => (
    <UserAction data={data} />
  );
  return (
    <>
      <div className="px-6 py-3">
        <DataGrid
          lastPage={1}
          total={list!?.count}
          title="Search"
          rows={10}
          data={list!?.data}
          headers={[
            {
              accessor: 'phone',
              hidden: false,
              name: 'Phone Number',
              sortable: true,
              static: false,
            },

            {
              accessor: 'nationality',
              hidden: false,
              name: 'Nationality',
              sortable: true,
              static: false,
            },

            {
              accessor: 'created_at',
              hidden: false,
              name: 'Submission date',
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },

            {
              accessor: 'status',
              hidden: false,
              name: 'status',
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

export default WatingList;
