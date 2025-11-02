import { useAppContext } from "../context/AppProvider";
import type { Product } from "../state/appState";
import Topbar from "./Topbar";
import HeroBackground from "./HeroBackground";
import HeaderSearch from "./HeaderSearch";
import MainGrid from "./MainGrid";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import RightToolbar from "./RightToolbar";
import CartDropdown from "./CartDropdown";
import { getProductById, getPriceAsNumber } from "../data/products";

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
  const { state, setPage, setSelectedProductId } = useAppContext();

  const products = sampleProducts;

  // header and hero background moved to dedicated components

  // TIP: Pass down an "onProductClick" prop to ProductListing
  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setPage("product");
  };

  const home = (
    <>
      <MainGrid />
      <ProductListing onProductClick={handleProductClick} />
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
              onClick={() => {
                setSelectedProductId(p.id);
                setPage("product");
              }}
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
      <h2 className="text-xl font-semibold mb-4">购物车</h2>
      {state.cart.length === 0 ? (
        <div className="text-gray-500">您的购物车是空的</div>
      ) : (
        <div className="space-y-4">
          {state.cart.map((it) => {
            const product = getProductById(it.productId);
            if (!product) return null;

            const price = getPriceAsNumber(product.currentPrice);
            const mainImage = product.images?.[0] || "";

            return (
              <div key={it.productId} className="flex items-center gap-4 bg-white p-3 rounded shadow">
                <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                  {mainImage ? (
                    <img 
                      src={mainImage} 
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs text-gray-400">图片</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{product.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    数量: {it.qty}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#e1251b] font-bold text-lg">
                    ¥{(price * it.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const handleNavigateHome = () => {
    setPage("home");
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] relative">
      {/* Dark overlay for the whole website */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          background: "rgba(34, 34, 51, 0.32)",
        }}
      /> */}
      {state.page !== "cart" && (
        <>
          {state.page !== "product" && <HeroBackground />}
          <Topbar
            isProductPage={state.page === "product"}
            onNavigateHome={handleNavigateHome}
          />
          {state.page !== "product" && (
            <div className="relative" style={{ zIndex: 100 }}>
              <HeaderSearch />
            </div>
          )}
        </>
      )}
      {state.page === "home" && home}
      {state.page === "search" && (
        <div className="max-w-6xl mx-auto px-4">{searchResults}</div>
      )}
      {state.page === "product" && productPage}
      {state.page === "cart" && cartPage}
      <CartDropdown />
      <RightToolbar />
    </div>
  );
}

