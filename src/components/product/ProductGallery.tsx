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
  const isLastImage = images[images.length - 1].id === selectedImage;
  const isFirstImage = images[0].id === selectedImage;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-2.5 w-full md:w-[536px] min-w-[240px]">
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:w-[88px] py-2 md:py-0">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => onImageSelect(image.id)}
            className={`flex-shrink-0 border-2 border-separate border-spacing-10 rounded ${
              selectedImage === image.id
                ? "border-gray-300"
                : "border-transparent"
            } transition-all duration-200 hover:border-gray-300`}
            aria-label={`View ${image.alt}`}
          >
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className="object-cover w-[88px] h-[88px]"
            />
          </button>
        ))}
      </div>
      <div className="relative flex-1 min-h-[300px] md:min-h-[400px] border border-solid border-zinc-100 overflow-hidden">
        <div className="absolute top-3 right-3 size-8 bg-white z-10 flex items-center justify-center shadow-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"></path>
          </svg>
        </div>
        <div
          onClick={() => onImageSelect(images[images.length - 1].id)}
          className="absolute top-[50%] right-[8px] z-10 bg-white flex items-center justify-center size-8 shadow-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={isLastImage ? "#999" : "#000"}
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
        <div
          onClick={() => onImageSelect(images[0].id)}
          className="absolute top-[50%] left-[8px] z-10 bg-white flex items-center justify-center size-8 shadow-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={isFirstImage ? "#999" : "#000"}
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </div>
        <img
          loading="lazy"
          src={mainImage.src}
          alt={mainImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
