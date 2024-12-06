import * as React from "react";
import { TabButton } from "./TabButton";
import { ProductImage } from "./ProductImage";
import { WashingInstruction } from "./WashingInstruction";
import {
  Description,
  Specification,
  Review,
  ShippingInfo,
  ProductTabContent,
  TabProps,
} from "../../types/ProductDetailsType";

const tabs: TabProps[] = [
  { label: "Description", isActive: true },
  { label: "Specification", isActive: false },
  { label: "Reviews", isActive: false },
  { label: "Shipping", isActive: false },
];

const productDescription: Description = {
  outstandingFeatures: [
    "98% cotton, 2% elastane.",
    "Supple and stretch knit with a rich touch of wool.",
    "Model: Model is 6′1″, wearing a size M.",
    "Caring for your clothes is caring for the environment.",
  ],
  washingInstructions: [
    "Machine wash max. 30ºC. Short spin.",
    "Iron maximum 110ºC.",
    "Do not bleach/bleach.",
    "Do not dry clean.",
    "Tumble dry, medium hear.",
  ],
  images: [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/539ea1f690acd40d2907954e59edfac3c73ce460a6a26844a6099e1dd548923b?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
      alt: "Product view 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/22d44ab727fd92f2b8ccd406fadedb70eb57ffa3902ddd13fd486a117d9c5de8?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
      alt: "Product view 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e5970896530bd0dacfbdd42b674a97b98f9921ace70f6b2f7842d746b63d72a?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
      alt: "Product view 3",
    },
  ],
};

const specifications: Specification[] = [
  { text: "98% cotton, 2% elastane." },
  { text: "Supple and stretch knit with a rich touch of wool." },
  { text: "Model: Model is 6′1″, wearing a size M." },
  { text: "Caring for your clothes is caring for the environment." },
];

const reviews: Review[] = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const shipping: ShippingInfo[] = [
  {
    estimatedDelivery: "2-3 business days",
    returnPolicy: "30 days return policy",
  },
];

const productTabContent: ProductTabContent = {
  description: [productDescription],
  specifications: specifications.map((spec) => spec.text),
  reviews: reviews,
  shipping: shipping,
};

export const ProductBrief: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div>
            <div className="mt-8 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
              <span className="text-lg font-semibold">
                Outstanding Features
              </span>
              <br />
              <br />
              <span className="text-neutral-700">
                The garments labelled as committed are products that have been
                produced using sustainable fibres or processes, reducing their
                environmental impact. Umino's goal is to support the
                implementation of practices more committed to the environment.
              </span>
              <br />
              <br />
              <span className="text-neutral-700">
                – Tonal stitching: 98% cotton, 2% elastane. – Supple and stretch
                knit with a rich touch of wool. – Model: Model is 6′1″, wearing
                a size M. – Caring for your clothes is caring for the
                environment.
              </span>
            </div>

            <div className="mt-6 text-base leading-6 text-neutral-700 w-[352px]">
              <span className="text-lg font-semibold">
                Washing Instructions
              </span>
              <br />
              <br />
              {productDescription.washingInstructions.map(
                (instruction, index) => (
                  <WashingInstruction key={index} text={instruction} />
                )
              )}
            </div>

            <div className="mt-6 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {productDescription.images.map((image, index) => (
                  <ProductImage key={index} {...image} />
                ))}
              </div>
            </div>
          </div>
        );
      case "Specification":
        return (
          <div className="mt-8">
            {productTabContent.specifications.map((spec, index) => (
              <div key={index} className="mb-2 text-neutral-700">
                {spec}
              </div>
            ))}
          </div>
        );
      case "Reviews":
        return (
          <div className="mt-8">
            {productTabContent.reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <div className="font-semibold">
                  Rating:{" "}
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-neutral-700">{review.text}</div>
              </div>
            ))}
          </div>
        );
      case "Shipping":
        return (
          <div className="mt-8">
            {productTabContent.shipping.map((info, index) => (
              <div key={index}>
                <div className="font-semibold">
                  Estimated Delivery: {info.estimatedDelivery}
                </div>
                <div className="text-neutral-700">
                  Return Policy: {info.returnPolicy}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col max-w-[984px]">
      <div className="flex flex-wrap gap-2.5 items-center self-start text-base font-medium leading-tight whitespace-nowrap text-neutral-700 max-md:max-w-full">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            label={tab.label}
            isActive={tab.label === activeTab}
            onClick={() => setActiveTab(tab.label)}
          />
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
};
