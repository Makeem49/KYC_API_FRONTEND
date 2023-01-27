import React from 'react';

import { Calendar } from '@mantine/dates';

import { OpacityContainer } from '../../transitions';

export interface DateRangesInterface {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (value: Date | null) => void;
  setEndDate: (value: Date | null) => void;
  close: () => void;
  filterFunc?: () => void;
  resetFunc?: () => void;
  classes?: string;
}

const DateRanges = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  close,
  filterFunc,
  resetFunc,
  classes = 'right-0 ',
}: DateRangesInterface) => {
  return (
    <div
      className={`absolute top-[5.5rem] z-10 drop-shadow-2xl ${classes} right-[0%]`}
      onClick={(e) => e.stopPropagation()}>
      <OpacityContainer>
        <div className='flex justify-between bg-[#F7F8F9] dark:bg-wdark-500 p-4 rounded-2xl z-20 w-fit'>
          <ul className='space-y-2 text-gray-500 mr-10 text-base child:whitespace-nowrap '>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now()));
                setEndDate(new Date(Date.now()));
              }}
              className='p-2 hover:bg-afexred-lighter hover:text-[#E1261C] rounded-2xl transition cursor-pointer'>
              Today
            </li>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now() - 24 * 60 * 60 * 1000)); // 24 hours ago in milliseconds
                setEndDate(new Date());
              }}
              className='p-2 hover:bg-afexred-lighter hover:text-[#E1261C] rounded-2xl transition cursor-pointer'>
              Yesterday
            </li>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now() - 24 * 7 * 60 * 60 * 1000)); // 7 days ago in milliseconds
                setEndDate(new Date());
              }}
              className='p-2 hover:bg-afexred-lighter hover:text-[#E1261C] rounded-2xl transition cursor-pointer'>
              Last 7 Days
            </li>
            <li
              onClick={() => {
                const date = new Date(Date.now()); // Get current time in milliseconds

                setStartDate(
                  new Date(date.getFullYear(), date.getMonth() - 1, 1) // Get the year and month of the current day and subtract 1 from the month (0 - 11)
                );
                setEndDate(new Date(Date.now())); // Setting the current day of month as 0 corresponds to the last day of the last month
              }}
              className='p-2 hover:bg-afexred-lighter hover:text-[#E1261C] rounded-2xl transition cursor-pointer'>
              Last Month
            </li>
            <li
              className='p-2 hover:bg-afexred-lighter hover:text-[#E1261C] rounded-2xl transition cursor-pointer'
              onClick={() => {
                setStartDate(null);
                setEndDate(null);
                resetFunc && resetFunc();
              }}>
              Reset
            </li>
          </ul>
          <div className='flex gap-5'>
            <div>
              <p className='text-center mb-4 text-gray-400'>Start</p>
              <div className='bg-white dark:bg-wdark-400 rounded-2xl p-4 py-6 '>
                <Calendar value={startDate} onChange={setStartDate} />
                <div className='flex justify-between mt-3'>
                  <button
                    type='button'
                    className='px-8 py-3 text-gray-900 dark:bg-wdark-50 dark:rounded'
                    onClick={close}>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-8 py-3 bg-[#E1261C] text-white rounded'
                    onClick={filterFunc}>
                    Done
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className='text-center mb-4 text-gray-400'>End</p>
              <div className='bg-white dark:bg-wdark-400 rounded-2xl p-4 py-6 '>
                <Calendar value={endDate} onChange={setEndDate} />
                <div className='flex justify-between mt-3'>
                  <button
                    type='button'
                    className='px-8 py-3 text-gray-900 dark:bg-wdark-50 dark:rounded'
                    onClick={close}>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-8 py-3 bg-[#E1261C] text-white rounded'
                    onClick={filterFunc}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OpacityContainer>
    </div>
  );
};

export default DateRanges;
