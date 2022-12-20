import React from 'react';
import halfCirc from '../../../../assets/images/ell.svg';

const TransactionCount = () => {
  return (
    <div className=' flex flex-col border border-afexpurple-lighter rounded-lg'>
      <div className=' relative text-sm text-textgrey-darker rounded-t p-5'>
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute -rotate-90 left-[-7%] top-[-30%] '
        />
        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-140 left-[40%] bottom-[-50%] '
        />

        <img
          src={halfCirc}
          alt='hafcirc'
          className='absolute rotate-20 right-[-7%] top-[-30%] '
        />

        <p className='text-xl font-bold'>Transaction Count (Top Users)</p>
        <span className=''>24 October, 2022</span>
      </div>

      <div className='h-full rounded pb-2'>
        <div className='overflow-auto w-full rounded'>
          <table className='overflow-auto w-full align-top text-[#54565B] text-[12px] xl:text-[14px]'>
            <thead className=' z-10 text-[10px] bg-[#F5F5F5] rounded-full sticky top-0 text-left whitespace-nowrap'>
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
