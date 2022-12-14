import React, { useState, useEffect } from 'react';
import { useApiTokenCtx } from '../../../../../../context';
import { Pagination } from '../../../../../../components';

const Table = () => {
  const { list } = useApiTokenCtx();

  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<ClientProviderToken[]>([]);

  const [page, setPage] = useState<number>(1);

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
                  className=' white w-[16px] h-[16px] rounded-lg active:border-afexpurple-darker text-afexpurple active:bg-afexpurple-light accent-afexpurple-light'
                />
              </td>
              <th className='px-6 '>S/N</th>
              <th className='px-6 '>Date Created</th>
              <th className='px-6 '>API Keys</th>
              <th className='px-6 '>Number of Requests</th>
              <th className='px-6 '>Last Used</th>
              <th className='px-6 '>Status</th>
              <th className='px-6 '>Actions</th>
            </tr>
          </thead>
          <tbody className='text-[14px]'>
            {currentItems.map((token) => (
              <tr className=' text-left border-b'>
                <td className='py-6 px-6'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white  w-[16px] h-[16px] rounded-lg text-afexpurple accent-afexpurple-light'
                  />
                </td>
                <td className='py-6 px-6'>{list.indexOf(token) + 1}</td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>
                    {token.createdAt.toString()}
                  </span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>
                    {token.apiKey.substring(0, 4)}...xxx
                  </span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>227</span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium'>{token.lastUsedAt}</span>
                </td>

                <td className='py-6 px-6'>
                  <span className='font-medium text-[#076D3A] bg-[#E7F9F0] py-1 px-3 rounded '>
                    {token.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td>actions</td>
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
