import React from 'react';
import { useField } from 'formik';

const ToggleButton = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='flex justify-between px-3 items-center gap-2'>
        <label htmlFor={props.id} className='text-[14px] font-semibold mt-1'>
          {props.label}
        </label>
        <input
          type='checkbox'
          id={props.id}
          className='relative rounded-xl appearance-none cursor-pointer w-12 h-6 bg-afexgray before:absolute before:w-4 before:h-4 before:top-1/2 before:left-1 before:rounded-full before:bg-white before:shadow before:-translate-y-1/2 checked:before:left-[unset] checked:before:right-1 checked:bg-afexred-regular transition duration-300 '
          {...field}
          checked={field.value}
        />
      </div>
      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs mt-2'>{meta.error} </span>
      )}
    </>
  );
};

export default ToggleButton;
