import * as React from "react";
import { CartItemProps } from "../../types/HeaderTypes";
import cartIcon from "../../assets/tabler-icon-shopping-cart.png";
export const CartWidget: React.FC<CartItemProps> = ({
  count,
  total,
  onCartClick,
}) => (
  <button
    onClick={onCartClick}
    className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap hover:text-lime-600 transition-colors"
    aria-label={`Shopping cart with ${count} items totaling ${total}`}
  >
    <img
      loading="lazy"
      src={cartIcon}
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
      alt=""
    />
    <div className="flex gap-2.5 items-center self-stretch my-auto">
      <span className="self-stretch my-auto">{count}</span>
      <div className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid border-stone-950 border-opacity-30" />
      <span className="self-stretch my-auto">{total}</span>
    </div>
  </button>
);
