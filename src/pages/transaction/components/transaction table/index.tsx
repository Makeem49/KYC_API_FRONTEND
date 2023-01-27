import React from 'react';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
const TransactionTable = ({ data }: { data: TransactionList[] }) => {
  console.log(data);

  return (
    <>
      <div className='p-4 bg-white w-full'>
        <DataGrid
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data}
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
              accessor: 'clientName',
              hidden: false,
              name: 'Client Name',
              sortable: true,
              static: true,
              secondary_key: 'lastName',
              tertiary_key: 'platformId',
              row: (val, second, third) => (
                <span className='flex flex-col'>
                  <span>
                    {val} {second}{' '}
                  </span>
                  <span>{third} </span>
                </span>
              ),
            },
            {
              accessor: 'amount',
              hidden: false,
              name: 'Value',
              sortable: true,
              static: false,
            },

            {
              accessor: 'transactionType',
              hidden: false,
              name: 'Transaction Type',
              sortable: true,
              static: false,
            },

            {
              accessor: 'status',
              hidden: false,
              name: 'Status',
              sortable: true,
              static: false,
              row: (val) => (
                <span className=' bg-afexgreen-extralight rounded-lg p-2'>
                  {val}
                </span>
              ),
            },
            {
              accessor: 'accountId',
              hidden: true,
              name: 'Account Id',
              sortable: true,
              static: false,
            },

            {
              accessor: 'platformId',
              hidden: true,
              name: 'platformId',
              sortable: true,
              static: false,
            },
            {
              accessor: 'lastName',
              hidden: true,
              name: 'Last Name',
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
      </div>
    </>
  );
};

export default TransactionTable;
