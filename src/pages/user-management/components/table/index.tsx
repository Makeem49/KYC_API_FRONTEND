import { t } from 'i18next';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Skeleton } from '@mantine/core';

import userImg from '../../../../assets/images/user.png';
import { DataGrid } from '../../../../components';
import { useGetUsers } from '../../../../queries';
import { shortDateFormatter } from '../../../../utils';
import UserAction from '../drop down';

const Table = () => {
  const [page, setCurrentPage] = React.useState(1);
  const [filter, setSearch] = React.useState('');
  const [filters, setFilters] = React.useState('');

  const { data, isError, isLoading } = useGetUsers(page, filter, filters);

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: '25px',
        }}
      />
    );

  if (isError || !data) return <Navigate to='/login' />;

  const ActionComponent = ({ data }: { data: User }) => (
    <UserAction data={data} />
  );

  return (
    <>
      <div className='bg-white  dark:bg-afexdark-darkest p-3'>
        <DataGrid
          loadMore={setCurrentPage}
          lastPage={data.lastPage}
          total={data.total}
          title={`${t('Search')}`}
          setSearch={setSearch}
          setFilters={setFilters}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data!?.data!}
          headerFilter={[
            { name: 'Two Step', accessor: 'twoStep' },
            { name: 'Status', accessor: 'isActive' },
          ]}
          headers={[
            {
              accessor: 'user',
              hidden: false,
              name: `${t('User')}`,
              sortable: true,
              static: false,
              secondary_key: 'email',
              row: (val, secondary_key) => (
                <span className='flex flex-col'>
                  {' '}
                  <span className=' relative  flex items-center gap-2'>
                    {' '}
                    <img
                      className='w-10 h-10 top-[-5px] absolute'
                      src={userImg}
                      alt='olvimg'
                    />
                    <span className=' absolute top-[-18] left-12 '>
                      {' '}
                      {val}{' '}
                    </span>
                  </span>
                  <span className='mt-4 ml-12'>{secondary_key}</span>
                </span>
              ),
            },
            {
              accessor: 'username',
              hidden: false,
              name: `${t('User Name')}`,
              sortable: true,
              static: true,
            },
            {
              accessor: 'providers',
              hidden: false,
              name: `${t('Provider Name')}`,
              sortable: true,
              static: true,
            },
            {
              accessor: 'lastLogin',
              hidden: false,
              name: `${t('Last Login')}`,
              sortable: true,
              static: false,
              row: (val) => <>{shortDateFormatter(val ?? '')}</>,
            },

            {
              accessor: 'twoStepEnabled',
              hidden: false,
              name: `${t('Two Step')}`,
              sortable: true,
              static: false,
              row: (val) => (
                <span className=' bg-afexgreen-extralight dark:bg-afexdark-verydark rounded-lg p-2'>
                  {val ? 'Enabled' : 'Disabled'}{' '}
                </span>
              ),
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
                    <span className=' bg-afexgreen-extralight dark:bg-afexdark-verydark text-afexgreen-darker dark:text-afexgreen-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                } else {
                  return (
                    <span className=' bg-afexred-extralight dark:bg-afexdark-verydark text-afexred-dark dark:text-afexred-regular rounded-lg p-2'>
                      {t(val)}
                    </span>
                  );
                }
              },
            },

            {
              accessor: 'createdAt',
              hidden: false,
              name: `${t('Date Created')}`,
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },
          ]}
          withExport
          withGlobalFilters
          withCheck // enable checkbox
          withActions // enable action column
          ActionComponent={ActionComponent} // action component
          // withNavigation // enable row navigation
          // navigationProps={{ baseRoute: '', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
};

export default Table;
