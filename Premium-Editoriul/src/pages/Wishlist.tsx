import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../lib/store';
import { products } from '../lib/data';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
export function Wishlist() {
  const {
    wishlist
  } = useStore();
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));
  if (wishlistProducts.length === 0) {
    return <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-500 mb-8">
          Save items you love to revisit later.
        </p>
        <Link to="/shop">
          <Button>Explore Collection</Button>
        </Link>
      </div>;
  }
  return <div className="min-h-screen pt-32 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          My Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {wishlistProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>;
}