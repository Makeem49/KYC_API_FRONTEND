import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
// import { DownloadTableExcel } from 'react-export-table-to-excel';
// import { CSVLink } from 'react-csv';
import { ExportSquare, Filter, RowHorizontal } from 'iconsax-react';
import { ArrowDown2 } from 'iconsax-react';
import { SearchNormal } from 'iconsax-react';
// import { HiDownload } from 'react-icons/hi';
import { Calendar } from 'iconsax-react';
// import { useTranslation } from 'react-i18next';

import {
  useDebouncedEffect,
  isDeepEqual,
  searchText,
  searchSpecificText,
  insert,
} from '../../utils/functions';

import { DateRanges, Pagination } from '..';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@mantine/core';

import { DownloadTableExcel } from 'react-export-table-to-excel';

// Data Headers
export interface Header {
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

export interface HeaderFilter {
  name: string;
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
  headerFilter: HeaderFilter[];
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
  withRowNavigation?: boolean;
  navigationProps?: { baseRoute: string; accessor: string };
}

interface DataGridProps extends DataGridOptionalProps {}

const DataGrid = ({
  data,
  headers,
  headerFilter,
  rows,
  dateFilter,
  ...props
}: DataGridProps) => {
  const navigate = useNavigate();
  // const { t } = useTranslation();
  const [availableData, setAvailableData] = useState<typeof data>(data);
  const table = React.useMemo(() => data, [data]);
  // const [currentUsers, setCurrentUsers] = useState<typeof data>(data);
  const [selectedColumns, setSelectedColumns] = useState(headers);
  // Column visibility
  const [showColOpts, setShowColOpts] = useState<boolean>(false); // Column options
  const [showAllComp, setshowAllComp] = useState<boolean>(false); // Column options
  const [showFilterColOpts, setShowFilterColOpts] = useState<boolean>(false); // Column options
  // const [_internal, setInternal] = useState<typeof data>(data); // Data Mainpulation
  const [selectedRows, setSelectedRows] = useState<typeof data>([]); // Data Selection
  const [start, setStart] = useState<Date | null>(null); // Date Range Start
  const [end, setEnd] = useState<Date | null>(null); // Date Range End
  const [showDateCalendar, setShowDateCalendar] = useState<boolean>(false); // Show Date Calendar
  // const [showFilter, setShowFilter] = useState<boolean>(false); // Filtering
  // const [filterObj, setFilterObj] = useState<{ [key: string]: string[] }>(
  //   () => {
  //     if (props.filterKeys) {
  //       return props.filterKeys.reduce((a, b) => ({ ...a, [b]: [] }), {});
  //     }

  //     return { '': [] };
  //   }
  // );

  const [opened, setOpened] = useState(false);
  const [drawer, setDrawer] = useState(false);

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

  const { items, requestSort, sortConfig } = useSortableData(availableData, '');
  const getClassNamesFor = (name: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  getClassNamesFor('');

  // Pagination Controls // Rows per page
  const [currentItems, setCurrentItems] = useState<typeof data>([]); // Current list displayed
  const [page, setPage] = useState<number>(1); // Current page
  const [itemsOffset, setItemsOffset] = useState<number>(0); // offset from index

  useEffect(() => {
    const endOffset = itemsOffset + rows;
    setCurrentItems(availableData.slice(itemsOffset, endOffset));
    setPage(Math.ceil(availableData.length / rows));
  }, [itemsOffset, rows, availableData]);

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
    setAvailableData(
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
      setAvailableData(() => searchText(data, value));
    },
    [data]
  );

  const filterBySpecificTextSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setAvailableData(() => searchSpecificText(data, value));
    },
    [data]
  );
  const inputRef = useRef(null);

  const onButtonClick = () => {
    // @ts-ignore (us this comment if typescript raises an error)
    inputRef.current.value = '';
  };
  //  const clearFilterByTextSearch = useCallback(
  //    (e: React.ChangeEvent<HTMLInputElement>) => {
  //      const { value } = e.currentTarget;
  //      setAvailableData(() => searchText(data, ''));
  //    },
  //    [data]
  //  );

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
  // useDebouncedEffect(
  //   () => {
  //     if (props.withGlobalFilters && props.filterKeys) {
  //       setFilterObj(
  //         props.filterKeys.reduce((a, b) => ({ ...a, [b]: [] }), {})
  //       );
  //     }
  //   },
  //   [props.withGlobalFilters],
  //   100
  // );
  useEffect(() => {
    setAvailableData(data);
  }, [data]);

  // PDF EXPORT

  const printCurrent = useRef(null);
  const printSelected = useRef(null);
  const printAllData = useRef(null);
  // const printCurrentCsv = useRef(null);
  // const componentRef = useRef(null);
  // const AllComponentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printCurrent.current,
    documentTitle: 'cuddie_client_table',
  });
  const handlePrintAllData = useReactToPrint({
    content: () => printAllData.current,
    documentTitle: 'cuddie_client_table',
  });
  const handlePrintSelected = useReactToPrint({
    content: () => printSelected.current,
    documentTitle: 'cuddie_client_table',
  });

  // CSV EXPORT

  // const { onDownload } = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: 'Users table',
  //   sheet: 'Users',
  // });

  return (
    <section className='h-full relative space-y-5'>
      <div className='hidden'>
        {/* all data */}{' '}
        <table
          ref={printAllData}
          className='overflow-auto p-5 w-full mb-10 align-top'>
          <thead className='sticky top-0 text-left whitespace-nowrap bg-white z-[5]'>
            <tr className='child:px-3 border-b child:py-3 child:text-[#C1C0C2] child:cursor-default child:align-middle capitalize'>
              <th className='w-8'>S/N</th>
              {selectedColumns.map((column) => (
                <th
                  key={column.accessor}
                  className={`${column.hidden && 'hidden'}`}>
                  {column.cell
                    ? column.cell(column.name)
                    : column.name.toLowerCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexpurple-lighter child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
                <td className='py-4'>{index + 1}</td>

                {Object.keys(row).map((entry, index) => {
                  const header = headers.find((el) => el.accessor === entry);
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
              </tr>
            ))}
          </tbody>
        </table>
        {/* selected */}
        <table
          ref={printSelected}
          className='overflow-auto p-5 w-full mb-10 align-top'>
          <thead className='sticky top-0 text-left whitespace-nowrap bg-white z-[5]'>
            <tr className='child:px-3 border-b child:py-3 child:text-[#C1C0C2] child:cursor-default child:align-middle capitalize'>
              <th className='w-8'>S/N</th>
              {selectedColumns.map((column) => (
                <th
                  key={column.accessor}
                  className={`${column.hidden && 'hidden'}`}>
                  {column.cell
                    ? column.cell(column.name)
                    : column.name.toLowerCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'>
            {selectedRows.map((row, index) => (
              <tr
                key={index}
                className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexpurple-lighter child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
                <td className='py-4'>{index + 1}</td>

                {Object.keys(row).map((entry, index) => {
                  const header = headers.find((el) => el.accessor === entry);
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
              </tr>
            ))}
          </tbody>
        </table>
        {/* current */}
        <table
          ref={printCurrent}
          className='overflow-auto p-5 w-full mb-10 align-top'>
          <thead className='sticky top-0 text-left whitespace-nowrap bg-white z-[5]'>
            <tr className='child:px-3 border-b child:py-3 child:text-[#C1C0C2] child:cursor-default child:align-middle capitalize'>
              <th className='w-8'>S/N</th>
              {selectedColumns.map((column) => (
                <th
                  key={column.accessor}
                  className={`${column.hidden && 'hidden'}`}>
                  {column.cell
                    ? column.cell(column.name)
                    : column.name.toLowerCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'>
            {currentItems.map((row, index) => (
              <tr
                key={index}
                className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexpurple-lighter child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
                <td className='py-4'>{index + 1}</td>

                {Object.keys(row).map((entry, index) => {
                  const header = headers.find((el) => el.accessor === entry);
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Top Task Bar */}
      <div className='flex justify-between items-center  border-[#F3F3F3] dark:border-wdark-300 relative'>
        <h2 className='text-xl font-bold ml-3 capitalize'>{''}</h2>

        <div className='flex items-center space-x-5 relative text-base'></div>
      </div>
      <div className='flex items-center'>
        {/* SEARCH */}
        <div className='relative flex items-center w-72 2xl:w-96 '>
          <input
            type='text'
            placeholder={props.title}
            className='py-3 mx-2 w-full text-base rounded-lg px-10 pr-14 border focus:ring-1 outline-none  focus:ring-gray-100  hover:shadow bg-white'
            onChange={filterByTextSearch}
          />
          <span className='absolute left-4 text-2xl'>
            <SearchNormal size='20' color='#8f8e91' variant='Bulk' />
          </span>
        </div>

        {/* RIGHT SIDE ACTIONS */}

        <div className='text-gray-300 flex flex-1 items-center gap-2 relative justify-end'>
          {/* COLUMN VISIBILITY FILTER */}
          <div className='relative' onClick={(e) => e.stopPropagation()}>
            <button
              className={`h-full whitespace-nowrap bg-afexpurple-lighter gap-2 text-[14px] p-4 rounded-lg hover:shadow w-full hover:cursor-pointer text-afexpurple-regular font-semibold flex justify-center  items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
                showColOpts
                  ? ' border-afexpurple-regular  '
                  : ' border-transparent'
              }`}
              onClick={() => setShowColOpts((s) => !s)}>
              <RowHorizontal
                size='16'
                color='#7738DD'
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
                      ? 'bg-afexpurple-lighter'
                      : selectedColumns.findIndex(
                          (el) => el.accessor === header.accessor
                        ) >= 0 && header.static
                      ? ' bg-afexpurple-lighter cursor-not-allowed'
                      : undefined
                  }`}>
                  <input
                    className='checkbox'
                    type='checkbox'
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

          {/* FILTER ACTION */}

          <div className='' onClick={(e) => e.stopPropagation()}>
            <button
              className={`h-full whitespace-nowrap bg-afexpurple-lighter gap-2 text-[14px] p-4 rounded-lg hover:shadow w-full hover:cursor-pointer text-afexpurple-regular font-semibold flex justify-center  items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
                showAllComp
                  ? ' border-afexpurple-regular  '
                  : ' border-transparent'
              }`}
              onClick={() => setshowAllComp((s) => !s)}>
              <Filter
                size='16'
                color='#7738DD'
                variant='Bulk'
                className='shrink-0 '
              />
              {'FILTERS'}
            </button>
            {/* ALL COMPONENTS TO BE DISPLAYED */}
            <div
              className={`flex gap-2  w-[340px] bg-white px-4 py-2 flex-col absolute top-[100%] right-[30%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0  dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                showAllComp && 'max-h-[450px] opacity-100 overflow-scroll'
              }`}>
              {/* COLUMNS HEADER */}
              <div className='relative' onClick={(e) => e.stopPropagation()}>
                <button
                  className={`h-full w-full whitespace-nowrap  gap-2 text-base p-4 rounded-lg hover:shadow  hover:cursor-pointer font-semibold flex justify-between items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
                    showFilterColOpts
                      ? ' border-[#DAD9DA]'
                      : '  border-[#DAD9DA]'
                  }`}
                  onClick={() => setShowFilterColOpts((s) => !s)}>
                  {'SELECT COLUMNS'}
                  <ArrowDown2
                    size='16'
                    color='#7738DD'
                    variant='Bulk'
                    className='shrink-0 '
                  />
                </button>
                <ul
                  className={`flex gap-1 w-full px-1 py-2 flex-col absolute bg-white top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                    showFilterColOpts && 'max-h-[300px] opacity-100 '
                  }`}>
                  {headerFilter.map((header) => (
                    <label
                      key={header.name}
                      htmlFor={header.name}
                      className='flex items-center gap-1 whitespace-nowrap  text-gray-900 text-base cursor-pointer m-1 rounded-md py-2 px-4 capitalize'>
                      <input
                        type='checkbox'
                        className='checkbox'
                        name={header.name}
                        id={header.name}
                      />
                      {header.name}{' '}
                    </label>
                  ))}
                </ul>
              </div>

              {/* SEARCH SECTION */}
              <div className='w-full'>
                <div className='w-full'>
                  <input
                    type='text'
                    placeholder='Input Query Value'
                    className='py-3  w-full text-base rounded-lg px-10 pr-14 border focus:ring-1 outline-none  focus:ring-[#DAD9DA]  hover:shadow bg-white'
                    onChange={filterBySpecificTextSearch}
                    ref={inputRef}
                  />
                </div>
                {/* BUTTONS */}
                <div className='flex justify-end gap-2 py-5 w-full'>
                  <span
                    onClick={() => {
                      setAvailableData(data);
                      onButtonClick();
                    }}
                    className='p-3 rounded-lg text-center w-[80px] bg-textgrey-light text-textgrey-darker'>
                    Clear
                  </span>
                  <span
                    onClick={() => setshowAllComp((s) => !s)}
                    className='p-3 rounded-lg text-center w-[80px] bg-afexpurple cursor-pointer text-white '>
                    Add
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* {props.withGlobalFilters && (
            <button
              className='flex bg-afexpurple-lighter font-semibold justify-between items-center rounded-lg py-4 px-4 text-sm  gap-2 border-[1px] border-none  text-afexpurple-regular  hover:shadow p-2  hover:text-afex-regular'
              onClick={() => setShowFilter(true)}>
              <Filter size={18} variant='Bold' />
              {t('FIlTER')}
            </button>
          )} */}

          {/* EXPORT ACTIONS */}
          <Popover
            opened={opened}
            onChange={setOpened}
            width={100}
            position={'bottom-end'}>
            <Popover.Target>
              <button
                className='py-6 px-3 flex font-semibold gap-2 border items-center rounded-lg text-afexpurple-regular text-sm xl:text-[14px] bg-afexpurple-lighter xl:h-[40px] w-[100px]'
                onClick={() => {
                  setOpened((o) => !o);
                }}>
                <ExportSquare size='18' color='#7738DD' variant='Bulk' />
                <span>EXPORT</span>
              </button>
            </Popover.Target>

            <Popover.Dropdown>
              {/* PDF POPOVER */}
              <Popover
                opened={drawer}
                onChange={setDrawer}
                width={140}
                position='left-start'>
                <Popover.Target>
                  <button
                    className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexpurple-lighter  rounded-lg py-4 px-2 font-normal text-[14px] text-left'
                    onClick={() => {
                      setDrawer((o) => !o);
                    }}>
                    PDF
                  </button>
                </Popover.Target>

                <Popover.Dropdown>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      handlePrintAllData();
                    }}>
                    Export All
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      handlePrintSelected();
                    }}>
                    Export Selected
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      handlePrint();
                    }}>
                    Export Page{' '}
                  </span>
                </Popover.Dropdown>

                {/* <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexpurple-lighter rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
                  PDF
                </button> */}
              </Popover>

              <DownloadTableExcel
                filename='users table'
                sheet='users'
                currentTableRef={printCurrent.current}>
                <button className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexpurple-lighter rounded-lg py-4 px-2 font-normal text-[14px] text-left'>
                  {' '}
                  CSV
                  {/* <CSVLink
                  filename={'TableContent.csv'}
                  data={data}
                  className='btn btn-primary'>
                  Download csv
                </CSVLink> */}
                </button>
              </DownloadTableExcel>
            </Popover.Dropdown>
          </Popover>

          {/* DATE FILTER ACTION */}
          {dateFilter.enabled && (
            <button
              className='flex gap-6 items-center py-3 mx-2 text-base rounded-xl px-4 focus:outline-none focus:border-afexgreen hover:shadow bg-afexpurple-lighter cursor-pointer'
              onClick={() => setShowDateCalendar((s) => !s)}>
              {/* <span className='capitalize whitespace-nowrap'>
                {dateFilter.label}{' '}
              </span> */}
              <span>
                <Calendar color='#7738DD' variant='Bulk' />
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
            <style type='text/css'>
              {`
          @media print {
            .table {
              font-size: 16px;
              width: 100%;
            }
            th, td {
              border: 1px solid grey;
              padding: 8px;
            }
            th {
              
              
            }
          }
        `}
            </style>
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
                      {
                        <span
                          className='#C1C0C2'
                          onClick={() => requestSort(`${column.accessor}`)}>
                          {' '}
                          &uarr;&darr;
                        </span>
                      }
                    </th>
                  ))}
                  {props.withActions && <th>{'action'}</th>}
                </tr>
              </thead>
              <tbody className='bg-white'>
                {currentItems.map((row: any, index) => (
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
                    className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexpurple-lighter child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
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
                    <td className='py-4'>{index + 1}</td>

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
                          onClick={
                            props.withRowNavigation && props.navigationProps
                              ? () =>
                                  navigate(
                                    `/${props.navigationProps?.baseRoute}/${
                                      row[props.navigationProps?.accessor!]
                                    }`
                                  )
                              : undefined
                          }
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
            dataLength={availableData.length}
            itemsOffset={itemsOffset}
            setItemsOffset={setItemsOffset}
            page={page}
            perPage={rows}
          />
        </div>
      </div>

      {/* {props.withGlobalFilters && props.filterKeys && (
        <GenericFilter
          close={() => setShowFilter(false)}
          filterObj={filterObj}
          setFilterObj={setFilterObj}
          data={props.filterKeys.map((key) => ({
            [key]: [...new Set(data.map((el) => el[key]))],
          }))}
          show={showFilter}
        />
      )} */}
    </section>
  );
};

export default DataGrid;
