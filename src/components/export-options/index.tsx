import React, { useState } from 'react';

import { ArrowDown2 } from 'iconsax-react';

export default function ExportOptions({
  text = 'Export Options',
}: {
  text?: string;
}) {
  const [exportOptionsClicked, setExportOptionsClicked] = useState(false);
  return (
    <div className='relative z-10 '>
      <button
        className={`rounded-lg text-sm gap-3 flex items-center active:drop-shadow svg-box1 cursor-pointer transition-all duration-300 border border-afexgreen px-4 py-2  hover:bg-afexgreen hover:text-white  ${
          exportOptionsClicked ? 'bg-afexgreen text-white ' : 'text-afexgreen '
        }`}
        onClick={() => setExportOptionsClicked((s) => !s)}>
        {text}
        <ArrowDown2
          size='12'
          color={exportOptionsClicked ? '#fff ' : '#38CB89 '}
          variant='Outline'
          className={`transition-all duration-300  ${
            exportOptionsClicked ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <ul
        className={`child:px-2 child:py-3 child:text-textgrey-light child-hover:text-textgrey dark:child-hover:text-wdark-50 absolute w-full border bg-bggrey dark:bg-wdark-400 border-afexgreen-light py-2 rounded-lg mt-1 ${
          exportOptionsClicked ? 'block' : 'hidden'
        } `}>
        <li>
          <button
            onClick={() => setExportOptionsClicked(false)}
            className='w-full text-start flex '>
            <svg
              width='14'
              height='15'
              viewBox='0 0 14 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#9FA19C'
                d='M11.0698 0H2.21918C0.993763 0 0 0.993489 0 2.21918V12.15C0 13.3754 0.993763 14.3691 2.21918 14.3691H11.0698C12.2953 14.3691 13.289 13.3754 13.289 12.15V2.21918C13.289 0.993625 12.2955 0.000136736 11.0698 0.000136736V0ZM3.12316 6.98763L4.05868 5.94927C4.15274 5.84466 4.3136 5.8365 4.41822 5.9303L5.44177 6.85175C5.54638 6.94581 5.63082 6.908 5.63082 6.76772V1.81413C5.63082 1.67357 5.74492 1.55934 5.88561 1.55934H7.40483C7.54525 1.55934 7.65934 1.67331 7.65934 1.81413V6.65998C7.65934 6.8008 7.73563 6.83006 7.82956 6.72545L8.74982 5.70377C8.84361 5.59903 9.00474 5.59061 9.10909 5.6848L10.1476 6.61991C10.2523 6.71396 10.2606 6.87482 10.1667 6.97958L8.11425 9.25834L7.00895 10.4861C6.91516 10.5904 6.75363 10.5987 6.64927 10.5048L5.42132 9.3996L3.14215 7.34757C3.03767 7.25324 3.02925 7.09225 3.12318 6.98775L3.12316 6.98763ZM10.015 12.8059H3.274C2.81294 12.8059 2.43924 12.4322 2.43924 11.9714C2.43924 11.5106 2.81294 11.1369 3.274 11.1369H10.0147C10.4755 11.1369 10.8494 11.5106 10.8494 11.9714C10.8493 12.4322 10.4756 12.8059 10.0148 12.8059H10.015Z'
              />
            </svg>
            <span className='pl-2'> Export CSV</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setExportOptionsClicked(false);
              console.log('here');
            }}
            className='w-full text-start flex svg-box2'>
            <svg
              width='14'
              height='15'
              viewBox='0 0 14 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#9FA19C'
                d='M11.0698 0H2.21918C0.993763 0 0 0.993489 0 2.21918V12.15C0 13.3754 0.993763 14.3691 2.21918 14.3691H11.0698C12.2953 14.3691 13.289 13.3754 13.289 12.15V2.21918C13.289 0.993625 12.2955 0.000136736 11.0698 0.000136736V0ZM3.12316 6.98763L4.05868 5.94927C4.15274 5.84466 4.3136 5.8365 4.41822 5.9303L5.44177 6.85175C5.54638 6.94581 5.63082 6.908 5.63082 6.76772V1.81413C5.63082 1.67357 5.74492 1.55934 5.88561 1.55934H7.40483C7.54525 1.55934 7.65934 1.67331 7.65934 1.81413V6.65998C7.65934 6.8008 7.73563 6.83006 7.82956 6.72545L8.74982 5.70377C8.84361 5.59903 9.00474 5.59061 9.10909 5.6848L10.1476 6.61991C10.2523 6.71396 10.2606 6.87482 10.1667 6.97958L8.11425 9.25834L7.00895 10.4861C6.91516 10.5904 6.75363 10.5987 6.64927 10.5048L5.42132 9.3996L3.14215 7.34757C3.03767 7.25324 3.02925 7.09225 3.12318 6.98775L3.12316 6.98763ZM10.015 12.8059H3.274C2.81294 12.8059 2.43924 12.4322 2.43924 11.9714C2.43924 11.5106 2.81294 11.1369 3.274 11.1369H10.0147C10.4755 11.1369 10.8494 11.5106 10.8494 11.9714C10.8493 12.4322 10.4756 12.8059 10.0148 12.8059H10.015Z'
              />
            </svg>
            <span className='pl-2'> Export Excel</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

