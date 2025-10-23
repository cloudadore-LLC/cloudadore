"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSection() {
  const [paymentOption, setPaymentOption] = useState<"transfer" | "card">("transfer");
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCardSelect = () => {
    setPaymentOption("card");
    router.push("/checkout/card");
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-full max-w-md text-sm text-gray-500 mb-6">
        <p>
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-gray-400">Shopping Cart</span> &gt;{" "}
          <span className="text-blue-600 font-medium">Checkout</span>
        </p>
      </div>

      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Make Payment</h2>
        <hr className="mb-4" />

        {/* Payment Option */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Select Payment Option</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentOption === "transfer"}
                onChange={() => setPaymentOption("transfer")}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Transfer</span>
            </label>

            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleCardSelect}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentOption === "card"}
                readOnly
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Card</span>
            </label>
          </div>
        </div>

        {/* Transfer Info */}
        {paymentOption === "transfer" && (
          <div className="space-y-2 text-gray-700 mb-6">
            <p>
              Transfer <span className="font-semibold text-gray-900">₦100,000</span> to:
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
        )}

        {/* Confirm Button */}
        <button
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-md transition-all"
          onClick={() => alert("Payment Confirmed")}
        >
          Confirm Payment
        </button>
      </div>
    </section>
  );
}
