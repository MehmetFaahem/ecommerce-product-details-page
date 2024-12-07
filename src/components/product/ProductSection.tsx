import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductSectionProps } from "../../types/ProductDetailsType";

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
}) => {
  return (
    <div className="mt-5 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full text-2xl font-medium leading-snug text-stone-950 max-md:max-w-full">
        <div className="mb-5">{title}</div>
      </div>
      <div className="flex flex-wrap gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
