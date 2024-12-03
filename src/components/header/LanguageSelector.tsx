import * as React from "react";
import { LanguageProps } from "../../types/HeaderTypes";

export const LanguageSelector: React.FC<LanguageProps> = ({
  code,
  flag,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(code);
  };

  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap hover:text-lime-600 transition-colors"
      aria-label={`Select ${code} language`}
    >
      <img
        loading="lazy"
        src={flag}
        className="object-contain shrink-0 self-stretch my-auto w-4 rounded-full aspect-square"
        alt={`${code} flag`}
      />
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
