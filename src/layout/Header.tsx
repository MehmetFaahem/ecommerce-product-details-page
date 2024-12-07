import * as React from "react";
import { NavLink } from "../components/header/NavLink";
import { LanguageSelector } from "../components/header/LanguageSelector";
import { CurrencySelector } from "../components/header/CurrencySelector";
import { CartWidget } from "../components/header/CartWidget";
import { SearchBar } from "../components/header/SearchBar";
import { BreadcrumbItem } from "../components/header/Breadcrumb";
import { HeaderProps } from "../types/HeaderTypes";
import usFlag from "../assets/us-flag.png";
import logo from "../assets/logo.png";
import userIcon from "../assets/tabler-icon-user.png";

export const Header: React.FC<HeaderProps> = ({
  onLanguageChange,
  onCurrencyChange,
  onSearch,
  onCategorySelect,
  onCartClick,
  cartCount,
  cartTotal,
  currentLanguage,
  currentCurrency,
}) => {
  const navLinks = [
    { text: "Demo", hasDropdown: true, href: "/demo" },
    { text: "Shop", hasDropdown: false, href: "/shop" },
    { text: "Product", hasDropdown: false, href: "/product" },
    { text: "Blog", hasDropdown: false, href: "/blog" },
    { text: "Pages", hasDropdown: true, href: "/pages" },
  ];

  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Fashion", href: "/fashion" },
    { text: "Women", isActive: true, href: "/fashion/women" },
    { text: "Winter", isActive: false, href: "/fashion/women/winter" },
    {
      text: "Charms charisma heavy winter full sleeve jacket with hoodie for women..",
      href: "/product/winter-jacket",
      isActive: false,
      isLast: true,
    },
  ];

  return (
    <header className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-16 py-2.5 w-full text-sm leading-relaxed bg-white text-stone-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap justify-between gap-10 max-lg:gap-4 max-md:flex-col max-md:items-center w-full max-w-[1320px] max-md:max-w-full">
          <div>Free shopping worldwide from orders above $500</div>
          <div className="flex gap-4 items-center">
            <LanguageSelector
              code={currentLanguage}
              flag={usFlag}
              onSelect={onLanguageChange}
            />
            <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-200 h-[18px]" />
            <CurrencySelector
              code={currentCurrency}
              onSelect={onCurrencyChange}
            />
            <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-200 h-[18px]" />
            <a
              href="tel:+1234567890"
              className="gap-2 self-stretch my-auto hover:text-lime-600 transition-colors"
            >
              Helpline: (123) 456 789
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-16 py-7 w-full bg-[#CEE34C] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:gap-0 justify-between w-full max-w-[1320px] max-md:max-w-full">
          <a
            href="/"
            className="flex gap-2.5 items-center hover:opacity-90 transition-opacity"
          >
            <img
              loading="lazy"
              src={logo}
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
              alt="Molymart logo"
            />
            <div className="flex flex-col self-stretch my-auto w-[131px]">
              <h1 className="text-2xl font-semibold leading-none text-stone-950">
                Molymart
              </h1>
              <p className="text-xs leading-tight text-stone-950 text-opacity-70 mt-1">
                Making shopping better
              </p>
            </div>
          </a>

          <SearchBar onSearch={onSearch} onCategorySelect={onCategorySelect} />

          <div className="flex gap-7 max-sm:gap-4 items-center my-auto text-lg font-medium leading-snug text-stone-950">
            <a
              href="/signin"
              className="flex gap-2 items-center self-stretch my-auto hover:text-lime-600 transition-colors"
            >
              <img
                loading="lazy"
                src={userIcon}
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
                alt=""
              />
              <span className="self-stretch my-auto max-sm:hidden">
                Sign in / up
              </span>
            </a>
            <CartWidget
              count={cartCount}
              total={cartTotal}
              onCartClick={onCartClick}
            />
          </div>
        </div>
      </div>

      <nav className="flex flex-col justify-center items-center px-16 py-3.5 w-full font-medium bg-white border-b border-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:gap-2 justify-between w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-6 items-center text-base max-md:text-xs leading-relaxed whitespace-nowrap text-stone-950">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
          </div>
          <div className="flex gap-3.5 items-center max-md:text-sm">
            <a
              href="/compare"
              className="gap-1.5 self-stretch my-auto text-base max-md:text-xs leading-relaxed whitespace-nowrap text-stone-950 hover:text-lime-600 transition-colors"
            >
              Compare
            </a>
            <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-200 h-[18px]" />
            <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
              <a
                href="/wishlist"
                className="self-stretch my-auto text-base max-md:text-xs leading-relaxed text-stone-950 hover:text-lime-600 transition-colors"
              >
                Wishlist
              </a>
              <div className="flex flex-col justify-center self-stretch py-px my-auto text-sm leading-snug text-center text-white w-[22px]">
                <div className="pt-px bg-red-600 rounded-full h-[22px] w-[22px] flex items-center justify-center">
                  3
                </div>
              </div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-200 h-[18px]" />
            <a
              href="/track"
              className="gap-1.5 self-stretch my-auto text-base max-md:text-xs leading-relaxed text-stone-950 hover:text-lime-600 transition-colors"
            >
              Track Order
            </a>
          </div>
        </div>
      </nav>

      <nav
        aria-label="Breadcrumb"
        className="flex flex-col justify-center items-center px-16 py-5 w-full text-base font-medium bg-stone-100 text-neutral-500 max-md:px-5 max-md:max-w-full"
      >
        <div className="flex flex-wrap gap-1 justify-center items-center max-md:max-w-full">
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </div>
      </nav>
    </header>
  );
};
