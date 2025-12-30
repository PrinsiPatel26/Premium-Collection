import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useStore } from '../lib/store';
import { Button } from '../components/ui/Button';
export function Checkout() {
  const {
    cart,
    cartTotal
  } = useStore();
  const [step, setStep] = useState(1);
  const [isBillingOpen, setIsBillingOpen] = useState(true);
  // GST Calculation (18%)
  const gstRate = 0.18;
  const gstAmount = Math.round(cartTotal * gstRate);
  const finalTotal = cartTotal + gstAmount;
  return <div className="min-h-screen pt-32 pb-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Forms */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif">1. Contact Information</h2>
                {step > 1 && <Check className="text-green-500 w-5 h-5" />}
              </div>

              {step === 1 && <form className="space-y-4" onSubmit={e => {
              e.preventDefault();
              setStep(2);
            }}>
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                    <input type="text" placeholder="Last Name" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                  </div>
                  <input type="text" placeholder="Address" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="City" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                    <input type="text" placeholder="Postal Code" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" required />
                  </div>
                  <Button type="submit" fullWidth className="mt-4">
                    Continue to Shipping
                  </Button>
                </form>}
            </div>

            {/* Shipping (Mock) */}
            <div className={`bg-white p-8 shadow-sm ${step < 2 ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif">2. Shipping Method</h2>
                {step > 2 && <Check className="text-green-500 w-5 h-5" />}
              </div>

              {step === 2 && <div className="space-y-4">
                  <div className="border border-black p-4 flex justify-between items-center bg-gray-50">
                    <span className="text-sm font-medium">
                      Standard Shipping (3-5 Days)
                    </span>
                    <span className="font-bold">Free</span>
                  </div>
                  <Button onClick={() => setStep(3)} fullWidth>
                    Continue to Payment
                  </Button>
                </div>}
            </div>

            {/* Payment (Mock) */}
            <div className={`bg-white p-8 shadow-sm ${step < 3 ? 'opacity-50 pointer-events-none' : ''}`}>
              <h2 className="text-xl font-serif mb-6">3. Payment</h2>
              {step === 3 && <div className="space-y-4">
                  <div className="p-4 border border-gray-200 text-center text-gray-500 text-sm">
                    Payment integration is mocked for this demo.
                  </div>
                  <Button fullWidth variant="secondary" onClick={() => alert('Order Placed Successfully!')}>
                    Place Order
                  </Button>
                </div>}
            </div>
          </div>

          {/* Right Column: Order Summary & GST Breakdown */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white p-8 shadow-sm">
              <h2 className="text-xl font-serif mb-6">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2">
                {cart.map(item => <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.brand} | Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      ${item.price * item.quantity}
                    </p>
                  </div>)}
              </div>

              {/* Billing Breakdown Accordion */}
              <div className="border-t border-gray-100 pt-4">
                <button onClick={() => setIsBillingOpen(!isBillingOpen)} className="flex items-center justify-between w-full text-sm font-medium mb-4 hover:text-[#D4AF37] transition-colors">
                  <span>Billing Details</span>
                  {isBillingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {isBillingOpen && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} className="space-y-3 text-sm overflow-hidden">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal (Net)</span>
                        <span>${cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>GST (18%)</span>
                        <span>${gstAmount}</span>
                      </div>
                      <div className="border-t border-gray-200 my-2" />
                    </motion.div>}
                </AnimatePresence>

                <div className="flex justify-between items-center text-lg font-serif font-bold mt-2">
                  <span>Total</span>
                  <span>${finalTotal}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">
                  Includes all applicable taxes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}