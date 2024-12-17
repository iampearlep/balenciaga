import type { Product } from "./product";

type cartItem = Product & {
  quantity: number;
};

export type cartState = {
  cart: cartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
};
