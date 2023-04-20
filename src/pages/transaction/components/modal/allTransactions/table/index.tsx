import React from 'react';

const Table = () => {
  return (
    <div className='h-full mt-4 pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[12px] sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className='child:py-2 border-b text-[#C1C0C2] font-semibold border-dashed child:cursor-default child:align-middle'>
              <th>S/N</th>
              <th>Client Providers</th>
              <th>Locations</th>
              <th>Warehouses</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left child:py-4 border-b'>
              <td>
                <span className='font-normal'>1</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>Workbench</span>
              </td>

              <td>
                <span className='font-normal '>Kaduna</span>
              </td>

              <td>
                <span className='font-normal '>Anchau</span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 border-b'>
              <td>
                <span className='font-normal'>2</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>AFTL Uganda</span>
              </td>

              <td>
                <span className='font-normal '>Kad</span>
              </td>

              <td>
                <span className='font-normal '>Sob</span>
              </td>
            </tr>

            <tr className=' text-left child:py-4 border-b'>
              <td>
                <span className='font-normal'>3</span>
              </td>

              <td>
                {' '}
                <span className='font-normal '>AFTL Kenya</span>
              </td>

              <td>
                <span className='font-normal '>aduna</span>
              </td>

              <td>
                <span className='font-normal '>mpada</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
