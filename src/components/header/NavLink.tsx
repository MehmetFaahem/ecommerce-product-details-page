import * as React from "react";
import { NavLinkProps } from "../../types/HeaderTypes";

export const NavLink: React.FC<NavLinkProps> = ({
  text,
  hasDropdown,
  href,
}) => (
  <a
    href={href}
    className="flex gap-[-5px] items-center self-stretch my-auto hover:text-lime-600 transition-colors"
    role="menuitem"
  >
    <span className="self-stretch my-auto">{text}</span>
    {hasDropdown && (
      <img
        loading="lazy"
        src="/src/assets/arrow-down.png"
        className="object-contain shrink-0 self-stretch my-auto w-4 translate-x-1 aspect-square"
        alt=""
      />
    )}
  </a>
);
