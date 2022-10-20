import React from "react";
import { FieldAttributes, useField } from "formik";

export type RadioProps = {
  label: string;
} & FieldAttributes<{}>;

export const Radio = ({ label, ...props }: RadioProps) => {
  const [field] = useField(props);

  return (
    <>
      <input {...field} value={label} type={"radio"} />
      <label>{label}</label>
    </>
  );
};
