import { useMemo } from "react";
import { useAppState } from "../state/appState";
import type { Product } from "../state/appState";
import Topbar from "./Topbar";
import HeroBackground from "./HeroBackground";
import HeaderSearch from "./HeaderSearch";
import MainGrid from "./MainGrid";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import RightToolbar from "./RightToolbar";

const sampleProducts: Product[] = [
  {
    id: "p1",
    title: "Apple iPhone 15 Pro",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1696446707358-9f97a78e3e01?q=80&w=600&auto=format&fit=crop",
    category: "Phones",
  },
  {
    id: "p2",
    title: "Midea Rice Cooker",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1586201375774-061a3be1b87f?q=80&w=600&auto=format&fit=crop",
    category: "Home",
  },
  {
    id: "p3",
    title: "Xiaomi Robot Vacuum",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593011955256-4b9e01d1bb7a?q=80&w=600&auto=format&fit=crop",
    category: "Appliances",
  },
  {
    id: "p4",
    title: "Thermos Bottle",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1561715276-a2d087060f1e?q=80&w=600&auto=format&fit=crop",
    category: "Daily",
  },
];

export default function JDApp() {
  const [state, setState] = useAppState();

  const products = sampleProducts;

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === state.selectedProductId) || null,
    [state.selectedProductId]
  );

  const addToCart = (productId: string) => {
    setState((prev) => {
      const existing = prev.cart.find((c) => c.productId === productId);
      let next = prev.cart;
      if (existing) {
        next = prev.cart.map((c) =>
          c.productId === productId ? { ...c, qty: c.qty + 1 } : c
        );
      } else {
        next = [...prev.cart, { productId, qty: 1 }];
      }
      return { ...prev, cart: next };
    });
  };

  // header and hero background moved to dedicated components

  const home = (
    <>
      <MainGrid />
      <ProductListing />
      <Footer />
    </>
  );

  const searchResults = (() => {
    const q = state.searchQuery.toLowerCase();
    const filtered = products.filter(
      (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
    return (
      <div className="max-w-6xl mx-auto p-4 z-10">
        <div className="text-sm text-gray-600 mb-2">Search results for “{state.searchQuery}”</div>
        <div className="grid grid-cols-4 gap-4">
          {filtered.map((p) => (
            <button
              key={p.id}
              className="bg-white rounded shadow text-left"
              onClick={() =>
                setState((prev) => ({ ...prev, page: "product", selectedProductId: p.id }))
              }
            >
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-t" />
              <div className="p-3">
                <div className="font-medium line-clamp-2 h-10">{p.title}</div>
                <div className="text-[#e1251b] font-bold mt-2">${p.price}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  })();

  const productPage = <ProductDetail />;

  const cartPage = (
    <div className="max-w-4xl mx-auto p-6 relative z-10">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {state.cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {state.cart.map((it) => {
            const p = products.find((pp) => pp.id === it.productId)!;
            return (
              <div key={it.productId} className="flex items-center gap-4 bg-white p-3 rounded shadow">
                <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-500">Qty: {it.qty}</div>
                </div>
                <div className="text-[#e1251b] font-bold">${(p.price * it.qty).toFixed(2)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f7fb] relative">
      {state.page !== "product" && state.page !== "cart" && (
        <>
          <HeroBackground />
          <Topbar />
          <div className="relative z-10">
            <HeaderSearch />
          </div>
        </>
      )}
      {state.page === "home" && home}
      {state.page === "search" && (
        <div className="max-w-6xl mx-auto px-4">{searchResults}</div>
      )}
      {state.page === "product" && productPage}
      {state.page === "cart" && cartPage}
      <RightToolbar />
    </div>
  );
}


