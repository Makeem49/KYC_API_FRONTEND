import React, { useState } from 'react';
import { Export } from 'iconsax-react';

interface SelectInterface {
  data: Option[];
  Icon?: () => JSX.Element;
  label: string | React.ReactNode;
  type: 'filled' | 'outline' | 'button';
  className?: string;
  listClasses?: string;
  arrow?: boolean;
}

interface Option {
  label: string;
  function: () => void;
  icon?: JSX.Element;
}

const ActionSelect = (props: SelectInterface) => {
  const [options, setOptions] = useState<boolean>(false);

  const filled_style = `${props.className}  whitespace-nowrap bg-afexred-extralight gap-4 text-sm p-3 w-full flex justify-between items-center rounded-xl text-afexred-regular transition duration-150 hover:shadow-lg`;
  const outline_style = `${props.className}  whitespace-nowrap bg-afexred-extralight gap-4 text-sm p-3 flex w-full justify-between items-center rounded-xl text-afexgreen hover:bg-afexgreen dark:hover:bg-afexgreen hover:text-white ring-1 ring-afexgreen`;
  const button_style = `${
    props.className
  } whitespace-nowrap bg-afexred-regular text-afrexred-regular  gap-4  p-3 rounded-2xl hover:shadow  w-full h-full hover:cursor-pointer  flex justify-between items-center border dark:bg-wdark-400 h-14 dark:border-0 ${
    options ? ' border-afe ' : ' border-transparent'
  }'`;

  return (
    <div className='flex rounded-xl t font-semibold items-center relative'>
      <button
        className={
          props.type === 'filled'
            ? filled_style
            : props.type === 'outline'
            ? outline_style
            : button_style
        }
        onClick={() => setOptions((s) => !s)}>
        {props.label}

        <Export />
      </button>
      <ul
        className={`flex flex-col absolute top-[110%] left-[50%] translate-x-[-50%] ring-1 ring-afexred-extralight dark:ring-wdark-500 rounded-xl opacity-0 dark:bg-wdark-300 z-10 max-h-0 w-[150px] overflow-hidden transition-[max-height] duration-300 ${
          options && 'max-h-96 opacity-100'
        }`}>
        {props.data.map((el, index) => (
          <li
            onClick={() => {
              el.function();
              setOptions(false);
            }}
            className='flex items-center gap-2 whitespace-nowrap text-sm hover:bg-afexred-lighter text-afexblue-dark dark:hover:bg-white dark:hover:bg-opacity-20 p-1 cursor-pointer m-1 rounded-xl '
            key={index}>
            <span className='text-gray-400 hover:text-[#53565b]'>{'hey '}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionSelect;
