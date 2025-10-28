"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSection() {
  const [paymentOption, setPaymentOption] = useState<"transfer" | "card">("card");
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const amount = 100000;

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleContinue = () => {
    if (paymentOption === "transfer") {
      router.push("/checkout");
    } else {
      router.push("/checkout/card");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Breadcrumb */}
      <div className="w-full max-w-2xl mb-6 text-sm text-gray-500">
        <nav className="flex space-x-2">
          <span>Home</span>
          <span>/</span>
          <span>Shopping Cart</span>
          <span>/</span>
          <span className="text-blue-600 font-medium">Checkout</span>
        </nav>
      </div>

      {/* Timer */}
      <div className="mb-4 text-center text-sm text-gray-600">
        <p>
          Payment session expires in{" "}
          <span className="font-semibold text-blue-700">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </p>
      </div>

      {/* Payment Card */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Make Payment</h2>
        <hr className="mb-4" />

        {/* Payment Option */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Payment Option
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentOption === "transfer"}
                onChange={() => setPaymentOption("transfer")}
                className="accent-blue-600"
              />
              <span className="text-gray-700">Transfer</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentOption === "card"}
                onChange={() => setPaymentOption("card")}
                className="accent-blue-600"
              />
              <span className="text-gray-700">Card</span>
            </label>
          </div>
        </div>

        {/* Card Payment Form */}
        {paymentOption === "card" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9101 2345"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="mr-2 accent-blue-600"
              />
              <label className="text-sm text-gray-600">Save card details</label>
            </div>
          </>
        )}

        {/* Continue / Pay Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-blue-800 text-white py-2.5 rounded-md font-medium hover:bg-blue-900 transition"
        >
          {paymentOption === "card"
            ? `Pay ₦${amount.toLocaleString()}.00`
            : "Continue to Transfer"}
        </button>
      </div>
    </section>
  );
}
