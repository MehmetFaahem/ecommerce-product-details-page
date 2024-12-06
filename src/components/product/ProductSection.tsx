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
        <div>{title}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d992783d3c46a2aea3d7d0e473c5e81b021c1bfa694302a1e7a81ad89969a4?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
          alt=""
          className="object-contain shrink-0 aspect-[2.29] w-[78px]"
        />
      </div>
      <div className="flex gap-5 max-md:flex-col">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
