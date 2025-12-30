import { Product } from './types';
export const products: Product[] = [{
  id: '1',
  name: 'The Structured Trench',
  brand: 'LUMIÈRE',
  price: 895,
  description: 'A modern reinterpretation of the classic trench coat. Crafted from water-resistant Italian cotton gabardine with exaggerated lapels and a belted waist for a dramatic silhouette.',
  images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=1000'],
  category: 'Outerwear',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  isNew: true,
  isFeatured: true
}, {
  id: '2',
  name: 'Silk Charmeuse Gown',
  brand: 'NOIR ET BLANC',
  price: 1250,
  description: 'Fluid silk charmeuse evening gown in midnight black. Features a bias cut that drapes elegantly across the body, with a deep V-back and delicate spaghetti straps.',
  images: ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1000'],
  category: 'Dresses',
  sizes: ['0', '2', '4', '6', '8', '10'],
  isFeatured: true
}, {
  id: '3',
  name: 'Cashmere Oversized Knit',
  brand: 'LUMIÈRE',
  price: 450,
  description: 'Pure Mongolian cashmere sweater in a relaxed, oversized fit. Ribbed trims and dropped shoulders create an effortless look perfect for layering.',
  images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=1000'],
  category: 'Knitwear',
  sizes: ['XS/S', 'M/L'],
  isNew: true
}, {
  id: '4',
  name: 'Pleated Wool Trousers',
  brand: 'ARCHIVE',
  price: 395,
  description: 'High-waisted wide-leg trousers tailored from lightweight virgin wool. Double pleats at the front add volume and movement.',
  images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000'],
  category: 'Bottoms',
  sizes: ['34', '36', '38', '40', '42']
}, {
  id: '5',
  name: 'Sculptural Gold Earrings',
  brand: 'AURUM',
  price: 280,
  description: '18k gold-plated brass earrings with an organic, fluid shape inspired by molten metal. Lightweight enough for all-day wear.',
  images: ['https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'],
  category: 'Accessories',
  sizes: ['One Size'],
  isFeatured: true
}, {
  id: '6',
  name: 'Leather Ankle Boots',
  brand: 'NOIR ET BLANC',
  price: 650,
  description: 'Square-toe ankle boots crafted from smooth calfskin leather. Features a sculptural block heel and side zip closure.',
  images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1000'],
  category: 'Shoes',
  sizes: ['36', '37', '38', '39', '40', '41']
}, {
  id: '7',
  name: 'Mini Leather Tote',
  brand: 'ARCHIVE',
  price: 595,
  description: 'Structured mini tote bag in embossed crocodile leather. Gold-tone hardware and detachable shoulder strap.',
  images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000', 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000'],
  category: 'Accessories',
  sizes: ['One Size']
}, {
  id: '8',
  name: 'Velvet Blazer',
  brand: 'LUMIÈRE',
  price: 725,
  description: 'Single-breasted blazer in plush cotton velvet. Satin lapels and button cuffs add a tuxedo-inspired touch.',
  images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
  // Placeholder reuse for demo
  'https://images.unsplash.com/photo-1550614000-4b9519e02d2c?auto=format&fit=crop&q=80&w=1000'],
  category: 'Outerwear',
  sizes: ['XS', 'S', 'M', 'L'],
  isNew: true
}];