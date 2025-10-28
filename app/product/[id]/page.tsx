"use client"

import { useState } from "react"
import  Header  from "@/views/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("black")

  const product = {
    id: params.id,
    name: "Cloudadore Hoodie",
    price: 39,
    originalPrice: 50,
    rating: 4.5,
    reviews: 4360,
    image: "/cloudadore-hoodie.jpg",
    images: ["/hoodie-1.jpg", "/hoodie-2.jpg", "/hoodie-3.jpg"],
    description: "Unisex Classic Pullover Hoodie",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "white", label: "White", hex: "#FFFFFF" },
      { name: "black", label: "Black", hex: "#000000" },
      { name: "blue", label: "Blue", hex: "#0066CC" },
    ],
    shipping: "Free Shipping & Returns: On all orders over $75",
    delivery: "Estimated Delivery: Jul 30 - Aug 03",
  }

  return (
    <main className="min-h-screen bg-background">
     
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex flex-col gap-4">
            <div className="bg-muted rounded-lg overflow-hidden aspect-square">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-muted rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-primary"
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-orange-400 text-orange-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.reviews.toLocaleString()} Reviews</span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">Sale</span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Size: {selectedSize}</label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded border-2 transition ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Color: {selectedColor}</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedColor === color.name
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-border"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-semibold mb-3 block">Quantity</label>
              <div className="flex items-center gap-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded border border-border hover:bg-muted"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded border border-border hover:bg-muted"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Link href='/cart'>
              <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base">Add to cart</Button>
            </Link>
          

            {/* Info */}
            <Card className="p-4 bg-muted/50 border-0">
              <p className="text-sm text-muted-foreground mb-2">{product.delivery}</p>
              <p className="text-sm text-muted-foreground">{product.shipping}</p>
            </Card>

            {/* Expandable Sections */}
            <div className="space-y-2">
              {["Product Description", "Product Description", "Product Description"].map((title, i) => (
                <Card key={i} className="p-4 cursor-pointer hover:bg-muted/50 transition">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{title}</span>
                    <span className="text-muted-foreground">+</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
