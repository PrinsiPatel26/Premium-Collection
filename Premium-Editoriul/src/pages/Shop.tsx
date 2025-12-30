import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/data';
export function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Outerwear', 'Dresses', 'Knitwear', 'Bottoms', 'Accessories', 'Shoes'];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);
  return <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            The Collection
          </h1>
          <p className="text-gray-500">
            Explore our latest arrivals, featuring timeless silhouettes and
            luxurious materials.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-8 sticky top-20 bg-white z-10 py-4">
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-6 no-scrollbar">
            {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`text-sm uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === category ? 'text-black font-bold border-b-2 border-black pb-1' : 'text-gray-500 hover:text-black'}`}>
                {category}
              </button>)}
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-end">
            <button className="flex items-center text-sm uppercase tracking-wider hover:text-[#D4AF37]">
              Sort <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center text-sm uppercase tracking-wider hover:text-[#D4AF37]">
              Filter <Filter className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product}
        // Create visual interest with varying aspect ratios or spans
        className={index % 7 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} aspectRatio={index % 7 === 0 ? 'square' : 'portrait'} />)}
        </div>

        {filteredProducts.length === 0 && <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>}
      </div>
    </div>;
}