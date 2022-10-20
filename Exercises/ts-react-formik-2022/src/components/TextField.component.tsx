import React, { useState } from "react";

export interface TextFieldProps {
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({ value, name, onChange }: TextFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <input
      style={{
        background: "red",
      }}
      type="text"
      name={name}
      onChange={(e) => {
        if (onChange) onChange(e);
        setCurrentValue(e.currentTarget.value);
      }}
      value={currentValue}
    />
  );
};
