import React from "react";
import { Head } from "./Head";
import { Product } from "../inderfaces";

type ProductHeadProps = {
  product: Product;
};

export const ProductHead = ({ product }: ProductHeadProps) => {
  return <Head title={`Product ${product.name}`} isActive={true} />;
};
