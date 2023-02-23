import React from 'react';
import tableData1 from '../../../../tableData1.json';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';

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
  return (
    <>
      <DataGrid
        title='Search'
        rows={2}
        dateFilter={{ enabled: true, label: '', accessor: 'dateCreated' }}
        data={tableData1}
        headerFilter={[{ name: 'Status' }]}
        headers={[
          {
            accessor: 'userName',
            hidden: false,
            name: 'User Name',
            sortable: true,
            static: true,
          },
          {
            accessor: 'email',
            hidden: false,
            name: 'Email',
            sortable: true,
            static: false,
          },

          {
            accessor: 'actionSummarry',
            hidden: false,
            name: 'Action Summarry',
            sortable: true,
            static: false,
          },
          {
            accessor: 'details',
            hidden: false,
            name: 'Age',
            sortable: true,
            static: false,
          },
          {
            accessor: 'dateCreated',
            hidden: false,
            name: 'Start Date',
            sortable: true,
            static: false,
            row: (val) => <span>{shortDateFormatter(val)} </span>,
          },
          {
            accessor: 'status',
            hidden: false,
            name: 'Status',
            sortable: true,
            static: false,
            row: (val) => (
              <span className=' bg-afexgreen-extralight p-3 rounded-lg'>
                {val ? 'Successful' : 'Fail'}{' '}
              </span>
            ),
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
