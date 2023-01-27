import React, { useState, useEffect } from 'react';
import moment from 'moment';
import userImg from '../../../../assets/images/user.png';
import UserAction from '../drop down';
import { Pagination } from '../../../../components';
import { useUsersCtx } from '../../../../context';
import { useSingleUserCtx } from '../context/single_user.ctx';

const Table = () => {
  const { list } = useUsersCtx();
  const { setData } = useSingleUserCtx();

  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<User[]>([]);

  useEffect(() => {
    // Handle Pagination on load
    const endOffset = itemsOffset + 10;
    setCurrentItems(list.slice(itemsOffset, endOffset));
    setPage(Math.ceil(list.length / 10));
  }, [itemsOffset, list]);

  return (
    <>
      <div className='h-full pb-5 relative'>
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
      </div>
    </>
  );
};

export default Table;
