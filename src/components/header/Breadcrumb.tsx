import * as React from "react";
import { BreadcrumbItemProps } from "../../types/HeaderTypes";
import arrowRight from "../../assets/arrow-right.png";
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  text,
  isActive,
  isLast,
  href,
}) => (
  <>
    <a
      href={href}
      className={`self-stretch max-md:text-xs my-auto hover:text-lime-600 transition-colors ${
        isActive ? "text-stone-950" : ""
      }`}
    >
      {text}
    </a>
    {!isLast && (
      <img
        loading="lazy"
        src={arrowRight}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.94]"
        alt=""
      />
    )}
  </>
);
