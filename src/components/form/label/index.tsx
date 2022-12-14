import React from 'react';

const FormLabel = ({
  htmlFor,
  label,
  requiredHint,
}: {
  htmlFor: string;
  label: string;
  requiredHint: boolean | undefined;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className='block mb-2 font-semibold text-base align-middle'>
      {label} {requiredHint && <span className='text-red-400'>*</span>}
    </label>
  );
};

export default FormLabel;
