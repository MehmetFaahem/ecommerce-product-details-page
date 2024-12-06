import * as React from "react";
import { FooterLinkProps } from "../../types/FooterTypes";

export const FooterLinkSection: React.FC<FooterLinkProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col text-base font-medium leading-snug text-neutral-500 max-md:mt-10">
    <div className="text-lg text-stone-950">{title}</div>
    {links.map((link, index) => (
      <div
        key={index}
        className={`mt-4 ${
          link === "Return & Exchange" ? "text-stone-950" : ""
        }`}
      >
        {link}
      </div>
    ))}
  </div>
);
