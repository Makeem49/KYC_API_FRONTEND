import React from 'react';

const Table = () => {
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
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left font-normal child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>1</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Wallet transfer</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>True</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                  Successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>2</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Wallet transfer</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>False</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                  Successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>3</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Withdrawal</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>True</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#FDEEEE] rounded '>Failed</span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>4</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Deposit</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>False</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#E8F1FC] rounded '>
                  Pending
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>5</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Wallet transfer</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>True</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                  Successful
                </span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 child:px-2 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className=''>6</span>
              </td>

              <td>
                {' '}
                <span className=' '>May 1st 2021</span>
              </td>

              <td>
                <span className=' '>Ogundele Fatai</span>
              </td>

              <td>
                <span className=' '>WT-120434328</span>
              </td>
              <td>
                <span className=' '>N20,100.00</span>
              </td>
              <td>
                <span className=' '>Wallet transfer</span>
              </td>
              <td className='max-w-[250px] overflow-hidden text-ellipsis'>
                <span className=' '>True</span>
              </td>

              <td>
                <span className=' px-3 py-2 bg-[#E7F9F0] rounded '>
                  Successful
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
