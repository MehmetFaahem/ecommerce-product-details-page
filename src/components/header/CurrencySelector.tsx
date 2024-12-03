import * as React from "react";
import { CurrencyProps } from "../../types/HeaderTypes";

export const CurrencySelector: React.FC<CurrencyProps> = ({
  code,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(code);
  };

  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap hover:text-lime-600 transition-colors"
      aria-label={`Select ${code} currency`}
    >
      <span className="self-stretch my-auto">{code}</span>
      <img
        loading="lazy"
        src="/src/assets/arrow-down.png"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
    </button>
  );
};
