import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

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
  const { arrow = true, listClasses = '', Icon } = props;

  const filled_style = `${props.className} capitalize whitespace-nowrap bg-afexgreen gap-4 text-sm p-3 w-full flex justify-between items-center rounded-lg text-black transition duration-150 hover:shadow-lg`;
  const outline_style = `${props.className} capitalize whitespace-nowrap bg-white dark:bg-transparent  gap-4 text-sm p-3 flex w-full justify-between items-center rounded-lg text-black hover:bg-afexgreen dark:hover:bg-afexgreen hover:text-white ring-1 ring-afexgreen`;
  const button_style = `${
    props.className
  } capitalize whitespace-nowrap bg-white gap-4  px-3 rounded-2xl hover:shadow w-full h-full hover:cursor-pointer flex justify-between items-center border dark:bg-wdark-400 h-14 dark:border-0 ${
    options ? ' border-afexpurple ' : 'border border-[#BABABA] '
  }'`;

  useEffect(() => {
    const close = () => setOptions(false);

    document.addEventListener('click', close);
  }, []);

  return (
    <div
      className='flex items-center relative'
      onClick={(e) => e.stopPropagation()}>
      <button
        className={
          props.type === 'filled'
            ? filled_style
            : props.type === 'outline'
            ? outline_style
            : button_style
        }
        onClick={() => setOptions((s) => !s)}>
        {Icon && <Icon />}
        {props.label}
        {arrow && (
          <MdOutlineKeyboardArrowDown
            className={`text-xl transition duration-300 ${
              options && 'rotate-180'
            }`}
          />
        )}
      </button>
      <ul
        className={`flex flex-col absolute p-6 top-[110%] bg-white rounded-lg opacity-0  dark:bg-wdark-300 z-40 max-h-0 w-full transition-[max-height] duration-300 ${listClasses} ${
          options && 'max-h-96 opacity-100 bg-white p-6'
        }`}>
        {props.data.map((el, index) => (
          <li
            onClick={() => {
              el.function();
              setOptions(false);
            }}
            className='flex flex-col gap-3 relative whitespace-nowrap text-sm hover:bg-afexpurple-lighter dark:hover:bg-white dark:hover:bg-opacity-20 p-1 cursor-pointer m-1 rounded-lg '
            key={index}>
            {el.icon && (
              <span className='bg-white p-[2px] rounded-md text-white inline'>
                {el.icon}
              </span>
            )}
            <span className='absolute top-[-300%] left-[-40%] text-textgrey-darker hover:text-[#53565b] capitalize'>
              {el.label}{' '}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionSelect;
