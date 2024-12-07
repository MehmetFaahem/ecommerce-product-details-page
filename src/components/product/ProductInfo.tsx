import React from "react";
import {
  ProductDetails,
  ProductSize,
  ProductColor,
} from "../../types/ProductDetailsType";
import { SaleCountdown } from "./SaleCountdown";
import { WishlistActions } from "./WishlistActions";
import facebookIcon from "../../assets/facebook.png";
import xIcon from "../../assets/x.png";
import instagramIcon from "../../assets/instagram.png";
import whatsappIcon from "../../assets/whatsapp.png";
import tiktokIcon from "../../assets/tiktok.png";

interface ProductInfoProps {
  product: ProductDetails;
  selectedSize: string;
  selectedColor: string;
  onSizeChange: (size: ProductSize) => void;
  onColorChange: (color: ProductColor) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[424px] max-md:max-w-full">
      <div className="flex gap-3 items-center">
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-lg ${
                index < product.reviews.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-neutral-700 ml-2 mt-[3px]">
            ({product.reviews.totalReviews} Reviews)
          </span>
        </div>
        <div className="w-px h-4 bg-zinc-400" />
        <span className="text-sm font-semibold text-red-500">
          {product.reviews.totalSold}+ Sold
        </span>
      </div>

      <h1 className="mt-2.5 text-xl font-semibold leading-7 text-neutral-700">
        {product.name}
      </h1>

      <p className="mt-2.5 text-sm leading-5 text-neutral-500">
        {product.description}
      </p>

      <SaleCountdown endDate={product.delivery.estimatedRange.end} />

      <div className="flex gap-3 items-center mt-4">
        <span className="text-2xl font-semibold text-stone-950">
          {product.pricing.currency} {product.pricing.currentPrice.toFixed(2)}
        </span>
        <span className="text-lg text-neutral-500 line-through">
          {product.pricing.currency} {product.pricing.originalPrice.toFixed(2)}
        </span>
        <span className="px-3 py-1.5 text-xs font-medium bg-[#CEE34C] rounded-full">
          Save {product.pricing.discount}%
        </span>
      </div>

      <div className="mt-4">
        <div className="flex gap-2.5 items-center">
          <span className="text-sm font-medium text-neutral-700">Color</span>
          {product.colors.map((color) => (
            <button
              key={color.value}
              onClick={() => onColorChange(color)}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === color.value
                  ? "border-lime-300"
                  : "border-neutral-200"
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.label} color`}
            />
          ))}
        </div>

        <div className="flex gap-2.5 items-center mt-5">
          <span className="text-sm font-medium text-neutral-700">Size</span>
          {product.sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => onSizeChange(size)}
              disabled={!size.available}
              className={`px-3 py-1.5 rounded ${
                selectedSize === size.value
                  ? "bg-[#CEE34C]"
                  : size.available
                  ? "bg-white border border-neutral-200"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              }`}
            >
              {size.label}
            </button>
          ))}
          <span className="text-sm font-medium text-neutral-700  cursor-pointer">
            <p className="underline">Size Guide</p>
          </span>
        </div>
      </div>

      <div className="mt-4 w-full border border-solid border-zinc-100 min-h-[1px]" />

      <div className="flex flex-col mt-4 text-sm font-medium border-b border-solid border-zinc-100 pb-4">
        <div className="flex gap-2">
          <span className="text-neutral-500">SKU:</span>
          <span className="text-neutral-700">{product.sku}</span>
        </div>
        <div className="flex gap-2 mt-1.5">
          <span className="text-neutral-500">Categories:</span>
          <span className="text-neutral-700">
            {product.categories.join(", ")}
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <span className="text-sm font-medium text-neutral-500">Share</span>
        <div className="flex gap-4">
          {[
            {
              platform: "Facebook",
              icon: facebookIcon,
              url: "https://facebook.com/share?product_id=1",
            },
            {
              platform: "Twitter",
              icon: xIcon,
              url: "https://twitter.com/share?product_id=1",
            },
            {
              platform: "Instagram",
              icon: instagramIcon,
              url: "https://instagram.com/share?product_id=1",
            },
            {
              platform: "WhatsApp",
              icon: whatsappIcon,
              url: "https://whatsapp.com/share?product_id=1",
            },
            {
              platform: "TikTok",
              icon: tiktokIcon,
              url: "https://tiktok.com/share?product_id=1",
            },
          ].map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${social.platform}`}
            >
              <img
                src={social.icon}
                alt={social.platform}
                className="w-3.5 h-3.5"
              />
            </a>
          ))}
        </div>
      </div>

      <WishlistActions />
    </div>
  );
};
