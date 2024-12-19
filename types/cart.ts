import type { Product } from "./product";

type cartItem = Product & {
  quantity: number;
  selectedSize: string;
};

export type cartState = {
  cart: cartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product & { selectedSize: string }) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  toggleCart: (open?: boolean) => void;
  clearCart: () => void;
};
