import { useState } from 'react';
// import { useField } from 'formik';

// interface IObjectKeys {
//   [key: string]: string | number;
// }

function DoubleInput() {
  const [formFields, setFormFields] = useState([{ name: '', age: '' }]);
  // const handleFormChange = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   let data = [...formFields];
  //   data[index][event.target.name] = event.target.value;
  //   setFormFields(data);
  // };

  // const submit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   console.log(formFields);
  // };

  const addFields = () => {
    let object = {
      name: '',
      age: '',
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index: number) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className='App'>
      <div>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                // onChange={(event) => handleFormChange(event, index)}
                value={form.name}
                // {...field}
              />
              <input
                name='age'
                placeholder='Age'
                // onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <span onClick={() => removeFields(index)}>Remove</span>
            </div>
          );
        })}
      </div>
      <span onClick={() => addFields()}>Add More</span>
      <br />
      {/* <button onClick={submit}>Submit</button> */}
    </div>
  );
}

export default DoubleInput;
