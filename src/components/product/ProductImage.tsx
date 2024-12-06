import * as React from "react";
import { ImageProps } from "../../types/ProductDetailsType";

export const ProductImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[0.89] max-md:mt-3.5"
      />
    </div>
  );
};
