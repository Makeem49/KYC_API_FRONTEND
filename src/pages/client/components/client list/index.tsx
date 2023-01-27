import React from 'react';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';
// import { SearchNormal } from 'iconsax-react';
// // import Column from './task bar/components/column';
// import Filter from './task bar/components/filters';
// import Exports from './task bar/components/exports';
// import Table from './table';
// import { useColumnCtx } from '../../../../context/column_context';
// import { ColumnFilter } from '../../../../components';
// import { colClientsTable } from '../../../../assets/columnData';

const ClientList = ({ data }: any) => {
  // const { clientColumn } = useColumnCtx();
  // const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  // const [results, setResults] = useState(data);

  // useEffect(() => {
  //   setSelectedColumns(clientColumn); // eslint-disable-next-line
  // }, [clientColumn]);

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   return setResults(() =>
  //     data
  //       .slice()
  //       .filter(
  //         (el) =>
  //           `${el?.firstName} ${el?.lastName}`
  //             .toLowerCase()
  //             .includes(event.currentTarget.value.toLowerCase()) ||
  //           el.platformId.includes(event.currentTarget.value)
  //       )
  //   );
  // };

  return (
    <>
      <div className='bg-white p-3'>
        <DataGrid
          rows={10}
          dateFilter={{ enabled: true, label: '', accessor: 'createdAt' }}
          data={data}
          headers={[
            {
              accessor: 'createdAt',
              hidden: false,
              name: 'Date Created',
              sortable: true,
              static: false,
              row: (val) => <span>{shortDateFormatter(val)} </span>,
            },
            {
              accessor: 'firstName',
              hidden: false,
              name: 'Client Name',
              sortable: true,
              static: true,
              secondary_key: 'lastName',
              tertiary_key: 'platformId',
              row: (val, second, third) => (
                <span className='flex flex-col'>
                  <span>
                    {val} {second}{' '}
                  </span>
                  <span>{third} </span>
                </span>
              ),
            },
            {
              accessor: 'balance',
              hidden: false,
              name: 'Wallet Balance',
              sortable: true,
              static: false,
            },

            {
              accessor: 'phoneNumber',
              hidden: false,
              name: 'Phone Number',
              sortable: true,
              static: false,
            },

            {
              accessor: 'isActive',
              hidden: false,
              name: 'Status',
              sortable: true,
              static: false,
              row: (val) => (
                <span className=' bg-afexgreen-extralight rounded-lg p-2'>
                  {val ? 'Active' : 'Inactive'}{' '}
                </span>
              ),
            },
          ]}
          withExport
          withGlobalFilters
          withCheck // enable checkbox
          // withActions // enable action column
          // ActionComponent={ActionComponent} // action component
          withNavigation // enable row navigation
          navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
    // <div className='w-full flex flex-col gap-4 p-8 bg-[#ffff] rounded-lg'>
    //   <div className='flex justify-between'>
    //     <div className='relative'>
    //       <SearchNormal
    //         size='20'
    //         color='#c1c0c2'
    //         variant='Bulk'
    //         className=' absolute top-2.5 left-2 '
    //       />
    //       <input
    //         type='text'
    //         name=''
    //         id=''
    //         placeholder="Search by client's name, id"
    //         className=' py-2 px-10 rounded text-sm text-gray-400 border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
    //         onChange={handleSearch}
    //       />
    //     </div>

    //     <div className='flex items-center text-sm text-afexpurple-dark font-bold rounded-md gap-3'>
    //       <ColumnFilter
    //         columnOptions={colClientsTable}
    //         name='transactionsColumn'
    //         {...{ selectedColumns, setSelectedColumns }}
    //       />
    //       <Filter />
    //       <Exports />
    //     </div>
    //   </div>
    //   <Table data={results} selectedColumns={selectedColumns} />
    // </div>
  );
};

export default ClientList;
