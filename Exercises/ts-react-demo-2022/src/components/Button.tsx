import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type={"button"} onClick={onClick}>
      {children}
    </button>
  );
};
