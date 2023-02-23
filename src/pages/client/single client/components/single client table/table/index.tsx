import React from 'react';
// import { useSingleClientCtx } from '../../../../../../context';
import DataGrid from '../../../../../../components/data-grid';
import { shortDateFormatter } from '../../../../../../utils';
import { get_client_transactions_query } from '../../../../../../queries/single_client';
import { Navigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Skeleton } from '@mantine/core';
import Box from '../../../../../../assets/images/box.png';
const Table = () => {
  // const { list } = useSingleClientCtx();
  const { pathname } = useLocation();
  const clientId = pathname.split('/')[2];
  const { data, isError, isLoading } = useQuery(
    get_client_transactions_query(parseInt(clientId, 10))
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
  if (isError) return <Navigate to='/login' />;

  // const countryCode = list.slice(0, 1);

  // const code = countryCode.map((el: any) => el.countryCode);

  return (
    <>
      <div className='bg-white p-3'>
        {data!?.length > 0 ? (
          <DataGrid
            rows={10}
            dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
            data={data!}
            headerFilter={[{ name: 'Transaction Type' }]}
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
                accessor: 'amount',
                hidden: false,
                name: `Amount`,
                sortable: true,
                static: true,
              },
              {
                accessor: 'amountBefore',
                hidden: false,
                name: `Total Before`,
                sortable: true,
                static: false,
              },

              {
                accessor: 'amountAfter',
                hidden: false,
                name: `Total After`,
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
                    return (
                      <span className=' text-afexgreen-regular'>{val}</span>
                    );
                  } else {
                    return <span className=' text-afexred-regular'>{val}</span>;
                  }
                },
              },
              {
                accessor: 'ref',
                hidden: false,
                name: 'Reference ID',
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
        ) : (
          <div className=' p-16 h-[600px] justify-center flex flex-col gap-6 items-center'>
            {' '}
            <img src={Box} alt='' className='animate-bounce h-[50px]' />
            <p className=' text-[16px] font-semibold'>
              No data to display
            </p>{' '}
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
