import React from "react";
import { TextField, TextFieldProps } from "./TextField.component";
import { useField } from "formik";

export const TextFieldError = ({ ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);

  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <>
      <TextField {...field} name={props.name} value={props.value} />
      {errorText ? (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          {errorText}
        </div>
      ) : null}
    </>
  );
};
