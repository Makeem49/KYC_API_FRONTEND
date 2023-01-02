import React, { useState, useEffect } from 'react';
import { useSingleClientCtx } from '../../../../../../context';
import { Pagination } from '../../../../../../components';
const Table = () => {
  const { list } = useSingleClientCtx();

  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<SingleClient[]>([]);

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
            <tr className='child:py-4 border-b text-textgrey-normal child:px-1 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Date created</th>
              <th>Amount</th>
              <th>Total before</th>
              <th>Total after</th>
              <th>Transaction Type</th>
              <th>Reference ID</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className=' text-left child:py-8 child:px-1 text-textgrey-darker border-b'>
                <td>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white'
                  />
                </td>

                <td className=''>
                  <span className='font-medium'>{list.indexOf(item) + 1}</span>
                </td>

                <td className=''>
                  {' '}
                  <span className='font-medium'>
                    {item.createdAt.toString()}
                  </span>
                </td>

                <td className=''>
                  <span className='font-medium '>{item.amount}</span>
                </td>

                <td className=''>
                  <span className='font-medium '>{item.amountBefore}</span>
                </td>
                <td className=''>
                  <span className='font-medium '>{item.amountAfter}</span>
                </td>

                <td className=''>
                  <span className='font-medium'>{item.transactionType}r</span>
                </td>
                <td className=''>
                  <span className='font-medium'>
                    {item.ref.substring(0, 8)}...xxx
                  </span>
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
