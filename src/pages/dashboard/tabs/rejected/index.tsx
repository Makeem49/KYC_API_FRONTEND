import React from 'react';
import rejectedList from '../../../../dummyData/rejectedList.json'
// import { Skeleton } from '@mantine/core';

import { DataGrid } from '../../../../components';
// import { useGetRejectedtList } from '../../../../queries';
import UserAction from './actions/drop down';

function PendingList() {
  // const { data: list, isLoading } = useGetRejectedtList();

  // if (isLoading)
  //   return (
  //     <Skeleton
  //       height={500}
  //       style={{
  //         borderRadius: '25px',
  //       }}
  //     />
  //   );
 const data = rejectedList;
  const ActionComponent = ({ data }: { data: ClientList }) => (
    <UserAction data={data} />
  );
  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest px-6">
        <DataGrid
          lastPage={1}
          total={1}
          title="Search"
          rows={10}
          data={data!?.items}
          headers={[
            {
              accessor: 'name',
              hidden: false,
              name: 'Name',
              sortable: true,
              static: false,
              secondary_key: "phone number",
              row: (val, second) => (
                <span className="flex flex-col">
                  <span className=" text-afexpurple-regular">{val}</span>
                  <span className="w-[140px]">{second}</span>
                </span>
              ),
            },
            {
              accessor: 'country',
              hidden: false,
              name: 'Country',
              sortable: true,
              static: false,
            },

            {
              accessor: 'Submission Date',
              hidden: false,
              name: 'date',
              sortable: true,
              static: false,
            },

            {
              accessor: 'riskLevel',
              hidden: false,
              name: 'Risk Level',
              sortable: true,
              static: false,
              row: (val) => {
                if (val === "Low Risk") {
                  return (
                    <span className=" bg-afexgreen-extralight  text-afexgreen-darker dark:text-afexgreen-regular rounded-lg p-2">
                      {(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=" bg-afexred-extralight  text-afexred-dark  dark:text-afexred-regular rounded-lg p-2">
                      {(val)}
                    </span>
                  );
                }
              },
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
