import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../lib/store';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    cartCount,
    wishlist
  } = useStore();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Shop',
    path: '/shop'
  }, {
    name: 'Collections',
    path: '/shop'
  }, {
    name: 'Editorial',
    path: '/shop'
  } // Simplified for demo
  ];
  return <>
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'} ${location.pathname !== '/' && !isScrolled ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <Link key={link.name} to={link.path} className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>)}
            </div>

            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight absolute left-1/2 transform -translate-x-1/2">
              LUMIÈRE
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="hidden md:block hover:text-[#D4AF37] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/wishlist" className="relative hover:text-[#D4AF37] transition-colors">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#D4AF37] text-white text-[10px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>}
              </Link>
              <Link to="/cart" className="relative hover:text-[#D4AF37] transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>}
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        x: '-100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '-100%'
      }} transition={{
        type: 'tween',
        duration: 0.3
      }} className="fixed inset-0 z-[60] bg-white">
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif font-bold">LUMIÈRE</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map(link => <Link key={link.name} to={link.path} className="text-2xl font-serif hover:text-[#D4AF37] transition-colors">
                    {link.name}
                  </Link>)}
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="flex flex-col space-y-4">
                  <Link to="/wishlist" className="flex items-center space-x-3 text-lg">
                    <Heart className="w-5 h-5" />
                    <span>Wishlist ({wishlist.length})</span>
                  </Link>
                  <Link to="/cart" className="flex items-center space-x-3 text-lg">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Cart ({cartCount})</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}