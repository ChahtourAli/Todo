import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ name, label, isRequired = false }) => {
  const { register, errors } = useFormContext();
  return (
    <div>
      <span>{label}</span>
      <input
        name={name}
        placeholder={label}
        ref={register({ required: isRequired })}
      />
      <span>{errors[name] && `${label} is required.`}</span>
    </div>
  );
};

export default Input;
