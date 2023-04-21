// DynamicForm.tsx
import React, { useState } from 'react';
import { FormInput } from '../form';

interface FormField {
  label: string;
  value: string;
}

const DynamicForm = () => {
  const [formFields, setFormFields] = useState<FormField[]>([
    { label: '', value: '' },
  ]);

  const addFormField = () => {
    setFormFields([...formFields, { label: '', value: '' }]);
  };

  const removeFormField = (index: number) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormFields = [...formFields];
    newFormFields[index].value = e.target.value;
    setFormFields(newFormFields);
  };

  return (
    <form className=' bg-white rounded-lg border-2 border-gray-100 px-5 py-3 flex flex-col gap-5'>
      <button
        className='text-left rounded-lg mb-2'
        type='button'
        onClick={addFormField}>
        Add Headers
      </button>
      {formFields.map((field, index) => (
        <div className='' key={index}>
          <label></label>

          <FormInput
            id='header'
            name='header'
            label='Transaction Phrase'
            placeholder='Enter Phrase'
            required
            type='text'
            autocomplete='URL'
          />

          <input
            className='block w-full appearance-none outline-none tracking-wide rounded-lg text-sm p-3 font-normal text-textgrey-darker bg-white h-14 border focus:border-afexpurple-light transition '
            type='text'
            value={field.value}
            onChange={(e) => handleChange(index, e)}
            placeholder='header'
          />
          <input
            className='block mt-2 w-full appearance-none outline-none tracking-wide rounded-lg text-sm p-3 font-normal text-textgrey-darker bg-white h-14 border focus:border-afexpurple-light transition '
            type='text'
            value={field.value}
            placeholder='enter value'
            onChange={(e) => handleChange(index, e)}
          />
          <button
            className='mt-3 text-white bg-afexred-regular p-3 rounded-lg'
            type='button'
            onClick={() => removeFormField(index)}>
            delete
          </button>
        </div>
      ))}

      {/* <button type='submit'>Submit</button> */}
    </form>
  );
};

export default DynamicForm;
