import React from 'react';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
import { useQuery } from 'react-query';
import { get_client_list_query } from '../../../../queries/clients_stats';
import { Skeleton } from '@mantine/core';

const ClientList = () => {
  const { data, isError, isLoading } = useQuery(get_client_list_query(1));

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError) return <p>Error!!!</p>;

  const countryCode = data!.slice(0, 1);
  const code = countryCode.map((el: any) => el.countryCode);

  return (
    <>
      <div className='bg-white px-6 py-3'>
        <DataGrid
          title='Search by client name, id..'
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data!}
          headerFilter={[
            { name: 'Activity Status' },
            { name: 'Verification Status' },
          ]}
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
              secondary_key: 'platformId',

              row: (val, second) => (
                <span className='flex flex-col'>
                  <span className=' text-afexpurple-regular'>{val}</span>
                  <span className='w-[140px]'>{second}</span>
                </span>
              ),
            },
            {
              accessor: 'balance',
              hidden: false,
              name: `Wallet Balance ${code}`,
              sortable: true,
              static: false,
            },

            {
              accessor: 'phoneNumber',
              hidden: false,
              name: 'Phone Number',
              sortable: true,
              static: false,
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

            {
              accessor: 'providerName',
              hidden: false,
              name: 'Provider Name',
              sortable: true,
              static: false,
            },

            {
              accessor: 'isVerified',
              hidden: false,
              name: 'Verification Status',
              sortable: true,
              static: false,

              row: (val) => {
                if (val === 'Verified') {
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

            {
              accessor: 'valueOfTransactions',
              hidden: false,
              name: `Transaction Value ${code}`,
              sortable: true,
              static: false,
            },

            // {
            //   accessor: 'providerId',
            //   hidden: false,
            //   name: 'Provider Id',
            //   sortable: true,
            //   static: false,
            // },

            // {
            //   accessor: 'platformId',
            //   hidden: false,
            //   name: 'Platform Id',
            //   sortable: true,
            //   static: true,
            // },
          ]}
          withExport
          withGlobalFilters
          withCheck // enable checkbox
          // withActions // enable action column
          // ActionComponent={ActionComponent} // action component
          withNavigation // enable row navigation
          navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
};

export default ClientList;
