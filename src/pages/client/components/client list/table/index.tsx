import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useClientStats } from '../../../../../context';
import { Pagination } from '../../../../../components';

const Table = () => {
  const { list } = useClientStats();
  // console.log(list);
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<ClientList[]>([]);

  useEffect(() => {
    // Handle Pagination on load
    const endOffset = itemsOffset + 10;
    setCurrentItems(list.slice(itemsOffset, endOffset));
    setPage(Math.ceil(list.length / 10));
  }, [itemsOffset, list]);

  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b text-[#C1C0C2] child:font-semibold child:text-[12px] child:px-1 child:cursor-default child:align-middle'>
              <th>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </th>

              <th>S/N</th>
              <th>Date joined</th>
              <th>Client's Name</th>
              <th>Wallet Balance</th>
              {/* <th>Email</th> */}
              <th>Activity Status</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[14px] child:text-[#49474D]'>
            {currentItems.map((items) => (
              <tr
                className=' text-left child:py-8 child:px-1 border-b'
                onClick={() => navigate(`${items.providerId}/${items.id}`)}>
                <td>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white'
                  />
                </td>

                <td>
                  <span className='font-normal'>{list.indexOf(items) + 1}</span>
                </td>

                <td>
                  {' '}
                  <span className='font-normal '>
                    {items.createdAt.toString()}
                  </span>
                </td>

                <td className=' flex flex-col'>
                  <span className='font-normal text-afexred-regular '>
                    {items.firstName} {items.lastName}
                  </span>

                  <span>{items.platformId}</span>
                </td>

                <td>
                  <span className='font-normal '>&#8358;{items.balance}</span>
                </td>
                {/* <td>
                  <span className='font-normal '>@gmail.com</span>
                </td> */}

                <td>
                  <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Pagination
            dataLength={list.length}
            page={page}
            itemsOffset={itemsOffset}
            perPage={10}
            setItemsOffset={setItemsOffset}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
