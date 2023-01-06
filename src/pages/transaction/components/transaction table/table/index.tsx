import React, { useEffect, useState } from 'react';
import { useTransactionCtx } from '../../../../../context';
import { Pagination } from '../../../../../components';

const Table = () => {
  const { list } = useTransactionCtx();
  console.log(list);

  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<TransactionList[]>([]);

  useEffect(() => {
    // Handle Pagination on load
    const endOffset = itemsOffset + 10;
    setCurrentItems(list.slice(itemsOffset, endOffset));
    setPage(Math.ceil(list.length / 10));
  }, [itemsOffset, list]);

  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b text-[12px] text-[#C1C0C2] font-semibold child:px-2 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Date</th>
              <th>Client's Name</th>
              <th>Transaction ID</th>
              <th>Value</th>
              <th>Transaction Type</th>
              <th>Sync to Payment</th>
              <th> Status</th>
            </tr>
          </thead>
          <tbody className='text-[14px] xl:text-[14px]'>
            {currentItems.map((item) => (
              <tr className=' text-left font-normal child:py-8 child:px-2 border-b'>
                <td>
                  <input
                    type='checkbox'
                    id='remember'
                    className='checkbox white'
                  />
                </td>

                <td>
                  <span className=''>{list.indexOf(item) + 1}</span>
                </td>

                <td>
                  {' '}
                  <span className=' '> {item.createdAt.toString()}</span>
                </td>

                <td>
                  <span className=' '>
                    {item.client.firstName} {item.client.lastName}
                  </span>
                </td>

                <td>
                  <span className=' '>
                    {item.sessionId.substring(0, 8)}.xxxx{' '}
                  </span>
                </td>
                <td>
                  <span className=' '>{item.amount}</span>
                </td>
                <td>
                  <span className=' '>{item.transactionType}</span>
                </td>
                <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                  <span className=' '>
                    {item.isPlatformSynced ? 'True' : 'False'}
                  </span>
                </td>

                <td>
                  <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                    {item.status}
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
