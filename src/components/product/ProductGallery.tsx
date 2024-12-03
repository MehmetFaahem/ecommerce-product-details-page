import React from "react";
import { ProductImage } from "../../types/ProductDetailsType";

interface ProductGalleryProps {
  images: ProductImage[];
  selectedImage: string;
  onImageSelect: (imageId: string) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  selectedImage,
  onImageSelect,
}) => {
  const mainImage = images.find((img) => img.id === selectedImage) || images[0];

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-2.5 w-full md:w-[536px] min-w-[240px]">
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:w-[88px] py-2 md:py-0">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => onImageSelect(image.id)}
            className={`flex-shrink-0 border-2 p-1 rounded ${
              selectedImage === image.id
                ? "border-lime-300"
                : "border-transparent"
            } transition-all duration-200 hover:border-lime-200`}
            aria-label={`View ${image.alt}`}
          >
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className="object-contain w-[88px] h-[88px]"
            />
          </button>
        ))}
      </div>
      <div className="relative flex-1 min-h-[300px] md:min-h-[400px] border border-solid border-zinc-100 rounded-lg overflow-hidden">
        <img
          loading="lazy"
          src={mainImage.src}
          alt={mainImage.alt}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
    </div>
  );
};
