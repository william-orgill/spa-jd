import { FiHome, FiSmartphone, FiChevronLeft } from "react-icons/fi";
import { useAppContext } from "../context/AppProvider";
import type { IconType } from "react-icons";
import React from "react";
import cart from "../icons/cart.png";
import mine from "../icons/mine.png";
import customer from "../icons/customer.png";
import feedback from "../icons/feedback.png";

type ToolbarItem = {
  name: string;
  icon: string | IconType;
  isImage: boolean;
  isTwoLines?: boolean;
  hasBadge?: boolean;
  onClick?: () => void;
};

export default function RightToolbar() {
  const { state, toggleCartDropdown, setPage } = useAppContext();
  const isProductPage = state.page === "product";
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  // Base items (always shown)
  const baseInfo: ToolbarItem[] = [
    {
      name: "购物车",
      icon: cart,
      isImage: true,
      hasBadge: true,
      onClick: () => toggleCartDropdown(),
    },
    {
      name: "我的",
      icon: mine,
      isImage: true,
    },
    {
      name: "客服",
      icon: customer,
      isImage: true,
    },
  ];

  // Additional items for product page
  const productPageItems: ToolbarItem[] = [
    {
      name: "手机查看",
      icon: FiSmartphone,
      isImage: false,
      isTwoLines: true, // This one should split into two lines
    },
  ];

  // Items that appear at the end
  const endItems: ToolbarItem[] = [
    {
      name: "反馈",
      icon: feedback,
      isImage: true,
    },
  ];

  // Product page only: add homepage at start and collapse at end
  const homepageItem: ToolbarItem[] = isProductPage
    ? [
        {
          name: "首页",
          icon: FiHome,
          isImage: false,
          onClick: () => setPage("home"),
        },
      ]
    : [];

  const collapseItem: ToolbarItem[] = isProductPage
    ? [
        {
          name: "收起",
          icon: FiChevronLeft,
          isImage: false,
          onClick: () => {
            // Collapse functionality - could hide toolbar or navigate
            // For now, just navigate home
            setPage("home");
          },
        },
      ]
    : [];

  // Combine all items based on page
  const info: ToolbarItem[] = [
    ...homepageItem,
    ...baseInfo,
    ...(isProductPage ? productPageItems : []),
    ...endItems,
    ...collapseItem,
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
      <div className="bg-white rounded-l-lg shadow flex flex-col items-center">
        {info.map((t, idx) => {
          // Determine conditional classes for special hover rounded corners
          const hoverRounded =
            idx === 0
              ? "hover:rounded-tl-lg"
              : idx === info.length - 1
              ? "hover:rounded-bl-lg"
              : "";

          return (
            <div
              key={`${t.name}-${idx}`}
              className={`flex flex-col items-center cursor-pointer hover:bg-red-500 py-2 px-1 group w-full ${hoverRounded}`}
              onClick={t.onClick}
            >
              <div className="relative">
                {t.isImage ? (
                  <img
                    src={t.icon as string}
                    alt={t.name}
                    className="w-[20px] h-[20px] mb-1 filter invert group-hover:invert-0 transition-all"
                  />
                ) : (
                  <div className="w-[20px] h-[20px] mb-1 flex items-center justify-center">
                    {typeof t.icon !== "string" &&
                      React.createElement(t.icon, {
                        size: 20,
                        className: "text-gray-700 group-hover:text-white transition-colors",
                      })}
                  </div>
                )}
                {/* Red badge for shopping cart */}
                {t.hasBadge && cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#e1251b] rounded-full"></div>
                )}
              </div>
              {/* Text - handle two-line case for "手机查看" */}
              {t.isTwoLines ? (
                <div className="text-[11px] text-gray-700 group-hover:text-white transition-colors leading-tight text-center">
                  <div>手机</div>
                  <div>查看</div>
                </div>
              ) : (
                <span className="text-[11px] text-gray-700 group-hover:text-white transition-colors">
                  {t.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
