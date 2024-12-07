import React from "react";
import { ProductSection } from "./ProductSection";
import {
  ProductCardProps,
  ProductDetails,
} from "../../types/ProductDetailsType";
import { useProducts } from "../../utils/useProducts";

export const ProductDisplay: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading || !products) {
    return null;
  }

  // Transform products into ProductCardProps format
  const transformProductToCard = (
    product: ProductDetails
  ): ProductCardProps => ({
    image: product.main_image.src,
    badge: {
      text: product.categories.includes("Flash Sales")
        ? "Flash Sale"
        : "New Arrival",
      color: product.categories.includes("Flash Sales")
        ? "bg-red-600 text-white"
        : "bg-[#CEE34C] text-black",
    },
    price: {
      current: product.pricing.currentPrice,
      original: product.pricing.originalPrice,
      discount: product.pricing.discount,
    },
    title: product.name,
    reviews: {
      count: product.reviews.totalReviews,
      rating: product.reviews.rating,
    },
    soldCount: product.reviews.totalSold,
  });

  // Get random products for each section
  const getRandomProducts = (count: number, excludeId?: number) => {
    const availableProducts = excludeId
      ? products.filter((p) => p.id !== excludeId)
      : products;

    return availableProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
      .map(transformProductToCard);
  };

  const similarProducts = getRandomProducts(3);
  const recentlyViewed = getRandomProducts(3);

  return (
    <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5">
      <div className="flex flex-col mx-auto w-full max-w-[1350px] gap-8">
        <ProductSection title="Related Products" products={similarProducts} />
        <ProductSection title="People Also Bought" products={recentlyViewed} />
      </div>
    </div>
  );
};
