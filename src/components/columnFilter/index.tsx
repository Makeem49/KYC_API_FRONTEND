import React, {
  // HTMLInputTypeAttribute,
  useEffect,
  // useRef,
  useState,
} from 'react';
import { RowHorizontal } from 'iconsax-react';

import { useColumnCtx } from '../../context/column_context';

export interface ColumnFilterprop {
  name: string;
  selectedColumns: string[];
  columnOptions: {
    value: string;
    label?: string;
    disabled?: boolean;
  }[];
  className?: string;
}

export default function ColumnFilter({
  columnOptions,
  selectedColumns,
  className,
  name,
}: ColumnFilterprop) {
  const { settingColumns } = useColumnCtx();
  const [options, setOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const closeFn = () => setOptions(false);
    setSelected(selectedColumns);
    document.addEventListener('click', closeFn, false);

    return () => document.removeEventListener('click', closeFn, false);
  }, [selectedColumns]);

  return (
    <div
      className={
        'flex items-center relative w-full ml-4 max-w-[150px] ' +
        (className ? className : '')
      }
      onClick={(e) => e.stopPropagation()}>
      <button
        className={`h-full whitespace-nowrap bg-afexred-extralight gap-4  p-3 text-afexred-regular font-semibold rounded-xl hover:shadow  w-full hover:cursor-pointer  flex justify-start  items-center border capitalize ${
          options ? ' border-white  ' : ' border-transparent'
        }`}
        onClick={() => setOptions((s) => !s)}>
        <RowHorizontal
          size='16'
          color='#E1261C'
          variant='Bulk'
          className='shrink-0 '
        />
        COLUMNS
      </button>
      <div
        className={`flex flex-col overflow-y-auto absolute top-[110%] left-[50%] p-2 translate-x-[-50%] ring-1 ring-white shadow-sm dark:ring-wdark-500 rounded-xl  bg-white  z-10 w-[250px] overflow-hidden transition-[max-height] duration-300 ${
          options ? 'max-h-96 opacity-100' : ' max-h-0 opacity-0'
        }`}>
        <ul className=' border-white'>
          {columnOptions.map((el, index) => (
            <li
              className={
                'flex items-center gap-6 whitespace-nowrap text-sm  py-3 px-1 cursor-pointer m-1 rounded-md  ' +
                (selectedColumns?.includes(el.value) &&
                  ' bg-afexred-lighter ') +
                (el.disabled && ' bg-afexred-light')
              }
              key={index}>
              <input
                type='checkbox'
                name='columns'
                id={'columns' + index}
                value={el.value}
                disabled={el.disabled}
                checked={selectedColumns?.includes(el.value)}
                className='checkbox checkbox-small  !mr-1 shrink-0 disabled:before:!bg-afexred-extralight   '
                onChange={(e) => {
                  const { value, checked } = e.target;
                  const disabled = el.disabled ? true : false;
                  if (!disabled) {
                    if (checked) {
                      settingColumns({ [name]: [...selected, value] });
                    } else {
                      settingColumns({
                        [name]: [
                          ...selectedColumns?.filter(
                            (item: string) => item !== value
                          ),
                        ],
                      });
                    }
                  }
                }}
              />
              <label
                htmlFor={'columns' + index}
                className='block w-full hover:cursor-pointer capitalize whitespace-normal'>
                {el.label ? el.label : el.value}
              </label>
            </li>
          ))}
        </ul>{' '}
      </div>
    </div>
  );
}
