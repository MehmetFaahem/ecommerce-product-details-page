import { useState, useCallback } from "react";
import { ProductSize, ProductColor } from "../types/ProductDetailsType";

export const useProductState = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleSizeChange = useCallback((size: ProductSize) => {
    setSelectedSize(size.value);
  }, []);

  const handleColorChange = useCallback((color: ProductColor) => {
    setSelectedColor(color.value);
  }, []);

  const handleQuantityChange = useCallback((value: number) => {
    if (value >= 1 && value <= 99) {
      setQuantity(value);
    }
  }, []);

  const handleImageChange = useCallback((imageId: string) => {
    setSelectedImage(imageId);
  }, []);

  return {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    handleImageChange,
  };
};
