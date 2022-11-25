import React from 'react';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className=' border-b child:cursor-default'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Location</th>
              <th>Status</th>
              <th>Device</th>
              <th>IP Address</th>
              <th>Time</th>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
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

              <td className='text-start '>Abuja</td>
              <td className='text-start '>OK</td>
              <td className='text-start '> Chrome - Windows</td>
              <td className='text-start '> 236.125.56.78</td>
              <td className='text-start '> 2 mins ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
