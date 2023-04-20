import React, { useState } from 'react';
import FormInput from '../form/input';

function DynamicFormInputs() {
  const [formInputs, setFormInputs] = useState([
    {
      id: '',
      name: '',
      label: '',
      placeholder: '',
      required: true,
      type: 'text',
      autocomplete: '',
    },
  ]);

  const handleAddInput = () => {
    setFormInputs([
      ...formInputs,
      {
        id: '',
        name: '',
        label: '',
        placeholder: '',
        required: true,
        type: 'text',
        autocomplete: '',
      },
    ]);
  };

  const handleDeleteInput = (index: number) => {
    const newInputs = [...formInputs];
    newInputs.splice(index, 1);
    setFormInputs(newInputs);
  };

  return (
    <div>
      {formInputs?.map((input, index) => (
        <div key={index}>
          <FormInput
            id={input.id}
            name={input.name}
            label={input.label}
            placeholder={input.placeholder}
            required={input.required}
            type='text'
            autocomplete={input.autocomplete}
          />
          <button onClick={() => handleDeleteInput(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default DynamicFormInputs;
