"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category?: string;
}

const products: Product[] = [
  { id: 1, name: "CloudAdore T-Shirt", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 2, name: "CloudAdore Mug", price: "₦19,999.00", rating: 5, reviews: 36, image: "/11620da276d4d7a3f2a0b3ead90a0e05dc4d8d25.jpg" },
  { id: 3, name: "CloudAdore Tote Bag", price: "₦19,999.00", rating: 5, reviews: 36, image: "/eb67e71bc1da1c3461821942aa93f4432865a4c4.jpg" },
  { id: 4, name: "CloudAdore Cap", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cacac214782a19ede1fcb5914bb3fe8807e1f72.jpg" },
  { id: 5, name: "CloudAdore T-Shirt", price: "₦19,999.00", rating: 5, reviews: 36, image: "/78a4dbc5903710b0de13159d38598e216d35ea2d.jpg" },
  { id: 6, name: "CloudAdore Mug", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
  { id: 7, name: "CloudAdore Tote Bag", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 8, name: "CloudAdore Cap", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
  { id: 9, name: "CloudAdore T-Shirt", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 10, name: "CloudAdore Mug", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
  { id: 11, name: "CloudAdore Tote Bag", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 12, name: "CloudAdore Cap", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
  { id: 13, name: "CloudAdore T-Shirt", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 14, name: "CloudAdore Mug", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
  { id: 15, name: "CloudAdore Tote Bag", price: "₦19,999.00", rating: 5, reviews: 36, image: "/363b91030b40312af006baad4c3dc0150ca6a48c.png" },
  { id: 16, name: "CloudAdore Cap", price: "₦19,999.00", rating: 5, reviews: 36, image: "/0cbfe359c8e16b5f528cb94b20a1eb7d8f2a6d22.png" },
];

export default function ProductGrid() {
  const [cart, setCart] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Default");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const router = useRouter();

  const categories = ["All", "Apparel", "Accessories", "Bags"];
  const sortOptions = [
    "Default",
    "Price: Low to High",
    "Price: High to Low",
    "Name A-Z",
    "Name Z-A",
  ];

  const priceToNumber = (price: string) =>
    parseFloat(price.replace(/[₦,]/g, ""));

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sortOption) {
      case "Price: Low to High":
        result = [...result].sort(
          (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
        );
        break;
      case "Price: High to Low":
        result = [...result].sort(
          (a, b) => priceToNumber(b.price) - priceToNumber(a.price)
        );
        break;
      case "Name A-Z":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name Z-A":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, sortOption]);

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <section className="w-full px-6 py-10 relative">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Search */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by product name..."
            className="w-full outline-none bg-transparent text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Dropdowns & Cart */}
        <div className="flex items-center gap-3 relative">
          {/* Category */}
          <div className="relative">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="flex items-center justify-between border rounded-lg px-3 py-2 w-32 text-sm overflow-hidden"
            >
              <span className="truncate">{selectedCategory}</span>
              <ChevronDown size={14} className="ml-1 shrink-0" />
            </button>
            {showCategoryDropdown && (
              <ul className="absolute z-10 bg-white shadow-md rounded-lg mt-2 w-32 text-sm">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                      selectedCategory === cat ? "bg-blue-50 font-medium" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowCategoryDropdown(false);
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center justify-between border rounded-lg px-3 py-2 w-44 text-sm overflow-hidden"
            >
              <span className="truncate">{sortOption}</span>
              <ChevronDown size={14} className="ml-1 shrink-0" />
            </button>
            {showSortDropdown && (
              <ul className="absolute z-10 bg-white shadow-md rounded-lg mt-2 w-44 text-sm">
                {sortOptions.map((opt) => (
                  <li
                    key={opt}
                    className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${
                      sortOption === opt ? "bg-blue-50 font-medium" : ""
                    }`}
                    onClick={() => {
                      setSortOption(opt);
                      setShowSortDropdown(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart */}
          <div
            onClick={goToCart}
            className="relative cursor-pointer hover:scale-105 transition-transform"
          >
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-48 mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-gray-800 font-medium text-sm mb-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < product.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-500">{product.reviews} Reviews</span>
              </div>
              <p className="text-red-500 font-semibold mb-3 text-sm">
                {product.price}
              </p>
              <button
                onClick={() => toggleCart(product.id)}
                className="bg-blue-600 text-white py-2 text-sm rounded-md hover:bg-blue-700 transition"
              >
                {cart.includes(product.id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8 text-sm">
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
          <ChevronLeft size={16} /> Previous
        </button>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
        </div>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
          Next <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
