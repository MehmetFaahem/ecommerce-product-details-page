import * as React from "react";
import { SocialIcon } from "./SocialIcon";
import { FooterLinkSection } from "./FooterLinkSection";
import { NewsletterForm } from "./NewsletterForm";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9b0ae51d85127587648f5dc626bfa936631eb288797c99c3d7aef00e555f406?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a531c805707fa0801d2103ff7cbe3dc063a227cb453e767ef1bd62fb4acd80?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7791aa5f0f8d0fc9ccf4168eee74bf9e51e1fe4e3b642df824bae8788c16f5c?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f205896a67d24d2caf70cf79495cfa8fe7f5528e8a663ccf78dab4ec2fc411ef?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d335bae65d4b059d88e0666aa9470bac1402f888d4595b6551b66a1112ace20?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20",
    alt: "Social media icon",
  },
];

const footerSections = [
  {
    title: "Pages",
    links: ["About", "Team", "Blogs", "Order Tracking", "Join Us"],
  },
  {
    title: "Others",
    links: ["Affiliate", "Vouchers", "Shipping & Delivery", "Brands"],
  },
  {
    title: "Information",
    links: [
      "FAQs",
      "Shipping & Delivery",
      "Return & Exchange",
      "Refund Policy",
      "Terms & Conditions",
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col py-10 mt-10 max-md:px-5">
      <NewsletterForm />
      <div className="self-center mt-16 max-w-full w-[1350px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3 items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6db7952aeac2c0b0636a1c6f562417c7ca83d8ba13f85324adae6ea995c02c94?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
                  alt="Molymart logo"
                  className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
                />
                <div className="flex flex-col self-stretch my-auto w-[130px]">
                  <div className="text-3xl font-semibold leading-none text-stone-950">
                    Molymart
                  </div>
                  <div className="text-xs leading-tight text-stone-950 text-opacity-70">
                    Making shopping better
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-4 text-base leading-5 text-neutral-500 max-md:max-w-full">
                Breaking the barrier between customers and business with a
                service focused ecommerce all around the world.
              </div>
              <div className="flex gap-6 items-center mt-7">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
              <div className="flex flex-col mt-7 text-base leading-snug text-stone-950">
                <div className="font-medium text-neutral-500">Helpline -</div>
                <div className="flex gap-1 items-center self-start mt-1 text-2xl font-semibold leading-tight">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/89be574fcb76e441008a73bb95516bcc8a4a2edb430a98a483c6dc9fcb12b38c?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
                    alt="Phone icon"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                  />
                  <div className="self-stretch my-auto">(123) 456 789</div>
                </div>
                <div className="mt-1">Email: support@molymart.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {footerSections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0 ? "w-[27%]" : "w-[36%]"
                    } max-md:ml-0 max-md:w-full`}
                  >
                    <FooterLinkSection {...section} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 w-full border border-solid border-neutral-200 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between self-center mt-4 w-full text-sm leading-relaxed max-w-[1320px] text-stone-950 max-md:max-w-full">
        <div className="my-auto">© Molymart. All rights reserved</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1715b73db585bb6e04528c14e848918c61b48b188b45daa41fbd9e5d7804dc9b?placeholderIfAbsent=true&apiKey=b01c7e4bd84f4d2cb00889f4e5559d20"
          alt="Payment methods"
          className="object-contain aspect-[12.82] w-[360px]"
        />
      </div>
    </div>
  );
};
