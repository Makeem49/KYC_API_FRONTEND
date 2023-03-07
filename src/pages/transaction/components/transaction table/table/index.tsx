import React, { useEffect, useState } from 'react';
// import { useTransactionCtx } from '../../../../../context';
import { Pagination } from '../../../../../components';
import { commaformatter } from '../../../../../utils';
interface ClientTableInterface {
  data: any[];
  selectedColumns: string[];
}
const Table = ({ data, selectedColumns }: ClientTableInterface) => {
  console.log(selectedColumns);
  const [page, setPage] = useState<number>(1);
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<TransactionList[]>([]);

  useEffect(() => {
    // Handle Pagination on load
    const endOffset = itemsOffset + 10;
    setCurrentItems(data.slice(itemsOffset, endOffset));
    setPage(Math.ceil(data.length / 10));
  }, [itemsOffset, data]);

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

              {selectedColumns?.includes('date') && <th>Date</th>}
              {selectedColumns?.includes('client_name') && (
                <th>Client's Name</th>
              )}
              {selectedColumns?.includes('trans_id') && <th>Transaction ID</th>}
              {selectedColumns?.includes('value') && <th>Value</th>}
              {selectedColumns?.includes('trans_type') && (
                <th>Transaction Type</th>
              )}
              {selectedColumns?.includes('sync_to_payment') && (
                <th>Sync to Payment</th>
              )}
              {selectedColumns?.includes('status') && <th> Status</th>}
              {/* {selectedColumns?.includes('') && } */}
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
                  <span className=''>{data.indexOf(item) + 1}</span>
                </td>

                {selectedColumns?.includes('date') && (
                  <td>
                    <span> {item.createdAt.toString()}</span>
                  </td>
                )}
                {selectedColumns?.includes('client_name') && (
                  <td>
                    <span>{item.clientName}</span>
                  </td>
                )}
                {selectedColumns?.includes('trans_id') && (
                  <td>
                    <span>{item.clientPlatformId}</span>
                  </td>
                )}
                {selectedColumns?.includes('value') && (
                  <td>
                    <span>{commaformatter(item.amount)}</span>
                  </td>
                )}
                {selectedColumns?.includes('trans_type') && (
                  <td>
                    <span>{item.transactionType}</span>
                  </td>
                )}
                {selectedColumns?.includes('sync_to_payment') && (
                  <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                    <span>{item.isPlatformSynced ? 'True' : 'False'}</span>
                  </td>
                )}
                {selectedColumns?.includes('status') && (
                  <td>
                    <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                      {item.status}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        dataLength={data.length}
        page={page}
        itemsOffset={itemsOffset}
        perPage={10}
        setItemsOffset={setItemsOffset}
      />
    </div>
  );
};

export default Table;
