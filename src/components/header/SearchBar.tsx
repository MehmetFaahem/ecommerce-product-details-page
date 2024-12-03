import * as React from "react";
import { SearchBarProps } from "../../types/HeaderTypes";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showCategories, setShowCategories] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-sm leading-snug w-[50%] max-lg:w-full max-lg:order-3 max-lg:mt-4"
    >
      <div className="flex flex-wrap gap-2 justify-between py-1 pr-3 pl-1 w-full bg-white rounded border border-solid border-neutral-500 max-lg:max-w-full">
        <div className="flex gap-2 items-center flex-1 min-w-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCategories(!showCategories)}
              className="flex flex-col justify-center items-center self-stretch p-2.5 my-auto font-medium text-white rounded bg-stone-950 min-h-[40px] w-[132px] max-sm:w-[140px] max-sm:p-2 hover:bg-stone-800 transition-colors"
            >
              <div className="flex gap-1.5 justify-center items-center">
                <span className="self-stretch my-auto truncate max-sm:text-sm">
                  All Categories
                </span>
                <img
                  loading="lazy"
                  src="/src/assets/arrow-down-white.png"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  alt=""
                />
              </div>
            </button>
            {showCategories && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-neutral-200 rounded shadow-lg z-10">
                <div className="flex flex-col">
                  {["Category 1", "Category 2"].map((category) => (
                    <a
                      href="#"
                      className="hover:bg-neutral-200 transition-colors px-4 py-2"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search product here.."
            className="self-stretch my-auto text-neutral-500 border-none outline-none w-full min-w-0"
            aria-label="Search products"
          />
        </div>
        <button
          type="submit"
          className="hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label="Search"
        >
          <img
            loading="lazy"
            src="/src/assets/search.png"
            className="object-contain shrink-0 my-auto aspect-square w-[22px]"
            alt=""
          />
        </button>
      </div>
    </form>
  );
};
