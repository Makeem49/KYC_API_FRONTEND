import TableBody from './TableBody';
import TableHead from './TableHead';
import { useSortableTable } from './useSortableTable';

const Table = ({ data, columns }: any) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table className='overflow-auto w-full align-top text-[12px] xl:text-[14px]'>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;
