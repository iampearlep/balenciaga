import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartState } from "@/types/cart";

const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existingProduct = get().cart.find(
          (item) => item.id === product.id
        );
        if (existingProduct) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
          }));
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      incrementItem: (productId) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decrementItem: (productId) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          ),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          }));
        } else {
          set((state) => ({
            cart: state.cart.filter((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          }));
        }
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "Store",
    }
  )
);

export default useCartStore;
