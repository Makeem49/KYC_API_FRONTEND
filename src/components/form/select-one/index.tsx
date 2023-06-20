import { useField } from 'formik';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
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

const SelectOne = (props: MultiSelectInterface) => {
  const [field, meta, helpers] = useField(props);
  const [showOpts, setShowOpts] = useState<boolean>(false);
  const inputLabel = t(props.label);
  const InitialLabel = t('Select');
  const afterLabel = t('Select');

  const setValue = () => {
    if (!field.value) {
      return InitialLabel;
    } else {
      return afterLabel;
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', () => setShowOpts(false));

    return () =>
      document.body.removeEventListener('click', () => setShowOpts(false));
  }, []);

  const handleOptionClick = (option: Option) => {
    if (field.value === option.value) {
      // If the clicked option is already selected, clear the value
      helpers.setValue('');
    } else {
      // Otherwise, set the selected option value
      helpers.setValue(option.value);
    }
  };

  return (
    <div className="relative">
      <FormLabel
        htmlFor={props.id || props.name}
        requiredHint={props.required}
        label={inputLabel}
      />

      <div className="relative gap-y-1">
        <div
          className="relative w-full"
          onClick={(e) => {
            e.stopPropagation();
            setShowOpts((s) => !s);
          }}>
          <input
            className={`block w-full p-3 bg-white dark:bg-afexdark-verydark border dark:border-afexdark-dark h-14 rounded-lg text-sm transition text-transparent ${
              showOpts && 'ring-1 ring-afexpurple-light dark:ring-afexdark-dark'
            }`}
            type="text"
            disabled
            {...props}
            {...field}
          />
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-lg" />
        </div>
        <span className="absolute flex gap-1 top-4 left-4">
          <span> {setValue()}</span>
          <span> {inputLabel} </span>
        </span>
        <ul
          className={`overflow-auto absolute z-40 max-h-0 transition-[max-height] child:cursor-pointer child:my-2 child:ml-2 bg-white dark:bg-afexdark-verydark w-full ring-1 ring-afexpurple-light dark:ring-afexdark-dark rounded-lg opacity-0 ${
            showOpts && 'max-h-72 opacity-100 my-2'
          }`}>
          {props?.data?.map((option, index) => (
            <li
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option);
              }}
              className={`text-base font-light first:mt-0 rounded-lg flex items-center accent-afexpurple-regular p-3 ${
                field.value === option.value &&
                'bg-afexpurple-lighter dark:bg-afexdark-darkest'
              }`}>
              <input
                type="checkbox"
                name={option.label}
                id={option.label}
                className="checkbox"
                checked={field.value === option.value}
                readOnly
              />
              <label htmlFor="">{option.label}</label>
            </li>
          ))}
        </ul>
      </div>

      {meta.error && meta.touched && (
        <span className="block text-red-400 text-xs pt-2">{meta.error} </span>
      )}
    </div>
  );
};

export default SelectOne;
