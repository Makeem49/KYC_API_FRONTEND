import React from 'react';
import { ArrowDown, ArrowUp } from 'iconsax-react';

const Table = () => {
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
            <tr className=' text-left child:py-8 child:px-1 border-b'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-8 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>May 1st 2021</span>
              </td>

              <td>
                <span className='font-normal '>Samuel Adeniyi</span>
              </td>

              <td>
                <span className='font-normal '>N20,100.00</span>
              </td>
              <td>
                <span className='font-normal '>Withdrawal</span>
              </td>

              <td>
                <span className='font-normal px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
