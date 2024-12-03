import * as React from "react";
import { ActionButtonProps } from "../../types/ProductDetailsType";

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-white border border-solid border-neutral-200 rounded-[40px]"
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};
