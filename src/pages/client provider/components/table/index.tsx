import React, { useState, useEffect } from 'react';
import UserAction from '../drop down';
import { Link } from 'react-router-dom';

import { Pagination } from '../../../../components';
import { useClientsCtx } from '../../../../context';
import { useSingleClientCtx } from '../context/single_user.ctx';

const Table = () => {
  const { list } = useClientsCtx();
  const { setData } = useSingleClientCtx();

  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<ClientProvider[]>([]);

  useEffect(() => {
    // Handle Pagination on load
    const endOffset = itemsOffset + 10;
    setCurrentItems(list.slice(itemsOffset, endOffset));
    setPage(Math.ceil(list.length / 10));
  }, [itemsOffset, list]);

  return (
    <div className='h-full pb-5 relative'>
      <div className='overflow-auto w-full pb-24 '>
        <table className='overflow-auto w-full align-top  text-[#54565B]'>
          <thead className='text-[10px]  sticky top-0 text-left z-[5]'>
            <tr className='border-b child:cursor-default child:py-4 text-[#C1C0C2] text-[12px] font-semibold'>
              <td className='py-6 px-6'>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>
              <th className='px-6 '>S/N</th>
              <th className='px-6 '>Date Created</th>
              <th className='px-6 '>Provider Name</th>
              <th className='px-6 '>Transaction Phrase</th>
              <th className='px-6 '>Number of Clients</th>
              <th className='px-6 '>Api Keys</th>
              <th className='px-6 '>Status</th>
              <th className='px-6 '>Actions</th>
            </tr>
          </thead>
          <tbody className='text-[14px]'>
            {currentItems.map((providers) => (
              <tr className=' text-left border-b'>
                <td className='py-6 px-6'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white  w-[16px] h-[16px] rounded-lg text-afexpurple accent-afexpurple-light'
                  />
                </td>
                <td className='py-6 px-6'>{list.indexOf(providers) + 1}</td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>
                    {' '}
                    {providers.createdAt.toString()}{' '}
                  </span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>{providers.name}</span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>
                    {providers.transactionPhrase}
                  </span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>{}</span>
                </td>

                <td className='py-6 px-6 cursor-default'>
                  <Link
                    to={`${providers.id}/api-keys`}
                    className='font-medium underline'>
                    API Keys
                  </Link>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium text-[#076D3A] bg-[#E7F9F0] py-1 px-3 rounded '>
                    {providers.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td onClick={() => setData(providers)}>
                  {' '}
                  <UserAction />{' '}
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
  );
};

export default Table;
