import React from 'react';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b  child:px-6 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th className='py-3 px-4 '>S/N</th>
              <th className='py-3 px-4 '>Date</th>
              <th className='py-3 px-4 '>Client's Name</th>
              <th className='py-3 px-4 '>Amount</th>
              <th className='py-3 px-4 '>Transaction type</th>
              <th className='py-3 px-4 '>Status</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left child:py-4 child:px-6 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#E7F9F0] rounded '>
                  successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#FDEEEE] rounded '>
                  failed
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-6 border-b border-[#F0F0F0]'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className='py-4 px-4 mr-10'>
                <span className='font-medium'>1</span>
              </td>

              <td className='py-4 px-4 mr-10 text-start '>
                {' '}
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td className=' flex mt-2 gap-2 py-4 px-4 mr-10'>
                <span className='font-medium '>Samuel Adeniyi</span>
              </td>

              <td className='py-4 px-4 mr-10 w-[150px]'>
                <span className='font-medium '>N20,100.00</span>
              </td>
              <td className='py-4 px-4 max-w-[250px] overflow-hidden text-ellipsis'>
                <span className='font-medium '>Withdrawal</span>
              </td>

              <td className='py-4 px-4 mr-10  '>
                <span className='font-medium px-3 py-2 bg-[#E7F9F0] rounded '>
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
