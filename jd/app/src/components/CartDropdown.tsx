import { useAppContext } from "../context/AppProvider";
import { FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// Mock product data - all products are the same for now
const mockProduct = {
  id: "1",
  title: "正压式长管空气呼吸器防吸毒毒防全面罩井下可通话带通讯作业面具 通...",
  price: 3629.0,
  image: "",
};

export default function CartDropdown() {
  const {
    state,
    removeFromCart,
    updateCartQuantity,
    closeCartDropdown,
    setPage,
  } = useAppContext();

  // This ref will store the computed left & top for the dropdown position
  const [dropdownPosition, setDropdownPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  // We detect the cart button and position the dropdown under it (if visible)
  useEffect(() => {
    if (!state.showCartDropdown) return;
    // Find the cart button by aria-label or a stable selector, fallback to first "购物车" button
    let cartButton: HTMLElement | null = null;
    // First try: Topbar "购物车" button. (Assume only one .Topbar at a time!)
    const cartButtons = Array.from(document.querySelectorAll("button"));
    for (let btn of cartButtons) {
      // The image alt or "购物车" text inside
      if (
        btn.innerText.includes("购物车") ||
        Array.from(btn.querySelectorAll("img")).some(
          (img) => img.getAttribute("alt") === "购物车"
        )
      ) {
        cartButton = btn;
        break;
      }
    }
    if (cartButton) {
      const rect = cartButton.getBoundingClientRect();
      // The dropdown should be left-aligned to the cart button, or slightly right if there's not enough space
      // The dropdown is fixed, so use viewport coordinates (rect.left, rect.bottom)
      // Vertical: Drop down below button (rect.bottom)
      // Horizontal: Align left with cart button, but prevent overflow right edge
      const dropdownWidth = 384; // 96 * 4 = 384px (w-96)
      const paddingMargin = 12; // 12px gap
      let left = rect.left;
      if (left + dropdownWidth + paddingMargin > window.innerWidth) {
        left = window.innerWidth - dropdownWidth - paddingMargin;
      }
      if (left < paddingMargin) left = paddingMargin;
      setDropdownPosition({
        left,
        top: rect.bottom + 4, // 4px gap (adjust as you like)
      });
    } else {
      setDropdownPosition(null);
    }
  }, [state.showCartDropdown]);

  if (!state.showCartDropdown) {
    return null;
  }

  const cartItems = state.cart;
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + mockProduct.price * item.qty;
  }, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-transparent"
        style={{ top: "36px" }}
        onClick={closeCartDropdown}
      />
      {/* Cart Dropdown */}
      <div
        className="fixed bg-white rounded-lg shadow-2xl z-[9999] max-h-[600px] flex flex-col w-96"
        style={{
          // Use calculated position if available, else fallback to original style
          left: dropdownPosition ? dropdownPosition.left : undefined,
          top: dropdownPosition ? dropdownPosition.top : "36px",
          right:
            dropdownPosition === null
              ? "max(42px, calc((100vw - 1550px) / 2))"
              : undefined,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">购物车</h3>
          <button
            onClick={closeCartDropdown}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            type="button"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>购物车是空的</p>
              <p className="text-sm mt-2">快去选购心仪的商品吧~</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#e1251b] transition-colors"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                    {/* Placeholder for image */}
                    <span className="text-xs text-gray-400">图片</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 line-clamp-2 mb-2">
                      {mockProduct.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-[#e1251b] font-bold">
                        ¥{mockProduct.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Quantity controls */}
                        <button
                          onClick={() => removeFromCart(item.productId, false)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-[#e1251b] hover:text-[#e1251b] transition-colors text-xs"
                        >
                          -
                        </button>
                        <span className="text-sm text-gray-700 w-8 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.productId, item.qty + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-[#e1251b] hover:text-[#e1251b] transition-colors text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromCart(item.productId, true)}
                    className="text-gray-400 hover:text-[#e1251b] transition-colors flex-shrink-0"
                    title="删除"
                    type="button"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          {cartItems.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">共 {cartCount} 件商品</span>
                <span className="text-lg font-bold text-[#e1251b]">
                  总计: ¥{totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  closeCartDropdown();
                  setPage("cart");
                }}
                className="w-full py-2 bg-[#e1251b] text-white rounded font-semibold hover:bg-[#c41e1a] transition-colors cursor-pointer"
              >
                去结算
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                closeCartDropdown();
                setPage("home");
              }}
              className="w-full py-2 bg-[#e1251b] text-white rounded font-semibold hover:bg-[#c41e1a] transition-colors cursor-pointer"
            >
              去购物
            </button>
          )}
        </div>
      </div>
    </>
  );
}

