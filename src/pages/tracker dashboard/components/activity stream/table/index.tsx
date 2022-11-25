import React from 'react';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[12px] font-semibold text-[#C1C0C2] sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b  child:px-1 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>Client </th>
              <th>Email</th>
              <th>Location</th>
              <th>Device</th>
              <th>Date Created</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>1</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>

            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>2</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>

            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>3</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>

            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>4</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>

            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>5</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>

            <tr className=' text-left child:py-3 child:px-1 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td className=''>
                <span className='font-medium'>6</span>
              </td>

              <td>
                <span className='flex text-afexpurple-dark flex-col font-medium'>
                  Chidi Nnadi{' '}
                  <small className='text-[10px] text-[#49474D]'>
                    001-12343-00001
                  </small>
                </span>
              </td>

              <td className=''>
                <span className='font-medium '>Cnandi@afexnigeria.com</span>
              </td>

              <td className=''>
                <span className='font-medium '>Abuja</span>
              </td>
              <td className=''>
                <span className='font-medium '>iPhone</span>
              </td>

              <td className=''>
                <span className='font-medium'>May 1st 2021</span>
              </td>
              <td className=''>
                <span className='font-medium'>2 mins ago</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
