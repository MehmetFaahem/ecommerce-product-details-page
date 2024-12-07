import React from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductCheckout } from "./ProductCheckout";
import { useProductState } from "../../hooks/useProductState";
import { ProductDetails as IProductDetails } from "../../types/ProductDetailsType";
import { ProductBrief } from "./ProductDetails";
import { ProductDisplay } from "./ProductDisplay";

interface ProductDetailsProps {
  product: IProductDetails;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    handleImageChange,
  } = useProductState();

  return (
    <>
      <div className="flex overflow-hidden flex-wrap gap-6 items-start justify-start mt-10 max-w-[1350px] mx-auto max-lg:flex-col max-xl:px-5 max-xl:items-center max-xl:justify-center">
        <ProductGallery
          images={product.images}
          selectedImage={selectedImage}
          onImageSelect={handleImageChange}
        />
        <ProductInfo
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          onSizeChange={handleSizeChange}
          onColorChange={handleColorChange}
        />
        <ProductCheckout
          product={product}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <ProductBrief product={product} />
      </div>

      <ProductDisplay />
    </>
  );
};
