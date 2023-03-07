import React from 'react';
import { ArrowDown } from 'iconsax-react';
interface ClientTableInterface {
  data: any[];
  selectedColumns: string[];
  sort: any;
  sorting: any;
  currentUsers: any;
}

const Table = ({
  data,
  selectedColumns,
  sort,
  sorting,
  currentUsers,
}: ClientTableInterface) => {
  return (
    <div className=' h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[12px] font-semibold text-[#C1C0C2] sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-4 border-b  child:px-1 child:cursor-default child:align-middle'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th className='flex items-center'>
                S/N{' '}
                <span className='flex'>
                  <ArrowDown size='14' color='#c1c0c2' variant='Outline' />
                  <ArrowDown size='14' color='#c1c0c2' variant='Outline' />
                </span>{' '}
              </th>

              {selectedColumns?.includes('name') && (
                <th onClick={() => sort('name', !sorting.ascending)}>Name </th>
              )}
              {selectedColumns?.includes('email') && (
                <th onClick={() => sort('email', !sorting.ascending)}>Email</th>
              )}
              {selectedColumns?.includes('gender') && (
                <th onClick={() => sort('gender', !sorting.ascending)}>
                  Gender
                </th>
              )}
              {selectedColumns?.includes('age') && (
                <th onClick={() => sort('age', !sorting.ascending)}>Age</th>
              )}
              {selectedColumns?.includes('start_date') && (
                <th onClick={() => sort('start_date', !sorting.ascending)}>
                  Start Date
                </th>
              )}
              {selectedColumns?.includes('status') && (
                <th onClick={() => sort('statsus', !sorting.ascending)}>
                  Status
                </th>
              )}
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            {currentUsers.map((el: any) => (
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

                {selectedColumns?.includes('name') && (
                  <td>
                    {el.name}
                    {/* <span className='flex text-afexred-regular flex-col font-medium'>
                      Chidi Nnadi{' '}
                      <small className='text-[10px] text-[#49474D]'>
                        001-12343-00001
                      </small>
                    </span> */}
                  </td>
                )}
                {selectedColumns?.includes('email') && (
                  <td className=''>
                    {el.email}
                    {/* <span className='font-medium '>Cnandi@afexnigeria.com</span> */}
                  </td>
                )}
                {selectedColumns?.includes('gender') && (
                  <td className=''>
                    {el.gender}
                    {/* <span className='font-medium '>Abuja</span> */}
                  </td>
                )}
                {selectedColumns?.includes('age') && (
                  <td className=''>
                    {el.age}
                    {/* <span className='font-medium '>iPhone</span> */}
                  </td>
                )}
                {selectedColumns?.includes('start_date') && (
                  <td className=''>
                    {el.start_date}
                    {/* <span className='font-medium'>May 1st 2021</span> */}
                  </td>
                )}
                {selectedColumns?.includes('status') && (
                  <td className=''>
                    {el.statsus ? 'Success' : 'Failed'}
                    {/* <span className='font-medium'>2 mins ago</span> */}
                  </td>
                )}
              </tr>
            ))}

            {/* <tr className=' text-left child:py-3 child:px-1 border-b'>
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
                <span className='flex text-afexred-regular flex-col font-medium'>
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
                <span className='flex text-afexred-regular flex-col font-medium'>
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
                <span className='flex text-afexred-regular flex-col font-medium'>
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
                <span className='flex text-afexred-regular flex-col font-medium'>
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
                <span className='flex text-afexred-regular flex-col font-medium'>
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
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
