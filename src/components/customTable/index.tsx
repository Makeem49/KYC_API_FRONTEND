import React, { useEffect, useState } from 'react';

interface Header {
  name: string;
  accessor: string;
  hidden: boolean;
  sortable: boolean;
  static: boolean;
  cell?: (val: any) => JSX.Element;
}
interface TableProps {
  data: any[];
  headers: Header[];
}

const CustomizedTable = ({ data, headers }: TableProps) => {
  const perPage = 10;
  const [selectedColumns, setSelectedColumns] = useState(headers);
  const [curentItems, setCurentItems] = useState<any[]>([]);

  const insert = (arr: any[], index: number, newItem: any) => [
    // part of the array before the specified index
    ...arr.slice(0, index), // inserted item
    newItem, // part of the array after the specified index
    ...arr.slice(index),
  ];

  const toggleVisibility = (header: Header) => {
    if (header.static) return;
    if (selectedColumns.includes(header)) {
      setSelectedColumns((prev) =>
        prev.filter((el) => el.accessor !== header.accessor)
      );
    } else {
      setSelectedColumns((prev) =>
        insert(
          prev,
          headers.findIndex((el) => el.accessor === header.accessor),
          header
        )
      );
    }
  };

  const sort = (accessor: string) => {
    // Finish the sorting
    setCurentItems((prev) =>
      prev.sort((a, b) =>
        typeof a === 'string'
          ? a.localeCompare(b)
          : typeof a === 'number'
          ? a - b
          : a instanceof Date
          ? new Date(a).getTime() - new Date(b).getTime()
          : -1
      )
    );
  };

  // const exportData = () => {
  //   const ommitted = selectedColumns.filter((col) => col.hidden).map((col) => col.accessor)
  //   // return data.map(({ , ...rest}) => {return rest})
  // }

  useEffect(() => {
    const offset = 0;
    setCurentItems(data.slice(offset, offset + perPage));
  }, [data]);

  return (
    <div className=''>
       {/* Search */}
      {/* Date Filter */}
      {/* Column Filter */}     
      <ul>
        {headers.map((header) => (
          <li className='flex items-center'>
            <input
              type='checkbox'
              name={header.accessor}
              id={header.accessor}
              disabled={header.static}
              checked={selectedColumns.includes(header)}
              onChange={() => toggleVisibility(header)}
            />
             <label htmlFor={header.accessor}>{header.name} </label> 
          </li>
        ))}
         
      </ul>
      <table>
        <thead>
          <tr>
            {/* <th>S/N</th> */}
            {selectedColumns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => sort(column.accessor)}
                className={`${column.hidden && 'hidden'}`}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
           
          {curentItems.map((row, index) => (
            <tr key={index}>
              {/*               <td>{data.indexOf(row) + 1} </td> */}
                           
              {Object.keys(row).map((entry, index) => {
                const data = row[entry];
                const header = headers.find((el) => el.accessor === entry);
                console.log(row);
                return (
                  <td
                    key={index}
                    className={`${
                      !selectedColumns.includes(header!) && 'hidden'
                    }`}>
                                       
                    {header?.cell ? header.cell(data) : data}           
                  </td>
                );
              })}
                         
            </tr>
          ))}
                 
        </tbody>
             
      </table>
         
    </div>
  );
};
export default CustomizedTable;
