import React from 'react';
import tableData1 from '../../../../tableData1.json';
import DataGrid from '../../../../components/data-grid';
import { shortDateFormatter } from '../../../../utils';

const ActionComponent = ({ data }: { data: any }) => {
  console.log({ data });
  return (
    <span className='flex flex-col'>
      <p>Hello</p>
      <p>Action</p>
    </span>
  );
};

const ActivityStream = () => {
  // useEffect(() => {
  //   setSelectedColumns(activityLogColumn); // eslint-disable-next-line
  // }, [activityLogColumn]);

  // console.log(selectedColumns);

  // const [sorting, setSorting] = useState({ key: `name`, ascending: true });
  // const [currentUsers, setCurrentUsers] = useState(tableData1);

  // useEffect(() => {
  //   const currentUsersCopy = [...currentUsers];

  //   console.log(currentUsersCopy, sorting);
  //   const sortedCurrentUsers = currentUsersCopy.sort((a: any, b: any) => {
  //     if (typeof a[sorting?.key] === 'number') {
  //       return a - b;
  //     } else {
  //       return a[sorting?.key].localeCompare(b[sorting?.key]);
  //     }
  //   });

  //   setCurrentUsers(
  //     sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sorting]);

  // function applySorting(key: string) {
  //   setSorting((prev) => {
  //     return { key, ascending: !prev.ascending };
  //   });
  // }

  return (
    <>
      {/* <div>
        <div className='flex text-[#000000] font-normal justify-between'>
          <p>Activity Stream</p>

          <div className='flex items-center gap-3'>
            <input
              type='text'
              name=''
              id=''
              placeholder="Search by client's name, id"
              className='p-2 rounded text-sm text-gray-400 border outline-none focus:outline-none bg-[#FFFF] h-full w-[280px]'
            />
            <div className='flex items-center text-sm text-textgrey-dark font-bold rounded-md gap-2'>
              <ColumnFilter
                columnOptions={colActivityLogTable}
                name='colActivityLogTable'
                {...{ selectedColumns, setSelectedColumns }}
              />
              <TimeSet />
            </div>
          </div>
        </div>
        <Table
          data={tableData1}
          selectedColumns={selectedColumns}
          sorting={sorting}
          sort={applySorting}
          currentUsers={currentUsers}
        />
      </div> */}
      <DataGrid
        rows={2}
        dateFilter={{ enabled: true, label: '', accessor: 'start_date' }}
        data={tableData1}
        headers={[
          {
            accessor: 'name',
            hidden: false,
            name: 'Client Name',
            sortable: true,
            static: true,
            secondary_key: 'id',
            row: (val, second) => (
              <span className='flex flex-col'>
                <span>{val} </span>
                <span>{second.toString()} </span>
              </span>
            ),
          },
          {
            accessor: 'email',
            hidden: false,
            name: 'Email',
            sortable: true,
            static: false,
          },

          {
            accessor: 'gender',
            hidden: false,
            name: 'Gender',
            sortable: true,
            static: false,
          },
          {
            accessor: 'age',
            hidden: false,
            name: 'Age',
            sortable: true,
            static: false,
            row: (val) => <span>{String(val)} </span>,
          },
          {
            accessor: 'start_date',
            hidden: false,
            name: 'Start Date',
            sortable: true,
            static: false,
            row: (val) => <span>{shortDateFormatter(val)} </span>,
          },
          {
            accessor: 'status',
            hidden: false,
            name: 'Status',
            sortable: true,
            static: false,
            row: (val) => <span>{val ? 'Success' : 'Failure'} </span>,
          },
        ]}
        withExport
        withGlobalFilters
        withCheck // enable checkbox
        withActions // enable action column
        ActionComponent={ActionComponent} // action component
        withNavigation // enable row navigation
        navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
      />
    </>
  );
};

export default ActivityStream;
