import * as React from "react";
import { ProductCardProps } from "../../types/ProductDetailsType";

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  badge,
  price,
  title,
  reviews,
  soldCount,
}) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-6">
        <div className="flex flex-col w-full font-medium text-stone-950">
          <div className="flex flex-col w-full text-sm leading-tight">
            <div className="flex relative flex-col items-start px-2.5 pt-2.5 pb-72 w-full aspect-[0.951] max-md:pr-5 max-md:pb-24">
              <img
                loading="lazy"
                src={image}
                alt={title}
                className="object-cover absolute inset-0 size-full"
              />
              {badge && (
                <div
                  className={`relative gap-2.5 self-stretch px-2 py-1 mb-0 ${badge.color} rounded-sm max-md:mb-2.5 w-fit`}
                >
                  {badge.text}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center w-full text-sm leading-snug text-center">
            <button className="flex flex-col justify-center items-center self-stretch px-5 py-3 my-auto bg-white border-t border-b border-l border-neutral-200 min-h-[44px] w-[156px]">
              <div className="flex gap-1.5 items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/041c8ed98058124bea25e6a232527cab606a5f5fc90e87eeca7d694fe0caa0f6?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
                <span className="self-stretch my-auto">Buy Now</span>
              </div>
            </button>
            <button className="flex flex-col justify-center items-center self-stretch px-5 py-3 my-auto bg-white border border-solid border-neutral-200 min-h-[44px] w-[156px]">
              <div className="flex gap-1.5 items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd12b04cda24019c1e617ef67f53f05971ed1e72e5fef45a89c494c4b7c2a717?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
                <span className="self-stretch my-auto">Add to Cart</span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-3 w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <div className="flex gap-1 items-center self-stretch my-auto">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    loading="lazy"
                    src={`http://b.io/ext_${i + 5}-`}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  />
                ))}
              </div>
              <div className="self-stretch my-auto text-xs leading-snug text-right text-neutral-700">
                ({reviews.count} Reviews)
              </div>
            </div>
            <div className="self-stretch my-auto text-xs leading-snug text-right text-neutral-700">
              {soldCount} Sold
            </div>
          </div>
          <div className="mt-2 text-base leading-5 text-neutral-700">
            {title}
          </div>
          <div className="flex gap-2 items-center self-start mt-2 text-base font-medium leading-snug">
            <div className="self-stretch my-auto text-neutral-500">
              $ {price.original.toFixed(2)}
            </div>
            <div className="self-stretch my-auto text-stone-950">
              $ {price.current.toFixed(2)}
            </div>
            {price.discount && (
              <div className="gap-2.5 self-stretch px-2 py-1 my-auto text-xs leading-tight bg-lime-300 rounded-[40px] text-stone-950">
                {price.discount}% off
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
