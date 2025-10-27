// "use client"

// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ChevronRight } from "lucide-react"
// import { useAppDispatch, useAppSelector } from "@/lib/hooks"
// import { setStep, setPaymentMethod, resetCheckout } from "@/lib/slices/checkoutSlice"

// export default function CheckoutPage() {
//   const dispatch = useAppDispatch()
//   const step = useAppSelector((state) => state.checkout.step)
//   const paymentMethod = useAppSelector((state) => state.checkout.paymentMethod)
//   const cartItems = useAppSelector((state) => state.cart.items)

//   const subtotal = cartItems.reduce((sum, item) => sum + ((item as any).price ?? 0) * item.quantity, 0)
//   const shipping = 0
//   const tax = 80.99
//   const total = subtotal + shipping + tax

//   const handlePaymentSuccess = () => {
//     dispatch(setStep(2))
//   }

//   const handleContinueShopping = () => {
//     dispatch(resetCheckout())
//   }

//   return (
//     <main className="min-h-screen bg-background">
      
//       <div className="container mx-auto px-4 py-8">
//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
//           <Link href="/" className="hover:text-foreground">
//             Home
//           </Link>
//           <ChevronRight className="w-4 h-4" />
//           <Link href="/cart" className="hover:text-foreground">
//             Shopping Cart
//           </Link>
//           <ChevronRight className="w-4 h-4" />
//           <span className="text-foreground">Checkout</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Checkout Form */}
//           <div className="lg:col-span-2">
//             {step === 1 && (
//               <Card className="p-8">
//                 <h2 className="text-2xl font-bold mb-6">Make Payment</h2>

//                 <div className="space-y-4 mb-8">
//                   <label
//                     className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition"
//                     onClick={() => dispatch(setPaymentMethod("transfer"))}
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       checked={paymentMethod === "transfer"}
//                       onChange={() => dispatch(setPaymentMethod("transfer"))}
//                       className="w-4 h-4"
//                     />
//                     <span className="font-semibold">Transfer</span>
//                   </label>

//                   <label
//                     className="flex items-center gap-3 p-4 border-2 border-primary rounded-lg cursor-pointer bg-primary/5"
//                     onClick={() => dispatch(setPaymentMethod("card"))}
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       checked={paymentMethod === "card"}
//                       onChange={() => dispatch(setPaymentMethod("card"))}
//                       className="w-4 h-4"
//                     />
//                     <span className="font-semibold">Card</span>
//                   </label>
//                 </div>

//                 {paymentMethod === "transfer" && (
//                   <div className="space-y-4 p-4 bg-muted/50 rounded-lg mb-8">
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Transfer Amount</p>
//                       <p className="font-bold text-lg">₦{total.toFixed(2)}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Polaris Bank</p>
//                       <p className="font-bold">0123456781</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Account Name</p>
//                       <p className="font-bold">Cloudadore Community</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Expires in</p>
//                       <p className="font-bold text-orange-500">10:00 minutes</p>
//                     </div>
//                   </div>
//                 )}

//                 {paymentMethod === "card" && (
//                   <div className="space-y-4 mb-8">
//                     <div>
//                       <label className="text-sm font-semibold block mb-2">Card Number</label>
//                       <input
//                         type="text"
//                         placeholder="1234 5678 9012 2345"
//                         className="w-full px-4 py-2 border border-border rounded-lg"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-sm font-semibold block mb-2">Expiration Date</label>
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-full px-4 py-2 border border-border rounded-lg"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-sm font-semibold block mb-2">CVV</label>
//                         <input
//                           type="text"
//                           placeholder="123"
//                           className="w-full px-4 py-2 border border-border rounded-lg"
//                         />
//                       </div>
//                     </div>
//                     <label className="flex items-center gap-2">
//                       <input type="checkbox" className="w-4 h-4" />
//                       <span className="text-sm">Save card details</span>
//                     </label>
//                   </div>
//                 )}

//                 <Button className="w-full bg-primary hover:bg-primary/90 h-12" onClick={handlePaymentSuccess}>
//                   {paymentMethod === "transfer" ? "Confirm Payment" : `Pay ₦${total.toFixed(2)}`}
//                 </Button>
//               </Card>
//             )}

//             {step === 2 && (
//               <Card className="p-8 text-center">
//                 <div className="mb-6">
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-3xl">✓</span>
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
//                 <p className="text-muted-foreground mb-8">
//                   Your order has been confirmed. You will receive a confirmation email shortly.
//                 </p>
//                 <Link href="/">
//                   <Button className="bg-primary hover:bg-primary/90" onClick={handleContinueShopping}>
//                     Continue Shopping
//                   </Button>
//                 </Link>
//               </Card>
//             )}
//           </div>

//           {/* Order Summary */}
//           <div>
//             <Card className="p-6 sticky top-4">
//               <h3 className="font-bold mb-4">Order Summary</h3>
//               <div className="space-y-3 mb-6 pb-6 border-b border-border">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span>
//                       {(item as any).name ?? item.id} × {item.quantity}
//                     </span>
//                     <span>${(((item as any).price ?? 0) * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-2 text-sm mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Subtotal</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Shipping</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground">Tax</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//               </div>
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span className="text-primary">${total.toFixed(2)} USD</span>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
