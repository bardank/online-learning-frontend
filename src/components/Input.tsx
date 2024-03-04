import { useField } from "formik";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  type: "text" | "password" | "email";
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  name,
  required = true,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <label className="label">
        <span className="label-text" {...field} {...props}>
          {label}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input border-1 border-gray-300 "
        required={required}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="error text-red-500 text-sm">{meta.error}</p>
      ) : null}
    </>
  );
};

export default Input;
