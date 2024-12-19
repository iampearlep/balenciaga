import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartState } from "@/types/cart";

const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,

      addToCart: (product) => {
        const existingProduct = get().cart.find(
          (item) => item.id === product.id && item.selectedSize === product.selectedSize
        );

        if (existingProduct) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id && item.selectedSize === product.selectedSize
                ? { ...item, quantity: (item.quantity || 0) + 1 }
                : item
            ),
            isCartOpen: true
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
            isCartOpen: true
          }));
        }
      },

      removeFromCart: (productId, selectedSize) => {
        set((state) => ({
          cart: state.cart.filter((item) => 
            !(item.id === productId && item.selectedSize === selectedSize)
          ),
        }));
      },

      updateQuantity: (productId, selectedSize, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            cart: state.cart.filter(
              (item) => !(item.id === productId && item.selectedSize === selectedSize)
            ),
          }));
        } else {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === productId && item.selectedSize === selectedSize 
                ? { ...item, quantity } 
                : item
            ),
          }));
        }
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + (item.price || 0) * item.quantity,
          0
        );
      },

      toggleCart: (open) => {
        set((state) => ({ isCartOpen: open ?? !state.isCartOpen }));
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cartStore",
    }
  )
);

export default useCartStore;
