import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'iconsax-react';

const TableHead = ({ columns, handleSorting }: any) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: any) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
      <tr className='child:py-4 border-b text-[#C1C0C2] child:font-semibold child:text-[12px] child:px-1 child:cursor-default child:align-middle'>
        {columns.map(({ label, accessor, sortable }: any) => {
          const cl = sortable
            ? sortField === accessor && order === 'asc'
              ? 'up'
              : sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : '';
          return (
            <th key={accessor} className={cl}>
              {label}
              <span
                className='pl-2'
                onClick={() => handleSortingChange(accessor)}>
                <ArrowUp size={8} className='inline' />
                <ArrowDown size={8} className='inline' />
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
