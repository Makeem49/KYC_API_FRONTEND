import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div
      className={`absolute top-[4.5rem] z-10 drop-shadow-2xl ${classes} right-2 capitalize`}
      onClick={(e) => e.stopPropagation()}>
      <OpacityContainer>
        <div className='flex justify-between bg-[#F7F8F9] dark:bg-wdark-500 p-4 rounded-2xl z-20 w-fit'>
          <ul className='space-y-2 text-gray-500 mr-10 text-base child:whitespace-nowrap '>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now()));
                setEndDate(new Date(Date.now()));
              }}
              className='p-2 hover:bg-afexpurple-lighter hover:text-afexgreen rounded-2xl transition cursor-pointer'>
              {t('today')}
            </li>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now() - 24 * 60 * 60 * 1000)); // 24 hours ago in milliseconds
                setEndDate(new Date());
              }}
              className='p-2 hover:bg-afexpurple-lighter hover:text-afexgreen rounded-2xl transition cursor-pointer'>
              {t('yesterday')}
            </li>
            <li
              onClick={() => {
                setStartDate(new Date(Date.now() - 24 * 7 * 60 * 60 * 1000)); // 7 days ago in milliseconds
                setEndDate(new Date());
              }}
              className='p-2 hover:bg-afexpurple-lighter hover:text-afexgreen rounded-2xl transition cursor-pointer'>
              {t('last 7 days')}
            </li>
            <li
              onClick={() => {
                const date = new Date(Date.now()); // Get current time in milliseconds

                setStartDate(
                  new Date(date.getFullYear(), date.getMonth() - 1, 1) // Get the year and month of the current day and subtract 1 from the month (0 - 11)
                );
                setEndDate(new Date(Date.now())); // Setting the current day of month as 0 corresponds to the last day of the last month
              }}
              className='p-2 hover:bg-afexpurple-lighter hover:text-afexgreen rounded-2xl transition cursor-pointer'>
              {t('last month')}
            </li>
            <li
              className='p-2 hover:bg-afexpurple-lighter hover:text-afexgreen rounded-2xl transition cursor-pointer'
              onClick={() => {
                setStartDate(null);
                setEndDate(null);
                resetFunc && resetFunc();
              }}>
              {t('reset')}
            </li>
          </ul>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <div>
                <p className='text-center mb-4 text-gray-400'>{t('start')}</p>
                <div className='bg-white dark:bg-wdark-400 rounded-2xl p-4 py-6 '>
                  <Calendar value={startDate} onChange={setStartDate} />
                </div>
              </div>
              <div>
                <p className='text-center mb-4 text-gray-400'>{t('end')}</p>
                <div className='bg-white dark:bg-wdark-400 rounded-2xl p-4 py-6 '>
                  <Calendar value={endDate} onChange={setEndDate} />
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-5'>
              <button
                type='button'
                className='px-8 py-3 text-gray-900 dark:bg-wdark-50 dark:rounded capitalize'
                onClick={close}>
                {t('cancel')}
              </button>
              <button
                type='button'
                className='px-8 py-3 bg-afexpurple dark:bg-wdark-300 text-white rounded capitalize'
                onClick={() => {
                  if (filterFunc) {
                    filterFunc();
                    close();
                  }
                  close();
                }}>
                {t('done')}
              </button>
            </div>
          </div>
        </div>
      </OpacityContainer>
    </div>
  );
};

export default DateRanges;
