import React, { useState } from "react";
import { TabButton } from "./TabButton";
import { ProductDetails as IProductDetails } from "../../types/ProductDetailsType";

interface ProductTabContent {
  description: string[];
  specifications: string[];
  reviews: {
    rating: number;
    text: string;
  }[];
  shipping: {
    estimatedDelivery: string;
    returnPolicy: string;
  }[];
}

interface ProductBriefProps {
  product: IProductDetails;
}

export const ProductBrief: React.FC<ProductBriefProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  // Transform API data into tab content structure
  const productTabContent: ProductTabContent = {
    description: [product.description],
    specifications: product.specifications,
    reviews: product.reviews.detailedReviews,
    shipping: [
      {
        estimatedDelivery: product.shipping.estimatedDelivery,
        returnPolicy: product.shipping.returnPolicy,
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="mt-5">
            {productTabContent.description.map((desc, index) => (
              <p key={index} className="text-neutral-500">
                {desc}
              </p>
            ))}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Outstanding Features:</h3>
              <ul className="">
                {product.outstanding_features.map((feature, index) => (
                  <li key={index} className="text-neutral-500 mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {product.images.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[300px] max-md:ml-0 max-md:w-full"
                  >
                    <img
                      loading="lazy"
                      src={image.src}
                      alt={image.alt}
                      className="object-cover grow w-full aspect-[0.89] max-md:mt-3.5"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Washing Instructions:</h3>
              <ul className="">
                {product.washing_instructions.map((instruction, index) => (
                  <li key={index} className="text-neutral-500 mb-1">
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "specifications":
        return (
          <div className="mt-5">
            {productTabContent.specifications.map((spec, index) => (
              <p key={index} className="text-neutral-500 mb-2">
                {spec}
              </p>
            ))}
          </div>
        );
      case "reviews":
        return (
          <div className="mt-5">
            {productTabContent.reviews.map((review, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-500">{review.text}</p>
              </div>
            ))}
          </div>
        );
      case "shipping":
        return (
          <div className="mt-5">
            {productTabContent.shipping.map((info, index) => (
              <div key={index}>
                <p className="text-neutral-500 mb-2">
                  <span className="font-semibold">Estimated Delivery: </span>
                  {info.estimatedDelivery}
                </p>
                <p className="text-neutral-500">
                  <span className="font-semibold">Return Policy: </span>
                  {info.returnPolicy}
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="flex gap-2.5 justify-start max-md:flex-wrap">
        <TabButton
          label="Description"
          isActive={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        />
        <TabButton
          label="Specifications"
          isActive={activeTab === "specifications"}
          onClick={() => setActiveTab("specifications")}
        />
        <TabButton
          label="Reviews"
          isActive={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        />
        <TabButton
          label="Shipping"
          isActive={activeTab === "shipping"}
          onClick={() => setActiveTab("shipping")}
        />
      </div>
      {renderTabContent()}
    </div>
  );
};
