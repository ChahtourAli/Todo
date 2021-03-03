import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../components/TodoItem/Input";
import { REGIONS } from "../../constants/regions";

const SignUp = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="firstName" label="First Name" isRequired />
        <Input name="lastName" label="Last Name" isRequired />
        <Input name="email" label="Email" isRequired />
        <Input name="phoneNumber" label="Phone Number" isRequired />
        <Input name="address" label="Address" />
        <select name="region" ref={methods.register}>
          {REGIONS.map((region) => (
            <option value={region.value} key={region.value}>
              {region.label}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
export default SignUp;
