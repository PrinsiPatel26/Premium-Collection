import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
    secondary: 'bg-[#D4AF37] text-white hover:bg-[#B5952F] focus:ring-[#D4AF37]',
    outline: 'border border-black text-black hover:bg-black hover:text-white focus:ring-black',
    ghost: 'text-black hover:bg-gray-100 focus:ring-gray-200'
  };
  const sizes = {
    sm: 'h-9 px-4 text-xs uppercase tracking-wider',
    md: 'h-11 px-6 text-sm uppercase tracking-wider',
    lg: 'h-14 px-8 text-base uppercase tracking-wider'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <motion.button whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`} {...props}>
      {children}
    </motion.button>;
}