import { FiChevronDown, FiHome } from "react-icons/fi";
import cart from "../icons/cart.png";
import { useAppContext } from "../context/AppProvider";

interface TopbarProps {
  isProductPage?: boolean;
  onNavigateHome?: () => void;
}

export default function Topbar({ isProductPage = false, onNavigateHome }: TopbarProps) {
  const { state, toggleCartDropdown } = useAppContext();
  
  // Common hover style
  const hoverClass = "hover:text-[#e1251b] transition-colors";
  
  // Calculate cart count from reactive state
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="w-full bg-white text-xs text-gray-500 relative z-[9997]">
      <div
        className="flex items-center justify-between h-9 text-[11px] text-color-base"
        style={{
          minWidth: 0,
          width: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <div
          className="flex items-center space-x-4"
          style={{
            minWidth: 0,
            flexShrink: 0,
            whiteSpace: "nowrap",
            marginLeft: "max(42px, calc((100vw - 1550px) / 2))",
          }}
        >
          {isProductPage ? (
            <>
              {/* JD Logo */}
              <button
                onClick={onNavigateHome}
                className="flex items-center cursor-pointer gap-2 mr-2"
              >
                <img 
                  src={"https://img12.360buyimg.com/img/jfs/t1/109080/21/58367/14698/675171baFb8b7a6d2/22ad515c81c73261.png"} 
                  alt="京东" 
                  className="h-4 w-auto" 
                  draggable="false"
                />
              </button>
              {/* Home icon + text */}
              <button
                onClick={onNavigateHome}
                className={`flex items-center cursor-pointer gap-1 ${hoverClass}`}
              >
                <FiHome size={14} className="text-gray-500" />
                <span>京东首页</span>
              </button>
              {/* Region selector */}
              <div className={`flex items-center cursor-pointer gap-1 ${hoverClass}`}>
                中国大陆版 - 海外
                <FiChevronDown size={8} className="text-black" />
              </div>
            </>
          ) : (
            <>
              <div className={`flex items-center cursor-pointer gap-1 ${hoverClass}`}>
                中国大陆版 - 海外
                <FiChevronDown size={8} className="text-black" />
              </div>
            </>
          )}
          <span className={`cursor-pointer ${hoverClass}`}>你好，请登录</span>
          <span className={`cursor-pointer text-red-500 ${hoverClass}`}>免费注册</span>
          {!isProductPage && <span className={`cursor-pointer ${hoverClass}`}>切换至企业版</span>}
        </div>
        <div
          className="flex items-center space-x-5"
          style={{
            minWidth: 0,
            flexShrink: 0,
            whiteSpace: "nowrap",
            marginRight: "max(42px, calc((100vw - 1550px) / 2))",
          }}
        >
          <button
            type="button"
            onClick={toggleCartDropdown}
            className={`cursor-pointer flex items-center gap-1 ${hoverClass} relative`}
          >
            <img
              src={cart}
              alt="购物车"
              className="w-3 h-3 inline-block"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(16%) sepia(99%) saturate(4214%) hue-rotate(358deg) brightness(94%) contrast(118%)",
              }}
            />
            购物车
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#e1251b] text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>
          <span className={`cursor-pointer ${hoverClass}`}>我的订单</span>
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
            我的京东 <FiChevronDown size={8} className="text-black" />
          </span>
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
            企业采购 <FiChevronDown size={8} className="text-black" />
          </span>
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
            商家服务 <FiChevronDown size={8} className="text-black" />
          </span>
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
            网站导航 <FiChevronDown size={8} className="text-black" />
          </span>
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
            手机京东 <FiChevronDown size={8} className="text-black" />
          </span>
          <span className={`cursor-pointer ${hoverClass}`}>网站无障碍</span>
        </div>
      </div>
    </div>
  );
}
