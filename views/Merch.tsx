import MerchCrad from "@/components/MerchCrad";
import React from "react";
const products = [
  {
    id: 1,
    name: "CloudAdore T-Shirt",
    price: "₦19,999.00",
    image: "/TS1.png",
  },
  {
    id: 2,
    name: "CloudAdore T-Shirt",
    price: "₦19,999.00",
    image: "/TS2.svg",
  },
  {
    id: 3,
    name: "CloudAdore T-Shirt",
    price: "₦19,999.00",
    image: "/TS3.svg",
  },
  {
    id: 4,
    name: "CloudAdore T-Shirt",
    price: "₦19,999.00",
    image: "/TS4.svg",
  },
];

const Merch = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Own the Cloud Look</h2>
          <p className="text-gray-600">
            Premium merch for innovators, dreamers, and cloud enthusiasts
            everywhere.
          </p>
        </div>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          Visit Store →
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <MerchCrad
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            buttonText="Add to Cart"
          />
        ))}
      </div>
    </section>
  );
};

export default Merch;
