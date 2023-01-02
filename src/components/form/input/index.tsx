import React, { useState } from 'react';
import { useField } from 'formik';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import FormLabel from '../label';

interface FormInputInterface {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'tel' | 'search' | 'number';
  placeholder?: string;
  autocomplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  pattern?: string;
}

const FormInput = ({ label, ...props }: FormInputInterface) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState(props.type);

  const toggleVisibility = () => {
    if (type === 'password') {
      return setType('text');
    } else {
      return setType('password');
    }
  };

  return (
    <div className='gap-1 flex flex-col'>
      {label && (
        <FormLabel
          requiredHint={props.required}
          label={label}
          htmlFor={props.id || props.name}
        />
      )}

      <div className='relative w-full'>
        <input
          type={type}
          id={props.id || props.name}
          pattern={props.pattern}
          placeholder={props.placeholder}
          autoComplete={props.autocomplete}
          autoFocus={props.autoFocus}
          className='block w-full appearance-none outline-none tracking-wide rounded-lg text-sm p-3 font-normal text-[#C1C0C2] bg-white h-14 border focus:border-afexpurple-light transition '
          {...field}
        />
        {props.type === 'password' && type === 'password' && (
          <AiOutlineEyeInvisible
            className='cursor-pointer text-lg text-gray-400 absolute right-3 top-1/2 -translate-y-1/2  active:drop-shadow-md'
            onClick={toggleVisibility}
          />
        )}
        {props.type === 'password' && type === 'text' && (
          <AiOutlineEye
            className='cursor-pointer text-lg text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 active:drop-shadow-md'
            onClick={toggleVisibility}
          />
        )}
      </div>
      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default FormInput;
