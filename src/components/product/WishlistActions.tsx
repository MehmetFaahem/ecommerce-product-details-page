import * as React from "react";
import { ActionButton } from "./ActionButton";

const actions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed2d0bdaf53181a7b7e020f2cd576921fb83d6d3bbd088332c1686948fbeb5c6?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    text: "Add to Wishlist",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42be215017624e268c806175270f0d69de67cb840ad1a42a549bffc688194413?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    text: "Add to Compare",
  },
];

export const WishlistActions: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center self-start mt-4 text-sm font-medium leading-tight text-stone-950">
      {actions.map((action, index) => (
        <ActionButton key={index} icon={action.icon} text={action.text} />
      ))}
    </div>
  );
};
