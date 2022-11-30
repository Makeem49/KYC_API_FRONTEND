import React from 'react';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b text-[#C1C0C2] child:font-semibold child:text-[12px] child:px-1 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Date joined</th>
              <th>Client's Name</th>
              <th>Wallet Balance</th>
              <th>Email</th>
              <th>Activity Status</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[14px] child:text-[#49474D]'>
            <tr className=' text-left child:py-4 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Active
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Inactive
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Active
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Active
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Inactive
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Active
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Inactive
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Inactive
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-1 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

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
                  Active
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
