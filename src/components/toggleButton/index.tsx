import React from "react";
import { useField } from "formik";
import { t } from "i18next";

const ToggleButton = (props: any) => {
  const [field] = useField(props);
  const initialLabel = t(props.label);

  return (
    <>
      <div className="flex px-3 items-center gap-2">
        <label
          htmlFor={props.id}
          className="text-[14px] text-sinbadKYC-primaryGrey font-semibold mt-1"
        >
          {initialLabel}
        </label>
        <input
          type="checkbox"
          id={props.id}
          className="relative rounded-xl appearance-none border border-sinbadKYC-bordergrey cursor-pointer w-12 h-6 bg-white before:absolute before:w-4 before:h-4 before:top-1/2 before:left-1 before:rounded-full before:bg-gray-500 before:shadow before:-translate-y-1/2 checked:before:left-[unset] checked:before:right-1 checked:bg-sinbadKYC-darkgreen  transition duration-300 "
          {...field}
          checked={field.value}
        />
      </div>
      {/* {meta.error && meta.touched && (
        <span className='block text-red-400 text-xs mt-2'>{meta.error} </span>
      )} */}
    </>
  );
};

export default ToggleButton;
