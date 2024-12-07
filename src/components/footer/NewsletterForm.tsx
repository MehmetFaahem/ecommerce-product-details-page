import * as React from "react";

export const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col justify-center items-center px-16 py-9 w-full leading-snug bg-[#CEE34C] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1350px] max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="text-3xl font-semibold text-stone-950">
            Subscribe to our Newsletter
          </div>
          <div className="mt-1 text-base text-neutral-700 max-md:max-w-full">
            For news, offers and so much more! No spams, we promise.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-10 py-1 pr-1 pl-4 my-auto text-sm bg-white rounded border border-solid border-neutral-500 max-md:max-w-full"
        >
          <label htmlFor="emailInput" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Email address"
            className="my-auto text-neutral-500 bg-transparent border-none outline-none"
            required
          />
          <button
            type="submit"
            className="flex flex-col justify-center items-center px-4 py-2.5 font-medium text-white whitespace-nowrap rounded bg-stone-950 min-h-[40px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
