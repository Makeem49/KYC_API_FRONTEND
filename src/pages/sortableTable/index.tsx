import Table from './components/Table';
import tableData1 from '../../tableData1.json';

const columns = [
  { label: 'Full Name', accessor: 'full_name', sortable: true },
  { label: 'Email', accessor: 'email', sortable: false },
  { label: 'Gender', accessor: 'gender', sortable: true, sortbyOrder: 'desc' },
  { label: 'Age', accessor: 'age', sortable: true },
  { label: 'Start date', accessor: 'start_date', sortable: true },
];

const SortableTable = () => {
  return (
    <div className='table_container'>
      <Table data={tableData1} columns={columns} />
      <br />

      <br />
    </div>
  );
};

export default SortableTable;
