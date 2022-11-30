import React from 'react';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className=' border-b child:cursor-default child:py-3 text-[#C1C0C2] font-semibold text-[12px]'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Api Endpoint</th>
              <th>Number of Succesful Request</th>
              <th>Number of Failed Request</th>
              <th>Number of Not Found Request</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>Docs API Key </td>
              <td className='text-start '>0</td>
              <td className='text-start '>2027</td>
              <td className='text-start '>2027</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
