import React, { useCallback, useState } from 'react';
import { Filter, RowHorizontal } from 'iconsax-react';
import { SearchNormal } from 'iconsax-react';
// import { HiDownload } from 'react-icons/hi';
import { Calendar } from 'iconsax-react';

import {
  useDebouncedEffect,
  isDeepEqual,
  searchText,
  insert,
} from '../../utils/functions';

import { DateRanges, GenericFilter, Pagination } from '..';
import { useNavigate } from 'react-router-dom';

// Data Headers
interface Header {
  name: string;
  accessor: string;
  hidden: boolean;
  sortable: boolean;
  static: boolean;
  secondary_key?: string;
  tertiary_key?: string;
  cell?: (val: any, second?: any) => JSX.Element;
  cellAlign?: 'left' | 'right' | 'center';
  row?: (val: any, second?: any, third?: any) => JSX.Element;
  rowAlign?: 'left' | 'right' | 'center';
  actionCell?: (data: ArrayElement<any[]>) => JSX.Element;
}

// Table properties (Required)
interface DataGridRequiredProps {
  data: any[];
  headers: Header[];
  dateFilter: {
    enabled: boolean;
    accessor: string;
    label: string;
  };
  rows: number;
}

interface ActionComponentProps {
  data: ArrayElement<any[]>;
}

// Table properties (Optional)
interface DataGridOptionalProps extends DataGridRequiredProps {
  title?: string;
  withGlobalFilters?: boolean;
  filterKeys?: string[];
  withHeaderActionComponent?: boolean;
  HeaderActionComponent?: JSX.Element;
  withExport?: boolean;
  withActions?: boolean;
  withCheck?: boolean;
  ActionComponent?: (props: ActionComponentProps) => JSX.Element;
  withNavigation?: boolean;
  navigationProps?: { baseRoute: string; accessor: string };
}

interface DataGridProps extends DataGridOptionalProps {}

const DataGrid = ({
  data,
  headers,
  rows,
  dateFilter,
  ...props
}: DataGridProps) => {
  const navigate = useNavigate();

  const table = React.useMemo(() => data, [data]);
  // const [currentUsers, setCurrentUsers] = useState<typeof data>(data);
  const [selectedColumns, setSelectedColumns] = useState(headers);
  // Column visibility
  const [showColOpts, setShowColOpts] = useState<boolean>(false); // Column options
  // const [_internal, setInternal] = useState<typeof data>(data); // Data Mainpulation
  const [selectedRows, setSelectedRows] = useState<typeof data>([]); // Data Selection
  const [start, setStart] = useState<Date | null>(null); // Date Range Start
  const [end, setEnd] = useState<Date | null>(null); // Date Range End
  const [showDateCalendar, setShowDateCalendar] = useState<boolean>(false); // Show Date Calendar
  const [showFilter, setShowFilter] = useState<boolean>(false); // Filtering
  const [filterObj, setFilterObj] = useState<{ [key: string]: string[] }>(
    () => {
      if (props.filterKeys) {
        return props.filterKeys.reduce((a, b) => ({ ...a, [b]: [] }), {});
      }

      return { '': [] };
    }
  );

  // SORTING ACTIONS

  const useSortableData = (items: any, config: any) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key: any) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const { items, requestSort, sortConfig } = useSortableData(data, '');
  const getClassNamesFor = (name: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  getClassNamesFor('');
  // const [sorting, setSorting] = useState({ key: 'name', ascending: true });

  // useEffect(() => {
  //   const currentUsersCopy = [...currentUsers];

  //   console.log(currentUsersCopy, sorting);

  //   const sortedCurrentUsers = currentUsersCopy.sort((a: any, b: any) => {
  //     if (typeof a[sorting?.key] === 'number') {
  //       return a - b;
  //     } else {
  //       return a[sorting?.key] - b[sorting?.key];
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

  // Pagination Controls // Rows per page
  const [currentItems, setCurrentItems] = useState<typeof data>([]); // Current list displayed
  const [page, setPage] = useState<number>(1); // Current page
  const [itemsOffset, setItemsOffset] = useState<number>(0); // offset from index

  // Select/Deselect a particular row
  const toggleRow = (row: ArrayElement<typeof data>) => {
    if (selectedRows.includes(row)) {
      setSelectedRows((prev) => prev.filter((el) => !isDeepEqual(el, row)));
    } else {
      setSelectedRows((prev) =>
        insert(
          prev,
          currentItems.findIndex((el) => isDeepEqual(el, row)),
          row
        )
      );
    }
  };

  // Select current displayed rows
  const selectCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setSelectedRows(currentItems);
    } else {
      setSelectedRows([]);
    }
  };

  // Filter Date use******
  const filterByDate = useCallback(() => {
    if (!start || !end) return;
    setCurrentItems(
      table
        .slice()
        .filter(
          (el) =>
            new Date(el[dateFilter.accessor]).getTime() >= start.getTime() &&
            new Date(el[dateFilter.accessor]).getTime() <= end.getTime()
        )
    );
  }, [table, dateFilter.accessor, start, end]);

  // Column Visibility
  const toggleVisibility = (header: Header) => {
    if (header.static) return;

    if (
      selectedColumns.findIndex((el) => el.accessor === header.accessor) >= 0
    ) {
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

  // Searching for any text
  const filterByTextSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setCurrentItems(() => searchText(table, value));
    },
    [table]
  );

  useDebouncedEffect(
    () => {
      // Handle Pagination on load
      const endOffset = itemsOffset + rows;
      setCurrentItems(items.slice(itemsOffset, endOffset));
      setPage(Math.ceil(items.length / rows));
      document.addEventListener('click', () => setShowColOpts(false));
    },
    [itemsOffset, rows, items, data],
    50
  );

  // Generate the Filter Object
  useDebouncedEffect(
    () => {
      if (props.withGlobalFilters && props.filterKeys) {
        setFilterObj(
          props.filterKeys.reduce((a, b) => ({ ...a, [b]: [] }), {})
        );
      }
    },
    [props.withGlobalFilters],
    100
  );

  return (
    <section className='h-full relative space-y-5'>
      {/* Top Task Bar */}
      <div className='flex justify-between items-center  border-[#F3F3F3] dark:border-wdark-300 relative'>
        <h2 className='text-xl font-bold ml-3 capitalize'>{props.title}</h2>

        <div className='flex items-center space-x-5 relative text-base'>
          {/* {props.withExport && (
            <ActionSelect
              label='export options'
              type='filled'
              className='dark:bg-wdark-400 dark:text-wdark-300'
              data={[
                {
                  label: 'export all',
                  icon: <HiDownload />,
                  function: () => {},
                },
                {
                  label: 'export selected',
                  icon: <HiDownload />,
                  function: () => {},
                },
                {
                  label: 'export filtered',
                  icon: <HiDownload />,
                  function: () => {},
                },
              ]}
            />
          )} */}
        </div>
      </div>
      <div className='flex items-center'>
        {/* SEARCH */}
        <div className='relative flex items-center w-72 2xl:w-96 '>
          <input
            type='text'
            placeholder='Search by clients name, id'
            className='py-3 mx-2 w-full text-base rounded-lg px-10 pr-14 border focus:ring-1 outline-none  focus:ring-gray-100  hover:shadow bg-white'
            onChange={filterByTextSearch}
          />
          <span className='absolute left-4 text-2xl'>
            <SearchNormal size='20' color='#8f8e91' variant='Bulk' />
          </span>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className='text-gray-300 flex flex-1 items-center gap-4 relative justify-end'>
          {/* COLUMN FILTER */}
          <div className='relative' onClick={(e) => e.stopPropagation()}>
            <button
              className={`h-full whitespace-nowrap bg-afexred-extralight gap-2 text-[14px] p-4 rounded-lg hover:shadow w-full hover:cursor-pointer text-afexred-regular font-semibold flex justify-center  items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
                showColOpts
                  ? ' border-afexred-regular  '
                  : ' border-transparent'
              }`}
              onClick={() => setShowColOpts((s) => !s)}>
              <RowHorizontal
                size='16'
                color='#E1261C'
                variant='Bulk'
                className='shrink-0 '
              />
              {'COLUMNS'}
            </button>
            <ul
              className={`flex gap-2 w-[200px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 bg-white dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                showColOpts && 'max-h-[300px] opacity-100 overflow-scroll'
              }`}>
              {headers.map((header) => (
                <label
                  key={header.accessor}
                  htmlFor={header.accessor}
                  className={`flex items-center gap-1 whitespace-nowrap  text-gray-900 text-base cursor-pointer m-1 rounded-md py-4 px-4 capitalize ${
                    selectedColumns.findIndex(
                      (el) => el.accessor === header.accessor
                    ) >= 0 && !header.static
                      ? 'bg-afexred-lighter'
                      : selectedColumns.findIndex(
                          (el) => el.accessor === header.accessor
                        ) >= 0 && header.static
                      ? 'bg-gray-200 cursor-not-allowed'
                      : undefined
                  }`}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    name={header.accessor}
                    id={header.accessor}
                    disabled={header.static}
                    checked={
                      selectedColumns.findIndex(
                        (el) => el.accessor === header.accessor
                      ) >= 0
                    }
                    onChange={() => toggleVisibility(header)}
                  />
                  {header.name}{' '}
                </label>
              ))}
            </ul>
          </div>

          <button
            className='flex bg-afexred-extralight font-semibold justify-between items-center rounded-lg py-4 px-4 text-sm  gap-2 border-[1px] border-none  text-afexred-regular  hover:shadow p-2  hover:text-afexred-regular'
            onClick={() => setShowFilter(true)}>
            <Filter size={18} variant='Bold' />
            {'FILTER'}
          </button>

          {/* DATE FILTER ACTION */}
          {dateFilter.enabled && (
            <button
              className='flex gap-6 items-center py-3 mx-2 text-base rounded-xl px-4 focus:outline-none focus:border-afexgreen hover:shadow bg-afexred-extralight cursor-pointer'
              onClick={() => setShowDateCalendar((s) => !s)}>
              {/* <span className='capitalize whitespace-nowrap'>
                {dateFilter.label}{' '}
              </span> */}
              <span>
                <Calendar color='#E1261C' variant='Bulk' />
              </span>
            </button>
          )}
          {showDateCalendar && dateFilter.enabled && (
            <DateRanges
              startDate={start}
              endDate={end}
              setEndDate={setEnd}
              setStartDate={setStart}
              close={() => setShowDateCalendar(false)}
              filterFunc={filterByDate}
            />
          )}

          {props.withHeaderActionComponent && props.HeaderActionComponent}
        </div>
      </div>

      {/* Table */}
      <div className='h-full'>
        <div className='h-[40rem] xl:h-[50rem] relative pb-24'>
          <div className='h-full table-auto overflow-auto w-full my-3'>
            <table className='overflow-auto p-5 w-full mb-10 align-top'>
              <thead className='sticky top-0 text-left whitespace-nowrap bg-white z-[5]'>
                <tr className='child:px-3 border-b child:py-3 child:text-[#C1C0C2] child:cursor-default child:align-middle capitalize'>
                  {props.withCheck && (
                    <th className='align-middle w-8 '>
                      <input
                        type='checkbox'
                        className='checkbox'
                        checked={
                          selectedRows.length === currentItems.length &&
                          selectedRows.length !== 0
                        }
                        onChange={selectCurrent}
                      />
                    </th>
                  )}
                  <th className='w-8'>S/N</th>
                  {selectedColumns.map((column) => (
                    <th
                      key={column.accessor}
                      className={`${column.hidden && 'hidden'}`}>
                      {column.cell
                        ? column.cell(column.name)
                        : column.name.toLowerCase()}

                      <span
                        className='#C1C0C2'
                        onClick={() => requestSort(`${column.accessor}`)}>
                        {' '}
                        &uarr;&darr;
                      </span>
                    </th>
                  ))}
                  {props.withActions && <th>{'action'}</th>}
                </tr>
              </thead>
              <tbody className='bg-white'>
                {currentItems.map((row, index) => (
                  <tr
                    onClick={
                      props.withNavigation && props.navigationProps
                        ? () =>
                            navigate(
                              `/${props.navigationProps?.baseRoute}/${
                                row[props.navigationProps?.accessor!]
                              }`
                            )
                        : undefined
                    }
                    key={index}
                    className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexred-extralight child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
                    {props.withCheck && (
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type='checkbox'
                          className='checkbox'
                          checked={
                            selectedRows.findIndex((el) =>
                              isDeepEqual(el, row)
                            ) >= 0
                          }
                          onClick={(e) => e.stopPropagation()}
                          onChange={() => toggleRow(row)}
                        />
                      </td>
                    )}
                    <td className='py-4'>{table.indexOf(row) + 1}</td>

                    {Object.keys(row).map((entry, index) => {
                      const header = headers.find(
                        (el) => el.accessor === entry
                      );
                      const secondary_data = header?.secondary_key
                        ? row[header.secondary_key]
                        : '';
                      const data = row[entry];
                      return (
                        <td
                          key={index}
                          className={`text-${header?.rowAlign}  ${
                            selectedColumns.findIndex(
                              (el) => el.accessor === header?.accessor
                            ) >= 0
                              ? 'visible'
                              : 'hidden'
                          }`}>
                          {header?.row && data !== null
                            ? header.row(data, secondary_data)
                            : data.length > 0
                            ? data
                            : '--------'}
                        </td>
                      );
                    })}
                    {props.withActions && (
                      <td>
                        {props.ActionComponent && (
                          <props.ActionComponent data={row} />
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            dataLength={data.length}
            itemsOffset={itemsOffset}
            setItemsOffset={setItemsOffset}
            page={page}
            perPage={rows}
          />
        </div>
      </div>

      {props.withGlobalFilters && props.filterKeys && (
        <GenericFilter
          close={() => setShowFilter(false)}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
          data={[
            {
              client_type: [
                'Client',
                'CMC',
                'Farmer',
                'Input Partner',
                'Investor',
                'Logistics Partner',
              ],
            },
            {
              status: ['Verified', 'Unverified'],
            },
          ]}
          show={showFilter}
        />
      )}
    </section>
  );
};

export default DataGrid;
