import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
export function Hero() {
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" alt="Editorial Fashion" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="inline-block text-white text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium">
            Spring / Summer 2024
          </motion.span>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            The Art of <br />
            <span className="italic">Elegance</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="text-white/90 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            Discover our curated collection of timeless pieces designed for the
            modern muse. Where sophistication meets contemporary style.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button variant="primary" size="lg" className="bg-white text-black hover:bg-[#D4AF37] hover:text-white border-none min-w-[180px]">
                Shop Collection
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black min-w-[180px]">
                View Lookbook
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
}