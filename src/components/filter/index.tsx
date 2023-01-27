import React, { useState } from 'react';
import { Drawer } from '@mantine/core';
import { GrClose } from 'react-icons/gr';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { ArrowDown2, Filter } from 'iconsax-react';

import {
  capitalizeWords,
  // deepSearchWithinArray
} from '../../utils';

interface DataInterface {
  [key: string]: any;
}

interface FilterInterface {
  filterObj: { [key: string]: string[] };
  setFilterObj: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
  show: boolean;
  close: () => void;
  data: DataInterface[];
}

interface DropdownStateInterface {
  [key: string]: boolean;
}

const GenericFilter = ({
  close,
  data,
  filterObj,
  setFilterObj,
  show,
}: FilterInterface) => {
  const intial_dropdown_state: DropdownStateInterface = {};
  const [filterData] = useState([...data]);

  const clone = [...data];

  clone.reduce((o, key) => {
    for (const el in key) {
      intial_dropdown_state[el] = false;
    }
    return o;
  }, {});

  const [dropdown, setDropdown] = useState(intial_dropdown_state);

  const toggle_links = (key: string) =>
    setDropdown((prev) => ({ ...intial_dropdown_state, [key]: !prev[key] }));

  const is_checked = (key: string, value: any) => {
    return filterObj[key].includes(value) ? true : false;
  };

  const populateFilter = (key: string, value: string, checked: boolean) => {
    if (!checked) {
      return setFilterObj((prev: any) => ({
        ...prev,
        [key]: prev[key].filter((el: string) => el !== value),
      }));
    }
    return setFilterObj((prev: any) => ({
      ...prev,
      [key]: [...prev[key], value],
    }));
  };
  return (
    <Drawer
      position='right'
      opened={show}
      onClose={close}
      padding='xl'
      size='lg'
      className='rounded-tl-[84px] p-0'
      withCloseButton={false}
      styles={{
        drawer: {
          overflowY: 'scroll',
          overflowX: 'hidden',
        },
      }}>
      <div className='flex justify-between items-center border-b border-b-gray-300 dark:border-wdark-300 px-10 pt-20 pb-10 w-full sticky top-0 bg-white dark:bg-wdark-500'>
        <div className='flex gap-3 items-center'>
          <Filter variant='Bold' size={24} />
          <p className='text-2xl'>Filter</p>
        </div>
        <button onClick={close}>
          <GrClose className='text-2xl dark:child:!stroke-wdark-50 ' />
        </button>
      </div>

      {/* Popups */}
      <div className='px-10 pt-3 grid grid-cols-2 md:grid-cols-3 gap-3'>
        {Object.entries(filterObj).map((el) => {
          return el[1].map((a: string, index: number) => (
            <span
              className='rounded-xl flex items-center justify-between p-2 lowercase  bg-gray-100 border dark:bg-wdark-400 border-textgrey-light text-textgrey-light dark:text-wdark:300  '
              key={index}>
              <small className='max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap'>
                {a}
              </small>
              <FaTimes
                className='cursor-pointer font-light p-1 text-xl'
                onClick={() => populateFilter(el[0], a, false)}
              />
            </span>
          ));
        })}
      </div>

      {/* Check rows */}
      <div className='my-6 cursor-default'>
        <div className='flex flex-col space-y-8'>
          {filterData.map((category, index) => {
            return (
              <div
                className=' w-full border-b border-b-gray-300 dark:border-wdark-300 py-3 text-[#151615] text-[16px] px-12'
                key={index}>
                <div
                  className='flex justify-between items-center dark:text-wdark-50'
                  onClick={() =>
                    toggle_links(Object.keys(category)[0].toLowerCase())
                  }>
                  <span
                    className={`transition text-base  ${
                      dropdown[Object.keys(category)[0]] && 'text-afexgreen'
                    }`}>
                    {capitalizeWords(Object.keys(category)[0])}
                  </span>
                  <ArrowDown2
                    size={16}
                    className={`transiton duration-300 ${
                      dropdown[Object.keys(category)[0]] && 'rotate-180'
                    }`}
                  />
                </div>
                <ul
                  className={`max-h-0 overflow-auto transition[max-height] duration-300 space-y-6 mt-4 ${
                    dropdown[Object.keys(category)[0]]
                      ? 'max-h-80  py-3'
                      : undefined
                  }  `}>
                  {Object.values(filterData[index])[1] === true && (
                    <div className='sticky -top-3 left-0 flex items-center w-full bg-white z-[2] '>
                      <input
                        type='text'
                        className='block w-full py-3 border bg-gray-50 text-[#9fa19c] text-base rounded-lg px-3 pr-10 focus:outline-none appearance-none'
                        placeholder='Search...'
                        id={Object.keys(category)[0]}
                        // onChange={(e) => {
                        //   const { value } = e.target;
                        //   setFilterData(
                        //     deepSearchWithinArray(
                        //       data.slice(),
                        //       Object.keys(category)[0].toLowerCase(),
                        //       value
                        //     )
                        //   );
                        // }}
                      />
                      <FaSearch className='absolute right-4 text-xl text-gray-300' />
                    </div>
                  )}
                  {Object.values(filterData[index])[0].map(
                    (row: string, rIndex: number) => {
                      return (
                        <li
                          className='flex items-center text-gray-500 text-base overflow-hidden text-ellipsis whitespace-nowrap'
                          key={rIndex}>
                          <input
                            type='checkbox'
                            className='checkbox'
                            id={row + rIndex}
                            name={row}
                            value={row}
                            checked={is_checked(Object.keys(category)[0], row)}
                            onChange={(e) =>
                              populateFilter(
                                Object.keys(category)[0],
                                row,
                                e.target.checked
                              )
                            }
                          />
                          <label htmlFor={row + rIndex} className='ml-3'>
                            {Object.keys(category)[0] !== 'commodity'
                              ? capitalizeWords(row)
                              : row.toUpperCase()}
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default GenericFilter;
