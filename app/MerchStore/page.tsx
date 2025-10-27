"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-tshirt.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 2,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/cyan-tshirt.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 3,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-white-tshirt.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 4,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/white-cap.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 5,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-hoodie.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 6,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/white-tshirt.png",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 7,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-tshirt-2.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 8,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/white-tshirt-2.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 9,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-tshirt-3.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 10,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/white-tshirt-3.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 11,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/black-tshirt-4.jpg",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: 12,
    name: "Cloudadore T-Shirt",
    price: 19999,
    image: "/white-tshirt-4.jpg",
    rating: 4.5,
    reviews: 38,
  },
];

const page = () => {
  return (
    <div className=" mx-6 ">
      {/* hero section */}
      {/* <section className="">
        <Image
          src="/FrameC.png"
          alt="merchstore hero image"
          width={1920}
          height={600}
        />
      </section> */}

      <section className="flex flex-col text-white mx-auto rounded-lg mt-2 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 md:p-40">
        <h1 className="font-bold text-center m-4 text-[30px] md:text-[80px] ">
          Support our mission
        </h1>
        <p className="text-center m-2 md:text-[25px]">
          help us keep Cloudadore free and accessible to cloud professionals
          worldwide. <br /> Your donation directly supports community growth, education
          and innovation{" "}
        </p>
      </section>

      {/* production grid */}
      <section>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div className="relative bg-muted aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full  h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-orange-400 text-orange-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.reviews} Reviews
                    </span>
                  </div>
                  <p className="text-primary font-bold mb-4">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <Button className="w-full mt-auto bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
