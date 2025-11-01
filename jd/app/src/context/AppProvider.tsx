import { createContext, useContext, useMemo, useCallback, type ReactNode } from "react";
import { useDojoState } from "@chakra-dev/dojo-hooks";
import { initialState, type AppState, type CartItem, type Page } from "../state/appState";

interface AppContextType {
  state: AppState;
  setPage: (page: Page) => void;
  setSearchQuery: (query: string) => void;
  setSelectedProductId: (productId: string | null) => void;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string, removeAll?: boolean) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  toggleCartDropdown: () => void;
  closeCartDropdown: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useDojoState<AppState>(initialState);

  const setPage = useCallback(
    (page: Page) => {
      setState((prev) => ({ ...prev, page }));
    },
    [setState]
  );

  const setSearchQuery = useCallback(
    (query: string) => {
      setState((prev) => ({ ...prev, searchQuery: query }));
    },
    [setState]
  );

  const setSelectedProductId = useCallback(
    (productId: string | null) => {
      setState((prev) => ({ ...prev, selectedProductId: productId }));
    },
    [setState]
  );

  const addToCart = useCallback(
    (productId: string, quantity: number = 1) => {
      setState((prev) => {
        const existing = prev.cart.find((item) => item.productId === productId);
        let updatedCart: CartItem[];
        if (existing) {
          updatedCart = prev.cart.map((item) =>
            item.productId === productId ? { ...item, qty: item.qty + quantity } : item
          );
        } else {
          updatedCart = [...prev.cart, { productId, qty: quantity }];
        }
        return {
          ...prev,
          cart: updatedCart,
        };
      });
    },
    [setState]
  );

  const removeFromCart = useCallback(
    (productId: string, removeAll: boolean = false) => {
      setState((prev) => {
        const existingItem = prev.cart.find((item) => item.productId === productId);
        if (!existingItem) return prev;

        if (removeAll || existingItem.qty === 1) {
          return {
            ...prev,
            cart: prev.cart.filter((item) => item.productId !== productId),
          };
        } else {
          return {
            ...prev,
            cart: prev.cart.map((item) =>
              item.productId === productId ? { ...item, qty: item.qty - 1 } : item
            ),
          };
        }
      });
    },
    [setState]
  );

  const updateCartQuantity = useCallback(
    (productId: string, quantity: number) => {
      setState((prev) => {
        const existing = prev.cart.find((item) => item.productId === productId);
        if (!existing) return prev;

        if (quantity <= 0) {
          return {
            ...prev,
            cart: prev.cart.filter((item) => item.productId !== productId),
          };
        }

        return {
          ...prev,
          cart: prev.cart.map((item) =>
            item.productId === productId ? { ...item, qty: quantity } : item
          ),
        };
      });
    },
    [setState]
  );

  const toggleCartDropdown = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showCartDropdown: !prev.showCartDropdown,
    }));
  }, [setState]);

  const closeCartDropdown = useCallback(() => {
    setState((prev) => ({ ...prev, showCartDropdown: false }));
  }, [setState]);

  const value = useMemo(
    () => ({
      state,
      setPage,
      setSearchQuery,
      setSelectedProductId,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleCartDropdown,
      closeCartDropdown,
    }),
    [
      state,
      setPage,
      setSearchQuery,
      setSelectedProductId,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleCartDropdown,
      closeCartDropdown,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

