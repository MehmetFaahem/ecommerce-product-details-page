import React from "react";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductCheckout } from "./ProductCheckout";
import { useProductState } from "../../hooks/useProductState";
import { ProductDetails as IProductDetails } from "../../types/ProductDetailsType";

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
    <div className="flex overflow-hidden flex-wrap gap-6 items-start justify-center mt-10">
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
    </div>
  );
};
