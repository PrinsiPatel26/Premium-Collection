import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Truck, ShieldCheck, Ruler } from 'lucide-react';
import { products } from '../lib/data';
import { useStore } from '../lib/store';
import { Button } from '../components/ui/Button';
export function ProductDetail() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useStore();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState(0);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>;
  }
  const isWishlisted = isInWishlist(product.id);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    // Optional: Show toast or feedback
  };
  return <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover object-center" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => <button key={idx} onClick={() => setActiveImage(idx)} className={`aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-black' : 'border-transparent'}`}>
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="mb-8">
              <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {product.brand}
              </h2>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-medium">${product.price}</p>
            </div>

            <div className="prose prose-sm text-gray-600 mb-8 max-w-none">
              <p>{product.description}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Select Size
                </span>
                <button className="flex items-center text-xs text-gray-500 hover:text-black">
                  <Ruler className="w-3 h-3 mr-1" /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`h-12 border flex items-center justify-center text-sm transition-all ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'}`}>
                    {size}
                  </button>)}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <Button onClick={handleAddToCart} fullWidth size="lg" disabled={!selectedSize}>
                {selectedSize ? 'Add to Cart' : 'Select a Size'}
              </Button>
              <button onClick={() => toggleWishlist(product.id)} className="h-14 w-14 flex items-center justify-center border border-gray-200 hover:border-black transition-colors">
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-black'}`} />
              </button>
            </div>

            {/* Info */}
            <div className="space-y-4 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5" />
                <span>Authenticity guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}