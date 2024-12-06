import * as React from "react";
import { InstructionProps } from "../../types/ProductDetailsType";

export const WashingInstruction: React.FC<InstructionProps> = ({ text }) => {
  return (
    <span className="text-neutral-700">
      {text}
      <br />
    </span>
  );
};
