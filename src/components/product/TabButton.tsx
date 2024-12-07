import * as React from "react";
import { TabProps } from "../../types/ProductDetailsType";

export const TabButton: React.FC<TabProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  const baseClasses =
    "gap-2.5 self-stretch px-7 py-2 my-auto rounded-[40px] max-md:px-5";
  const activeClasses = isActive
    ? "bg-[#CEE34C] text-stone-950"
    : "bg-white border border-solid border-neutral-200";

  return (
    <button
      className={`${baseClasses} ${activeClasses}`}
      aria-pressed={isActive}
      role="tab"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
