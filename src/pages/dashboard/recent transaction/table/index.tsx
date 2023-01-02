import React from 'react';
import { ArrowDown, ArrowUp } from 'iconsax-react';
import { useTransactionCtx } from '../../../../context';

const Table = () => {
  const { list } = useTransactionCtx();
  const arr = list.slice(0, 9);

  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top'>
          <thead className='text-[12px] sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b text-[#C1C0C2] font-normal child:px-1 child:cursor-default child:align-middle'>
              <th className='flex items-center'>
                S/N{' '}
                <span className='flex'>
                  <ArrowUp size='14' color='#c1c0c2' variant='Outline' />
                  <ArrowDown size='14' color='#c1c0c2' variant='Outline' />
                </span>
              </th>
              <th>Date</th>
              <th>Client's Name</th>
              <th>Amount</th>
              <th>Transaction type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[14px] text-[#49474D]'>
            {arr.map((el) => (
              <tr className=' text-left child:py-8 child:px-1 border-b'>
                <td>
                  <span className='font-normal'>{list.indexOf(el) + 1}</span>
                </td>

                <td>
                  {' '}
                  <span className='font-normal '>
                    {el.createdAt.toString()}
                  </span>
                </td>

                <td>
                  <span className='font-normal '>
                    {el.client ? null : 'no name'}
                  </span>
                </td>

                <td>
                  <span className='font-normal '>{el.amount}</span>
                </td>
                <td>
                  <span className='font-normal '>{el.transactionType}</span>
                </td>

                <td>
                  <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                    {el.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
