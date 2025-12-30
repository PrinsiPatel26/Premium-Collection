import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/data';
export function Home() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 3);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);
  return <div className="min-h-screen">
      <Hero />

      {/* Editorial Section */}
      <section className="py-24 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" alt="Editorial" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="md:pl-12">
            <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-4 block">
              Editorial
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              The Modern Silhouette
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              This season, we explore the intersection of structure and
              fluidity. Our latest campaign highlights the beauty of
              architectural tailoring softened by luxurious fabrics and
              unexpected details.
            </p>
            <Link to="/shop" className="inline-flex items-center text-black uppercase tracking-widest text-sm font-bold hover:text-[#D4AF37] transition-colors group">
              Read the Story
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection - Asymmetric Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm uppercase tracking-widest text-gray-500 mb-2 block">
                Curated
              </span>
              <h2 className="text-3xl md:text-4xl font-serif">
                Featured Collection
              </h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => <ProductCard key={product.id} product={product} className={index === 1 ? 'md:mt-12' : ''} // Stagger effect
          aspectRatio="portrait" />)}
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000" alt="Collection" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Timeless Luxury
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Crafted with precision, designed for eternity. Explore our
              signature pieces.
            </p>
            <Link to="/shop" className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          New Arrivals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {newArrivals.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </div>;
}