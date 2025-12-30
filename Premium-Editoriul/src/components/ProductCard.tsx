import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../lib/types';
import { useStore } from '../lib/store';
interface ProductCardProps {
  product: Product;
  className?: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}
export function ProductCard({
  product,
  className = '',
  aspectRatio = 'portrait'
}: ProductCardProps) {
  const {
    toggleWishlist,
    isInWishlist
  } = useStore();
  const isWishlisted = isInWishlist(product.id);
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    landscape: 'aspect-[4/3]'
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }} className={`group relative ${className}`}>
      <div className={`relative overflow-hidden bg-gray-100 mb-4 ${aspectClasses[aspectRatio]}`}>
        <Link to={`/product/${product.id}`}>
          <motion.img src={product.images[0]} alt={product.name} className="w-full h-full object-cover object-center" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.6,
          ease: 'easeOut'
        }} />
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              New
            </span>}
          {product.isFeatured && <span className="bg-black/90 text-white backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              Featured
            </span>}
        </div>

        {/* Wishlist Button */}
        <button onClick={e => {
        e.preventDefault();
        toggleWishlist(product.id);
      }} className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
          <motion.div initial={false} animate={{
          scale: isWishlisted ? [1, 1.2, 1] : 1
        }} transition={{
          duration: 0.3
        }}>
            <Heart className={`w-5 h-5 transition-colors duration-300 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-black'}`} />
          </motion.div>
        </button>

        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
          <Link to={`/product/${product.id}`} className="block w-full bg-white/95 backdrop-blur-md text-black text-center py-3 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors">
            View Details
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {product.brand}
          </h3>
          <Link to={`/product/${product.id}`}>
            <h2 className="text-sm font-medium font-serif text-gray-900 hover:text-[#D4AF37] transition-colors">
              {product.name}
            </h2>
          </Link>
        </div>
        <span className="text-sm font-medium">${product.price}</span>
      </div>
    </motion.div>;
}