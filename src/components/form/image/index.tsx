import React, { useState } from 'react';
import { Edit2 } from 'iconsax-react';

import { useField } from 'formik';

import FormLabel from '../label';
import { MdClose } from 'react-icons/md';

interface ImageInterface {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  accepted: string[];
}

const ImageUpload = ({ label, ...props }: ImageInterface) => {
  const [bg, setBg] = useState('');
  const [field, meta, helpers] = useField(props);
  console.log(field);

  const { setValue } = helpers;

  return (
    <div className='gap-1 flex flex-col'>
      <FormLabel
        htmlFor={props.id || props.name}
        label={label}
        requiredHint={props.required}
      />

      <div className='relative w-max'>
        <label
          htmlFor={props.id || props.name}
          className='absolute -right-5 -top-4 bg-white rounded-full p-1 shadow-lg drop-shadow-md cursor-pointer'>
          <Edit2 variant='Bulk' size={18} />
        </label>
        <input
          type='file'
          id={props.id}
          accept={props.accepted.toString()}
          className='appearance-none hidden'
          onChange={(event) => {
            const files = event.currentTarget.files;

            if (!files) {
              setValue([]);
              setBg('');
              return;
            } else {
              setBg(URL.createObjectURL(files[0]));
            }
          }}
        />

        <div className={`border-[#FFFF] w-[100px] h-[100px] bg-[#D9D9D9]`}>
          <img
            src={bg}
            alt=''
            className='w-full h-full object-cover appearance-none'
          />
        </div>
        <button
          className='absolute -bottom-1 bg-white shadow-lg drop-shadow-md -right-5 rounded-full p-1'
          type='button'
          onClick={() => {
            setBg('');
            setValue('');
          }}>
          <MdClose />
        </button>
      </div>
      {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs pt-2'>{meta.error} </span>
      )}
      <p className='text-base font-normal'>
        Allowed file types: {props.accepted.join(', ')}{' '}
        {/* {URL.createObjectURL(field.value)} */}
      </p>
    </div>
  );
};

export default ImageUpload;
