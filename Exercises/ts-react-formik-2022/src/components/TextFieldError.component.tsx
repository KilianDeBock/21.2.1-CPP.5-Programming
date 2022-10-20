import React from "react";
import { TextField, TextFieldProps } from "./TextField.component";
import { useField } from "formik";

export const TextFieldError = (props: TextFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField name={props.name} value={props.value}></TextField>
    </>
  );
};
