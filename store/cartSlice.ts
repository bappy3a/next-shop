import { IProduct } from "@/types/products";
import { PRODUCTS } from "@/utils/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
  products: IProduct[];
}

const initialState: ICartState = {
  items: [],
  products: PRODUCTS,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload as {
        product: IProduct;
        quantity: number;
      };
      const existingItem = state.items.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingItem !== -1) {
        state.items[existingItem].quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload as string;
      state.items = state.items.filter((item) => item.product.id !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
