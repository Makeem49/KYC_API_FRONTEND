import React, { useEffect, useState } from 'react';

import { useField, FieldArray } from 'formik';
import { MdKeyboardArrowDown } from 'react-icons/md';
import FormLabel from '../label';

interface MultiSelectInterface {
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

const SingleSelect = (props: MultiSelectInterface) => {
  const [field, meta] = useField(props);
  const [showOpts, setShowOpts] = useState<boolean>(false);

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

      <FieldArray
        name={props.name}
        render={({ push, remove }:any) => (
          <div className='relative gap-y-1'>
            <div
              className='relative w-full'
              onClick={(e) => {
                e.stopPropagation();
                setShowOpts((s) => !s);
              }}>
              <input
                className={`block w-full p-3 bg-white border h-14 rounded-lg text-sm transition text-transparent ${
                  showOpts && 'ring-1 ring-afexred-light'
                }`}
                type='text'
                disabled
                {...props}
                {...field}
              />
              <div
                className='values flex space-x-4 text-xs absolute top-1/2 left-3 -translate-y-1/2'
                onClick={(e) => e.stopPropagation()}>
                {field?.value?.map((val: string | number) => (
                  <>
                    <div className='flex w-[150px] h-60 justify-between pr-2 items-center p-1 rounded-md overflow-clip '>
                      <span className='w-14 overflow-ellipsis text-[14px] whitespace-nowrap'>
                        {val}
                      </span>
                    </div>
                  </>
                ))}
              </div>
              <MdKeyboardArrowDown className='absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-lg' />
            </div>
            <ul
              className={`overflow-auto absolute z-10 max-h-0 transition-[max-height] child:cursor-pointer child:my-2 child:ml-2 bg-white w-full ring-1 ring-afexred-light rounded-lg opacity-0 ${
                showOpts && 'max-h-72 opacity-100 my-2'
              }`}>
              {props.data.map((option, index) => (
                <li
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();

                    if (field?.value?.includes(option.value)) {
                      return remove(field.value.indexOf(option.value));
                    }

                    push(option.value);
                  }}
                  className={`text-base font-light first:mt-0 rounded-lg flex items-center space-x-4 accent-afexred-regular p-3 ${
                    field?.value?.indexOf(option.value) > -1 &&
                    'bg-afexred-extralight'
                  }`}>
                  <input
                    type='checkbox'
                    name={option.label}
                    id={option.label}
                    className='appearance-none w-6 h-6 rounded-md bg-white border border-afexred-regular'
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        return remove(field.value.indexOf(option.value));
                      }
                      return push(option.value);
                    }}
                    checked={field?.value?.indexOf(option.value) > -1}
                  />
                  <label htmlFor=''>{option.label}</label>
                </li>
              ))}
            </ul>
          </div>
        )}
      />

      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default SingleSelect;
