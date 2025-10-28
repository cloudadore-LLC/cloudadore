"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);
  const price = 14.9;
  const [subtotal, setSubtotal] = useState(price * quantity);
  const router = useRouter();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  useEffect(() => {
    setSubtotal(price * quantity);
  }, [quantity]);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-16 py-10 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-2">Shopping Cart</h1>
        <p className="text-sm text-gray-500">
          Home &nbsp;›&nbsp; <span className="text-gray-800">Your Shopping Cart</span>
        </p>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-4 border-b pb-3 mb-4 font-medium text-gray-600">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      {/* Cart Item */}
      <div className="grid grid-cols-1 md:grid-cols-4 items-center border-b pb-6 mb-6">
        {/* Product Info */}
        <div className="flex items-center space-x-4">
          <Image
            src="/hoodie.png"
            alt="Cloudadore Hoodie"
            width={80}
            height={80}
            className="rounded-md border"
          />
          <div>
            <h2 className="font-medium">Cloudadore Hoodie</h2>
            <p className="text-gray-500 text-sm">Color: Black</p>
            <button className="text-sm text-red-500 hover:underline mt-1">
              Remove
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="hidden md:block text-gray-700 font-medium">${price.toFixed(2)}</div>

        {/* Quantity */}
        <div className="flex items-center justify-start md:justify-center mt-4 md:mt-0">
          <button
            onClick={decrease}
            className="px-3 py-1 border rounded-l-md text-gray-700 hover:bg-gray-100"
          >
            -
          </button>
          <input
            type="text"
            value={quantity.toString().padStart(2, "0")}
            readOnly
            className="w-12 text-center border-t border-b"
          />
          <button
            onClick={increase}
            className="px-3 py-1 border rounded-r-md text-gray-700 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Total */}
        <div className="hidden md:block text-gray-700 font-medium">
          ${(price * quantity).toFixed(2)}
        </div>
      </div>

      {/* Mobile Total */}
      <div className="flex justify-between md:hidden mb-10 text-gray-700 font-medium">
        <span>Total:</span>
        <span>${(price * quantity).toFixed(2)}</span>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col items-end md:items-end space-y-4">
        <div className="w-full md:w-[300px] border-t pt-4">
          <div className="flex justify-between text-gray-700 mb-4">
            <p>Subtotal</p>
            <p className="font-medium">${subtotal.toFixed(2)}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-[#004C91] text-white py-3 rounded-lg shadow-md hover:bg-[#00376b] transition"
          >
            Checkout
          </button>
          <p className="text-center text-sm mt-3 text-gray-700 hover:underline cursor-pointer">
            View Cart
          </p>
        </div>
      </div>
    </section>
  );
}
