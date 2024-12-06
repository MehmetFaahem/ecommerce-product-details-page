import * as React from "react";
import { ProductSection } from "./ProductSection";
import { ProductCardProps } from "../../types/ProductDetailsType";

const relatedProducts: ProductCardProps[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "New Arrival", color: "bg-lime-300" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "New Arrival", color: "bg-lime-300" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "New Arrival", color: "bg-lime-300" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
];

const alsoBoughtProducts: ProductCardProps[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "Hot Sale", color: "bg-red-600" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "Hot Sale", color: "bg-red-600" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d560fdbc1abbbdeda1dcc78973b9f95846c048285c7b58e5f1e5b7f2022fc93?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    badge: { text: "Hot Sale", color: "bg-red-600" },
    price: { current: 99.99, original: 200.0, discount: 25 },
    title: "Cool sweater from the greens of new Iceland Cotton",
    reviews: { count: 34, rating: 5 },
    soldCount: 241,
  },
];

export const ProductDisplay: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[1350px] mx-auto gap-10 mt-10">
      <ProductSection title="Related Products" products={relatedProducts} />

      <ProductSection
        title="People Also Bought"
        products={alsoBoughtProducts}
      />
    </div>
  );
};
