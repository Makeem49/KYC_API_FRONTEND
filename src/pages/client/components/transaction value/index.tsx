import React from 'react';

const TransactionValue = () => {
  return (
    <div className=' flex flex-col border border-afexpurple-lighter rounded-lg'>
      <div className='text-sm  bg-afexpurple-dark rounded-t text-white p-5'>
        <p className='text-xl font-bold'>Transaction Values (Top Users)</p>
        <span className=''>24 October, 2022</span>
      </div>

      <div className='h-full rounded pb-2'>
        <div className='overflow-auto w-full rounded'>
          <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
            <thead className='text-[10px] bg-[#F1EBFC] rounded-t sticky top-0 text-left whitespace-nowrap z-[5]'>
              <tr className=' border-b child:p-2 child:cursor-default child:align-middle'>
                <th className=''>S/N</th>
                <th className=''>Clients' Name</th>
                <th className=''>Client's Id</th>
                <th className=''>Value</th>
              </tr>
            </thead>
            <tbody className='text-[10px] xl:text-[12px]'>
              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td className=''>
                  <span className='font-medium'>1.</span>
                </td>

                <td className=''>
                  {' '}
                  <span className='font-medium '>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words '>
                    001-1234231-0000123
                  </span>
                </td>

                <td className=''>
                  <span className='font-medium '>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td className=''>
                  <span className='font-medium'>2.</span>
                </td>

                <td className=''>
                  {' '}
                  <span className='font-medium '>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words '>
                    001-1234231-0000123
                  </span>
                </td>

                <td className=''>
                  <span className='font-medium '>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td className=''>
                  <span className='font-medium'>3.</span>
                </td>

                <td className=''>
                  {' '}
                  <span className='font-medium '>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words '>
                    001-1234231-0000123
                  </span>
                </td>

                <td className=''>
                  <span className='font-medium '>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td className=''>
                  <span className='font-medium'>4.</span>
                </td>

                <td className=''>
                  {' '}
                  <span className='font-medium '>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words '>
                    001-1234231-0000123
                  </span>
                </td>

                <td className=''>
                  <span className='font-medium '>500</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionValue;
