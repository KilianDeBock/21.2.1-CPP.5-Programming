import React, { useRef, useState } from "react";

type InputProps = {};

export const Input = ({}: InputProps) => {
  const [name, setName] = useState("Default ...");

  const ref = useRef<HTMLInputElement>(null);

  if (ref && ref.current) {
    console.log(ref.current.value);
  }

  return (
    <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
  );
};
