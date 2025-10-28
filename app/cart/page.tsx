// "use client";

// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { X } from "lucide-react";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { removeFromCart, updateQuantity } from "@/lib/slices/cartSlice";

// export default function CartPage() {
//   const dispatch = useAppDispatch();
//   const cartItems = useAppSelector((state) => state.cart.items) as {
//     id: number | string;
//     quantity: number;
//     price?: number;
//     image?: string;
//     name?: string;
//     color?: string;
//   }[];

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + (item.price ?? 0) * item.quantity,
//     0
//   );
//   const shipping = 0;
//   const discount = 24;
//   const tax = 80.99;
//   const total = subtotal + shipping + tax - discount;

//   const handleRemoveItem = (id: number) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleUpdateQuantity = (id: number, quantity: number) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   return (
//     <main className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

//             {cartItems.length === 0 ? (
//               <Card className="p-8 text-center">
//                 <p className="text-muted-foreground mb-4">Your cart is empty</p>
//                 <Link href="/">
//                   <Button>Continue Shopping</Button>
//                 </Link>
//               </Card>
//             ) : (
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <Card key={item.id} className="p-4">
//                     <div className="flex gap-4">
//                       <div className="w-24 h-24 bg-muted rounded overflow-hidden flex-shrink-0">
//                         <img
//                           src={item.image || "/placeholder.svg"}
//                           alt={item.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>

//                       <div className="flex-1">
//                         <h3 className="font-semibold">{item.name}</h3>
//                         <p className="text-sm text-muted-foreground">
//                           Color: {item.color}
//                         </p>
//                         <p className="font-semibold text-primary mt-2">
//                           ${item.price}
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() =>
//                             handleUpdateQuantity(Number(item.id), item.quantity - 1)
//                           }
//                           className="w-8 h-8 rounded border border-border hover:bg-muted"
//                         >
//                           −
//                         </button>
//                         <span className="w-8 text-center">{item.quantity}</span>
//                         <button
//                           onClick={() =>
//                             handleUpdateQuantity(Number(item.id), item.quantity + 1)
//                           }
//                           className="w-8 h-8 rounded border border-border hover:bg-muted"
//                         >
//                           +
//                         </button>
//                       </div>

//                       <button
//                         onClick={() => handleRemoveItem(Number(item.id))}
//                         className="text-destructive hover:bg-destructive/10 p-2 rounded"
//                       >
//                         <X className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             )}

//             <div className="flex gap-4 mt-8">
//               <Link href="/" className="flex-1">
//                 <Button variant="outline" className="w-full bg-transparent">
//                   ← Return to Shop
//                 </Button>
//               </Link>
//               <Button variant="outline" className="flex-1 bg-transparent">
//                 Update Cart
//               </Button>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <Card className="p-6 sticky top-4">
//               <h2 className="text-lg font-bold mb-6">Card Totals</h2>

//               <div className="space-y-3 mb-6 pb-6 border-b border-border">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Sub-total</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Shipping</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Discount</span>
//                   <span>${discount.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Tax</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mb-6">
//                 <span className="font-semibold">Total</span>
//                 <span className="text-2xl font-bold text-primary">
//                   ${total.toFixed(2)} USD
//                 </span>
//               </div>

//               <Link href="/checkout">
//                 <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
//                   PROCEED TO CHECKOUT →
//                 </Button>
//               </Link>

//               <div className="space-y-3">
//                 <div>
//                   <label className="text-sm font-semibold block mb-2">
//                     Coupon Code
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter code"
//                     className="w-full px-3 py-2 border border-border rounded text-sm"
//                   />
//                 </div>
//                 <Button
//                   variant="outline"
//                   className="w-full text-orange-500 border-orange-500 bg-transparent"
//                 >
//                   APPLY COUPON
//                 </Button>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
