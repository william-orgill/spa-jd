import { useDojoState, dojo } from "@chakra-dev/dojo-hooks";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
};

export type CartItem = { productId: string; qty: number };
export type Page = "home" | "search" | "product" | "cart";

export type AppState = {
  page: Page;
  searchQuery: string;
  selectedProductId: string | null;
  cart: CartItem[];
};

export const initialState: AppState = {
  page: "home",
  searchQuery: "",
  selectedProductId: null,
  cart: [],
};

export function useAppState() {
  return useDojoState<AppState>(initialState);
}

export { dojo };


