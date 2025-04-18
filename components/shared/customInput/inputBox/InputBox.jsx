"use client"
import React from "react";
import InputErrorMessage from "../inputErrorMessage/InputErrorMessage";

const InputBox = ({
  labelText,
  labelId,
  inputType,
  value,
  handleChange,
  handleBlur,
  error,
  touchCheck,
}) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={labelId} className="text-xs mb-2">
        {labelText}
      </label>
      <input
        id={labelId}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={inputType}
        className={`border-[1px] h-[30px] py-1 px-2 text-xs rounded-md outline-none ${
          error && touchCheck
            ? " bg-error-100 border-error-600"
            : "bg-white border-gray-300"
        }`}
      />
      {error && touchCheck && (
        <InputErrorMessage message={error} />
      )}
    </div>
  );
};

export default InputBox;
