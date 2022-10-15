import React from "react";

type HeadProps = {
  title: string;
  isActive?: boolean;
};

export const Head = ({ title, isActive = false }: HeadProps) => {
  return <div>{isActive && <h1>{title}</h1>}</div>;
};
