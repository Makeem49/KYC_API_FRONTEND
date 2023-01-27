import { Key } from 'react';

const TableBody = ({ tableData, columns }: any) => {
  return (
    <tbody className='text-[10px] xl:text-[14px] child:text-[#49474D]'>
      {tableData.map(
        (data: { [x: string]: any; id: Key | null | undefined }) => {
          return (
            <tr
              className=' text-left child:py-8 child:px-1 border-b'
              key={data.id}>
              {columns.map(({ accessor }: any) => {
                const tData = data[accessor] ? data[accessor] : '——';
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default TableBody;
