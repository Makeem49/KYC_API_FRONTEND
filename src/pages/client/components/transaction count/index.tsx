import React from 'react';

const TransactionCount = () => {
  return (
    <div className=' flex flex-col border border-afexpurple-lighter rounded-lg'>
      <div className='text-sm  bg-afexpurple-dark rounded-t text-[#F1EBFC] p-5'>
        <p className='text-xl font-bold'>Transaction Count (Top Users)</p>
        <span className=''>24 October, 2022</span>
      </div>

      <div className='h-full rounded pb-2'>
        <div className='overflow-auto w-full rounded'>
          <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
            <thead className='text-[10px] bg-[#F1EBFC] rounded-t sticky top-0 text-left whitespace-nowrap z-[5]'>
              <tr className=' border-b child:font-normal text-[#5D5B60] child:text-[14px] child:p-2 child:cursor-default child:align-middle'>
                <th>S/N</th>
                <th>Clients' Name</th>
                <th>Client's Id</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody className='text-[12px] xl:text-[14px]'>
              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td>
                  <span>1.</span>
                </td>

                <td>
                  {' '}
                  <span>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words text-[#C1C0C2]'>
                    001-1234231-0000123
                  </span>
                </td>

                <td>
                  <span>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td>
                  <span>2.</span>
                </td>

                <td>
                  {' '}
                  <span>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words text-[#C1C0C2]'>
                    001-1234231-0000123
                  </span>
                </td>

                <td>
                  <span>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b border-dashed '>
                <td>
                  <span>3.</span>
                </td>

                <td>
                  {' '}
                  <span>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words text-[#C1C0C2]'>
                    001-1234231-0000123
                  </span>
                </td>

                <td>
                  <span>500</span>
                </td>
              </tr>

              <tr className=' text-left child:p-2 border-b  border-dashed '>
                <td>
                  <span>4.</span>
                </td>

                <td>
                  {' '}
                  <span>Praise Onyeagu</span>
                </td>

                <td className=' overflow-x-auto '>
                  <span className='font-medium break-words text-[#C1C0C2]'>
                    001-1234231-0000123
                  </span>
                </td>

                <td className=''>
                  <span>500</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionCount;
