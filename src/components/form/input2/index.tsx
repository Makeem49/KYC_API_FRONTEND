import { useField } from "formik";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface TextInputInterface {
  id: string;
  name: string;
  label?: string;
  type: "text" | "email" | "password" | "tel" | "search" | "number";
  placeholder?: string;
  autocomplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
  pattern?: string;
}
const TextInput = ({
  labelClass,
  inputClass,
  ...props
}: TextInputInterface) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState(props.type);

  const toggleVisibility = () => {
    if (type === "password") {
      return setType("text");
    } else {
      return setType("password");
    }
  };
  return (
    <div className="relative w-full">
      <div className="w-full md:flex gap-24 items-center">
        {" "}
        {props.label && (
          <label
            htmlFor={props.name || props.id}
            className={`${labelClass}  block mb-2 xl:mb-5 text-base w-48 tracking-wide text-[#54565b] dark:text-textgrey-normal capitalize`}
          >
            {props.label}{" "}
            {props.required && <span className="text-red-400">*</span>}
          </label>
        )}
        <input
          type={type}
          id={props.id}
          autoFocus={props.autoFocus}
          autoComplete={props.autocomplete}
          pattern={props.pattern}
          className={`block w-[220px] appearance-none outline-none bg-white tracking-wider rounded-lg ring-1 ring-[#DAD9DA]  focus:ring-2 h-12 transition duration-150 py-1 px-4 ${inputClass} `}
          placeholder={props.placeholder}
          {...field}
        />
      </div>

      {props.type === "password" && type === "password" && (
        <AiOutlineEyeInvisible
          className="cursor-pointer text-2xl text-gray-400 absolute right-3 top-2/3 -translate-y-1/3  active:drop-shadow-md"
          onClick={toggleVisibility}
        />
      )}
      {props.type === "password" && type === "text" && (
        <AiOutlineEye
          className="cursor-pointer text-2xl text-gray-400 absolute right-3 top-2/3 -translate-y-1/3 active:drop-shadow-md"
          onClick={toggleVisibility}
        />
      )}
      {meta.error && meta.touched && (
        <span className="block text-red-400 text-xs pt-2">{meta.error} </span>
      )}
    </div>
  );
};

export default TextInput;
