import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import { useStore } from '../lib/store';
import { Button } from '../components/ui/Button';
export function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useStore();
  if (cart.length === 0) {
    return <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added any items yet.
        </p>
        <Link to="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>;
  }
  return <div className="min-h-screen pt-32 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-serif mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map(item => <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 py-6 border-b border-gray-100">
                <Link to={`/product/${item.id}`} className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        {item.brand}
                      </h3>
                      <Link to={`/product/${item.id}`} className="text-lg font-serif hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        Size: {item.selectedSize}
                      </p>
                    </div>
                    <p className="font-medium">${item.price * item.quantity}</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-gray-200">
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)} className="p-2 hover:bg-gray-50">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)} className="p-2 hover:bg-gray-50">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-xs text-gray-400 hover:text-red-500 underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 sticky top-32">
              <h2 className="text-xl font-serif mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (Estimated)</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${cartTotal}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="mt-6 text-center">
                <Link to="/shop" className="text-xs uppercase tracking-widest text-gray-500 hover:text-black">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}