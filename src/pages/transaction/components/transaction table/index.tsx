import React from 'react';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
const TransactionTable = ({ data }: { data: TransactionList[] }) => {
  const countryCode = data.slice(0, 1);

  const code = countryCode.map((el: any) => el.countryCode);

  return (
    <>
      <div className='p-4 bg-white w-full'>
        <DataGrid
          title='Search by client name, id..'
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data}
          headerFilter={[{ name: 'Transaction Type' }, { name: 'Status' }]}
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
              accessor: 'time',
              hidden: false,
              name: 'Time',
              sortable: true,
              static: false,
            },
            {
              accessor: 'clientName',
              hidden: false,
              name: 'Client Name',
              sortable: true,
              static: true,
              secondary_key: 'lastName',
              tertiary_key: 'platformId',
              row: (val, second) => (
                <span className='flex flex-col'>
                  <span>
                    {val} {second}{' '}
                  </span>
                </span>
              ),
            },
            {
              accessor: 'sessionId',
              hidden: false,
              name: 'Transaction Id',
              sortable: true,
              static: false,
            },
            {
              accessor: 'amount',
              hidden: false,
              name: `Value ${code}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'transactionType',
              hidden: false,
              name: 'Transaction Type',
              sortable: true,
              static: false,
              row: (val) => {
                if (val === 'Credit') {
                  return <span className=' text-afexgreen-regular'>{val}</span>;
                } else {
                  return <span className=' text-afexred-regular'>{val}</span>;
                }
              },
            },

            {
              accessor: 'status',
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
