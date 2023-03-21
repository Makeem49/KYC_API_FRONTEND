import React from 'react';
import moment from 'moment';
import userImg from '../../../../assets/images/user.png';
import UserAction from '../drop down';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
import { get_users_query } from '../../../../queries/user_management';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { Skeleton } from '@mantine/core';
import { t } from 'i18next';

const Table = () => {
  const { data: list, isError, isLoading } = useQuery(get_users_query());
  // console.log(list, 'works');
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
  const searchText = t('Search');

  const ActionComponent = ({ data }: { data: User }) => (
    <UserAction data={data} />
  );

  return (
    <>
      <div className='bg-white  dark:bg-afexdark-darkest p-3'>
        <DataGrid
          title={searchText}
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={list!}
          headerFilter={[{ name: 'Two Step' }, { name: 'Status' }]}
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
              row: () => (
                <span className='font-medium bg-[#F1F0F0]  dark:bg-afexdark-verydark text-[#948E8E] p-1  rounded '>
                  {moment(new Date()).fromNow()}
                </span>
              ),
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
              // row: (val) => (
              //   <span>
              //     {val ? (
              //       <span className=' bg-afexgreen-extralight text-afexgreen-darker rounded-lg p-2'>
              //         Active
              //       </span>
              //     ) : (
              //       <span className=' bg-afexred-extralight text-afexred-dark rounded-lg p-2'>
              //         {' '}
              //         Inactive
              //       </span>
              //     )}{' '}
              //   </span>
              // ),
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
      {/* <div className='h-full pb-5 relative'>
        <div className='overflow-auto w-full pb-24 min-h-[36rem]'>
          <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
            <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
              <tr className=' border-b child:cursor-default text-[#C1C0C2] text-[12px] font-semibold'>
                <th>
                  <input type='checkbox' className='checkbox white' />
                </th>

                <th>S/N</th>
                <th>User</th>
                <th>Last Login</th>
                <th>Two Step</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='text-[10px] xl:text-[12px]'>
              {currentItems.map((user) => (
                <tr className=' text-left  child:py-4 border-b'>
                  <td>
                    <input
                      type='checkbox'
                      id='remember'
                      className='checkbox white'
                    />
                  </td>

                  <td>
                    <span className='font-medium'>
                      {list.indexOf(user) + 1}
                    </span>
                  </td>

                  <td className='text-start '>
                    {' '}
                    <div className='flex gap-5'>
                      <img
                        className='w-10 h-full object-fill'
                        src={userImg}
                        alt='olvimg'
                      />{' '}
                      <span className='font-medium text-[14px]'>
                        {user.firstName} {user.lastName}
                        <br /> <small>{user.email}</small>
                      </span>
                    </div>
                  </td>

                  <td>
                    <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                      {moment(new Date()).fromNow()}
                    </span>
                  </td>

                  <td>
                    <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                      {user.twoStepEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>

                  <td>
                    <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>

                  <td>
                    <span className='font-medium '>
                      {user.createdAt.toString()}{' '}
                    </span>
                  </td>

                  <td onClick={() => setData(user)}>
                    <UserAction />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          dataLength={list.length}
          page={page}
          itemsOffset={itemsOffset}
          perPage={10}
          setItemsOffset={setItemsOffset}
        />
      </div> */}
    </>
  );
};

export default Table;
