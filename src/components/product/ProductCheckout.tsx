import React from "react";
import { ProductDetails } from "../../types/ProductDetailsType";

interface ProductCheckoutProps {
  product: ProductDetails;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  onQuantityChange: (quantity: number) => void;
}

export const ProductCheckout: React.FC<ProductCheckoutProps> = ({
  product,
  quantity,
  selectedSize,
  selectedColor,
  onQuantityChange,
}) => {
  const totalPrice = product.pricing.currentPrice * quantity;

  return (
    <div className="flex flex-col shrink py-4 bg-white rounded-md border border-solid basis-0 border-zinc-400 min-w-[340px]">
      <div className="flex flex-col items-start px-4 w-full">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-700">
              Total Price
            </span>
            <span className="mt-1 text-2xl font-semibold text-stone-950">
              {product.pricing.currency} {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="self-end text-sm text-neutral-700 pb-1">
            (VAT included)
          </span>
        </div>

        <div className="px-2.5 py-1 mt-3 text-sm font-semibold text-green-700 bg-green-700 bg-opacity-10 rounded-sm border border-green-700 border-opacity-30">
          {product.stock.status === "IN_STOCK" ? "In Stock" : "Out of Stock"}
        </div>

        <div className="mt-3 text-sm font-medium">
          <div className="flex gap-2">
            <span className="text-neutral-500">Estimated Delivery:</span>
            <span className="text-neutral-700">
              {product.delivery.estimatedRange.start} -{" "}
              {product.delivery.estimatedRange.end}
            </span>
          </div>
          <div className="mt-1.5">
            <span className="text-neutral-500">Free Return:</span>
            <span className="text-neutral-700">
              {" "}
              Within {product.delivery.returnPeriod} days of purchase
            </span>
          </div>
        </div>

        <div className="w-full mt-4 border-t border-zinc-100" />

        <div className="w-full mt-4">
          <div className="flex gap-2.5 items-center">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-neutral-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))}
              min="1"
              max={product.stock.quantity}
              className="w-28 px-3 py-2 border border-neutral-200 rounded"
            />
          </div>

          <button
            className="w-full px-16 py-3 mt-4 text-center bg-lime-300 rounded font-medium flex items-center justify-center gap-1.5"
            disabled={!selectedSize || !selectedColor}
          >
            <img
              src="/icons/buy-now.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
            Buy Now
          </button>

          <button
            className="w-full px-16 py-3 mt-2 text-center text-white bg-stone-950 rounded font-medium flex items-center justify-center gap-1.5"
            disabled={!selectedSize || !selectedColor}
          >
            <img src="/icons/cart.svg" alt="" className="w-[18px] h-[18px]" />
            Add to Cart
          </button>

          <div className="flex gap-1.5 justify-center items-center mt-4 text-sm text-neutral-500">
            <img src="/icons/secure.svg" alt="" className="w-[18px] h-[18px]" />
            Secured Payment Guaranteed
          </div>

          <div className="flex gap-2 justify-center mt-4">
            {product.paymentMethods.map((method) => (
              <img
                key={method.id}
                src={method.icon}
                alt={method.provider}
                className="h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
