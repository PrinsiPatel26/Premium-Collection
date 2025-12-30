export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}
export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
export interface UserState {
  cart: CartItem[];
  wishlist: string[]; // Product IDs
}