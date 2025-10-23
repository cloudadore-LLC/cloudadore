"use client";

import { useState, useEffect } from "react";

export default function PaymentSection() {
  const [paymentOption, setPaymentOption] = useState<"transfer" | "card">("transfer");
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const amount = 100000;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleConfirm = () => {
    if (paymentOption === "transfer") {
      alert("Transfer confirmed!");
    } else {
      alert(`Paid ₦${amount.toLocaleString()}.00 successfully!`);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16">
      {/* Breadcrumb */}
      <div className="w-full max-w-md text-sm text-gray-500 mb-6">
        <p>
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-gray-400">Shopping Cart</span> &gt;{" "}
          <span className="text-blue-600 font-medium">Checkout</span>
        </p>
      </div>

      {/* Payment Card Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Make Payment</h2>
        <hr className="mb-4" />

        {/* Payment Options */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Select Payment Option</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentOption === "transfer"}
                onChange={() => setPaymentOption("transfer")}
                className="accent-blue-600"
              />
              <span>Transfer</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentOption === "card"}
                onChange={() => setPaymentOption("card")}
                className="accent-blue-600"
              />
              <span>Card</span>
            </label>
          </div>
        </div>

        {/* Payment UI Toggle */}
        {paymentOption === "transfer" ? (
          <div className="space-y-3 text-gray-700 mb-6 transition-all">
            <p>
              Transfer <span className="font-semibold text-gray-900">₦{amount.toLocaleString()}</span> to:
            </p>
            <p className="font-semibold text-gray-900">Polaris Bank</p>
            <p className="font-mono text-gray-800 text-lg tracking-wide">0123456781</p>
            <p className="text-sm text-gray-600">
              Account Name: <span className="font-medium">Cloudadore Community</span>
            </p>
            <p className="text-sm text-gray-500">
              Expires in{" "}
              <span className="text-red-500 font-medium">
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </span>{" "}
              minutes
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 transition-all">
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
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

        {/* Confirm / Pay Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-800 text-white py-2.5 rounded-md font-medium hover:bg-blue-900 transition"
        >
          {paymentOption === "card"
            ? `Pay ₦${amount.toLocaleString()}.00`
            : "Confirm Payment"}
        </button>
      </div>
    </section>
  );
}
