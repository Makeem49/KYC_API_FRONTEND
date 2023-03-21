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
  exportToCSV,
  get_nested_value,
} from '../../utils/functions';

import { DateRanges, Pagination } from '..';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@mantine/core';

import { t } from 'i18next';

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

  const [openPdf, setOpenPdf] = useState(false);
  const [openCsv, setOpenCsv] = useState(false);

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

    setSelectedColumns((prev) =>
      prev.map((el) => {
        if (el.accessor === header.accessor) {
          return {
            ...el,
            hidden: !el.hidden,
          };
        }
        return el;
      })
    );
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

  return (
    <section className='h-full relative space-y-5'>
      <div className='hidden'>
        {/* all data */}{' '}
        <table
          ref={printAllData}
          className='overflow-auto p-5 w-full mb-10 align-top'>
          <thead className='sticky top-0 text-left whitespace-nowrap bg-white z-[5]'>
            <tr className='child:px-3 border-b child:py-3 child:text-[#F5F5F5] child:cursor-default child:align-middle capitalize'>
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
                        ? header?.row(data, secondary_data)
                        : data?.length > 0
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
            <tr className='child:px-3 border-b child:py-3 child:text-[#F5F5F5] child:cursor-default child:align-middle capitalize'>
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
                        ? header?.row(data, secondary_data)
                        : data?.length > 0
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
            <tr className='child:px-3 border-b child:py-3 child:text-[#F5F5F5] child:cursor-default child:align-middle capitalize'>
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
            {currentItems?.map((row, index) => (
              <tr
                key={index}
                className={`child:py-2 child:px-2 child:space-y-2 hover:bg-afexpurple-lighter child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100  cursor-default`}>
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
                        ? header?.row(data, secondary_data)
                        : data?.length > 0
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
            className='py-3 mx-2 w-full text-base rounded-lg px-10 pr-14 border focus:ring-1 outline-none  focus:ring-gray-100 dark:ring-afexdark-dark  hover:shadow bg-white dark:bg-afexdark-darkest '
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
              className={`h-full whitespace-nowrap bg-afexpurple-lighter dark:bg-afexdark-verydark  gap-2 text-[14px] p-4 rounded-lg hover:shadow w-full hover:cursor-pointer text-afexpurple-regular font-semibold flex justify-center  items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
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
              {t('COLUMNS')}
            </button>
            <ul
              className={`flex gap-2 w-[200px] px-1 py-2 flex-col absolute top-[110%] ring-1 ring-white shadow-md dark:ring-afexdark-verydark  rounded-xl opacity-0 bg-white dark:bg-afexdark-darkest  z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                showColOpts && 'max-h-[300px] opacity-100 overflow-scroll'
              }`}>
              {headers.map((header) => (
                <label
                  key={header.name}
                  htmlFor={header.name}
                  className={`flex items-center gap-1 whitespace-nowrap  text-gray-900  dark:text-afexdark-dark text-base cursor-pointer m-1 rounded-md py-4 px-4 capitalize ${
                    selectedColumns.findIndex(
                      (el) => el.name === header.name && !el.hidden
                    ) >= 0 && !header.static
                      ? 'bg-afexpurple-lighter dark:bg-afexdark-verydark'
                      : selectedColumns.findIndex(
                          (el) => el.name === header.name
                        ) >= 0 && header.static
                      ? ' bg-afexpurple-lighter dark:bg-afexdark-verydark  cursor-not-allowed'
                      : undefined
                  }`}>
                  <input
                    className='checkbox'
                    type='checkbox'
                    name={header.name}
                    id={header.name}
                    disabled={header.static}
                    checked={
                      selectedColumns.findIndex(
                        (el) => el.name === header.name && !el.hidden
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
              className={`h-full whitespace-nowrap bg-afexpurple-lighter dark:bg-afexdark-verydark gap-2 text-[14px] p-4 rounded-lg hover:shadow w-full hover:cursor-pointer text-afexpurple-regular font-semibold flex justify-center  items-center border dark:bg-wdark-400 dark:border-0 capitalize ${
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
              {t('FILTERS')}
            </button>
            {/* ALL COMPONENTS TO BE DISPLAYED */}
            <div
              className={`flex gap-2  w-[340px] bg-white  dark:bg-afexdark-darkest px-4 py-2 flex-col absolute top-[100%] right-[30%] ring-1 ring-white shadow-md dark:ring-afexdark-dark rounded-xl opacity-0  dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                showAllComp && 'max-h-[450px] opacity-100 overflow-scroll'
              }`}>
              {/* COLUMNS HEADER */}
              <div className='relative' onClick={(e) => e.stopPropagation()}>
                <button
                  className={`h-full w-full whitespace-nowrap gap-2 text-base p-4 rounded-lg hover:shadow hover:cursor-pointer font-semibold flex justify-between items-center border dark:bg-afexdark-verydark dark:border-0 capitalize ${
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
                  className={`flex gap-1 w-full px-1 py-2 flex-col absolute  dark:bg-afexdark-darkest bg-white top-[110%] ring-1 ring-white shadow-md dark:ring-wdark-500 rounded-xl opacity-0 dark:bg-wdark-300 z-10 max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                    showFilterColOpts && 'max-h-[300px] opacity-100 '
                  }`}>
                  {headerFilter.map((header) => (
                    <label
                      key={header.name}
                      htmlFor={header.name}
                      className='flex items-center gap-1 whitespace-nowrap  text-gray-900  dark:text-afexdark-dark text-base cursor-pointer m-1 rounded-md py-2 px-4 capitalize'>
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
                    className='py-3  w-full text-base rounded-lg px-10 pr-14 border focus:ring-1 outline-none  focus:ring-[#DAD9DA]  dark:border-afexdark-dark  hover:shadow bg-white dark:bg-afexdark-darkest '
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
                      setshowAllComp((s) => !s);
                    }}
                    className='p-3 rounded-lg text-center w-[80px] bg-textgrey-light  dark:bg-afexdark-verydark text-textgrey-darker  dark:text-afexdark-dark'>
                    {t('Clear')}
                  </span>
                  <span
                    onClick={() => setshowAllComp((s) => !s)}
                    className='p-3 rounded-lg text-center w-[80px] bg-afexpurple cursor-pointer text-white '>
                    {t('Add')}
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
                className='py-6 px-3 flex font-semibold gap-2 items-center rounded-lg text-afexpurple-regular text-sm xl:text-[14px] bg-afexpurple-lighter  dark:bg-afexdark-verydark xl:h-[40px] w-[100px]'
                onClick={() => {
                  setOpened((o) => !o);
                }}>
                <ExportSquare size='18' color='#7738DD' variant='Bulk' />
                <span>{t('EXPORT')}</span>
              </button>
            </Popover.Target>

            <Popover.Dropdown>
              {/* PDF POPOVER */}
              <Popover
                opened={openPdf}
                onChange={setOpenPdf}
                width={140}
                position='left-start'>
                <Popover.Target>
                  <button
                    className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexpurple-lighter  rounded-lg py-4 px-2 font-normal text-[14px] text-left'
                    onClick={() => {
                      setOpenPdf((o) => !o);
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
                    {t('Export All')}
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      handlePrintSelected();
                    }}>
                    {t('Export Selected')}
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      handlePrint();
                    }}>
                    {t('Export Page')}
                  </span>
                </Popover.Dropdown>
              </Popover>
              {/* CSV POPOVER */}
              <Popover
                opened={openCsv}
                onChange={setOpenCsv}
                width={140}
                position='left-start'>
                <Popover.Target>
                  <button
                    className=' flex items-center gap-1 cursor-pointer text-textgrey-dark hover:bg-afexpurple-lighter rounded-lg py-4 px-2 font-normal text-[14px] text-left'
                    onClick={() => {
                      setOpenCsv((o) => !o);
                    }}>
                    {' '}
                    CSV
                  </button>
                </Popover.Target>

                <Popover.Dropdown>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      exportToCSV(
                        data,
                        selectedColumns
                          .filter((el) => el.hidden)
                          .map((el) => el.accessor)
                      );
                    }}>
                    {t('Export All')}
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      exportToCSV(
                        selectedRows,
                        selectedColumns
                          .filter((el) => el.hidden)
                          .map((el) => el.accessor)
                      );
                    }}>
                    {t('Export Selected')}
                  </span>
                  <span
                    className='text-[12px] cursor-pointer p-2 hover:bg-afexpurple-lighter rounded text-textgrey-dark'
                    onClick={() => {
                      exportToCSV(
                        currentItems,
                        selectedColumns
                          .filter((el) => el.hidden)
                          .map((el) => el.accessor)
                      );
                    }}>
                    {t('Export Page')}
                  </span>
                </Popover.Dropdown>
              </Popover>
            </Popover.Dropdown>
          </Popover>

          {/* DATE FILTER ACTION */}
          {dateFilter.enabled && (
            <button
              className='flex gap-6 items-center py-3 mx-2 text-base rounded-xl px-4 focus:outline-none focus:border-afexgreen hover:shadow bg-afexpurple-lighter  dark:bg-afexdark-verydark cursor-pointer'
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
          <style type='text/css'>
            {`
          @media print {
            .table {
              font-size: 16px;
              width: 100%;
            }
             td {
             
            }
            th {
              background-color: #E1261C;
            
              
            }
          }
        `}
          </style>
          <div className='h-full table-auto overflow-auto w-full my-3'>
            <table className='overflow-auto p-5 w-full mb-10 align-top'>
              <thead className='sticky top-0 text-left whitespace-nowrap bg-white dark:bg-afexdark-darkest  z-[5]'>
                <tr className='child:px-3 border-b dark:border-afexdark-dark child:py-3 child:text-[#C1C0C2] child:cursor-default child:align-middle capitalize'>
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
              <tbody className='bg-white dark:bg-afexdark-darkest '>
                {currentItems?.map((row: any, index) => (
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
                    className={`child:py-6 child:px-3 child:space-y-2 hover:bg-afexpurple-lighter  dark:hover:bg-afexdark-darker dark:bg-afexdark-darkest child:text-ellipsis child:overflow-hidden border-solid border-b border-gray-100 dark:border-afexdark-dark cursor-default`}>
                    {props.withCheck && (
                      <td onClick={(e) => e.stopPropagation()}>
                        <input
                          type='checkbox'
                          className='checkbox dark:darkcheckbox'
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

                    {/* {Object.keys(row).map((entry, index) => {
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
                            ? header?.row(data, secondary_data)
                            : data?.length > 0
                            ? data
                            : '--------'}
                        </td>
                      );
                    })} */}

                    {headers
                      .sort((a, b) => {
                        const headerKeys = headers.map((header) => header.name);
                        return (
                          headerKeys.indexOf(a.name) -
                          headerKeys.indexOf(b.name)
                        );
                      })
                      .map((_, i) => {
                        const header = selectedColumns[i];
                        const secondary_data = header?.secondary_key
                          ? get_nested_value(row, header?.secondary_key)
                          : '';
                        const data =
                          get_nested_value(row, header?.accessor) ?? '--------';
                        return (
                          <React.Fragment key={i}>
                            {header && !header.hidden && (
                              <td
                                key={i}
                                className={`text-${
                                  header?.rowAlign
                                } capitalize min-w-[6rem] ${
                                  selectedColumns.findIndex(
                                    (el) => el.accessor === header?.accessor
                                  ) >= 0
                                    ? 'visible'
                                    : 'hidden'
                                }`}>
                                {header?.row
                                  ? header.row(data, secondary_data, index)
                                  : data}
                              </td>
                            )}
                          </React.Fragment>
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
