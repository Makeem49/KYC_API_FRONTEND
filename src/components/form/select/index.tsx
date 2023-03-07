import React, { useEffect, useState } from 'react';

import { useField } from 'formik';
import { MdKeyboardArrowDown } from 'react-icons/md';

import FormLabel from '../label';

interface SelectInterface {
  data: Array<Option>;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

interface Option {
  value: string | number;
  label: string;
}

const Select = (props: SelectInterface) => {
  const [field, meta, helpers] = useField(props);
  const [showOpts, setShowOpts] = useState<boolean>(false);
  const { setValue } = helpers;

  useEffect(() => {
    document.body.addEventListener('click', () => setShowOpts(false));

    return () =>
      document.body.removeEventListener('click', () => setShowOpts(false));
  }, []);

  return (
    <div className='relative'>
      <FormLabel
        htmlFor={props.id || props.name}
        requiredHint={props.required}
        label={props.label}
      />

      <div className='relative gap-y-1'>
        <div
          className='relative w-full'
          onClick={(e) => {
            e.stopPropagation();
            setShowOpts((s) => !s);
          }}>
          <input
            className={`block w-full p-3 bg-white border h-14 rounded-lg text-sm transition ${
              showOpts && 'ring-1 ring-afexpurple-light'
            }`}
            type='text'
            disabled
            {...props}
            {...field}
          />
          <MdKeyboardArrowDown className='absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-lg' />
        </div>
        <ul
          className={`overflow-auto absolute z-10 max-h-0 transition-[max-height] child:p-2 child:cursor-pointer bg-white w-full ring-1 ring-afexpurple-light rounded-lg opacity-0 ${
            showOpts && 'max-h-72 opacity-100'
          }`}>
          {props.data.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setValue(option.value);
                setShowOpts(false);
              }}
              className='text-gray-400 text-sm rounded-lg'>
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default Select;
