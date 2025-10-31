import { FiChevronDown } from "react-icons/fi";
import cart from "../icons/cart.png";

export default function Topbar() {
  // Common hover style
  const hoverClass = "hover:text-[#e1251b] transition-colors";
  return (
    <div className="w-full bg-white text-xs text-gray-500 relative z-10">
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
          <div className={`flex items-center cursor-pointer gap-1 ${hoverClass}`}>
            中国大陆版 - 海外
            <FiChevronDown size={8} className="text-black" />
          </div>
          <span className={`cursor-pointer ${hoverClass}`}>你好，请登录</span>
          <span className={`cursor-pointer text-red-500 ${hoverClass}`}>免费注册</span>
          <span className={`cursor-pointer ${hoverClass}`}>切换至企业版</span>
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
          <span className={`cursor-pointer flex items-center gap-1 ${hoverClass}`}>
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
          </span>
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
