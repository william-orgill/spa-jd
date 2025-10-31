import logo from "../assets/logo.png";
import { useAppState } from "../state/appState";
import { useState } from "react";
import { FiChevronDown, FiCamera } from "react-icons/fi";
import aiIcon from "../icons/ai.png";

const navTexts = [
  "京东品酒会",
  "粮油省心购 9.9元开抢",
  "桌面加湿器办公小型",
  "银饰",
  "羽绒服",
  "发热鼠标垫",
  "保暖内衣",
  "手套",
  "暖手宝",
  "围巾",
  "电动车挡风被加厚",
];

export default function HeaderSearch() {
  const [state, setState] = useAppState();
  const [input, setInput] = useState("");

  const onSubmitSearch = () => {
    const q = input.trim();
    setState((p) => ({ ...p, searchQuery: q, page: "search" }));
  };

  return (
    <div className="mx-auto mt-6 px-4 pt-4 pb-2 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        {/* Search bar and nav (centered, max-w-1040px, responsive) */}
        <div
          className="relative w-full flex flex-col items-center"
          style={{
            maxWidth: 1010,
            marginLeft: 140,
            marginRight: 140,
            minWidth: 0,
            width: "100%",
          }}
        >
          {/* Absolutely positioned Logo to the left, vertically centered */}
          <button
            className="absolute -left-70 top-1/2 -translate-y-1/2 flex items-center px-0 sm:px-2 z-10"
            style={{ height: 52 }}
            onClick={() => setState((p) => ({ ...p, page: "home" }))}
            tabIndex={0}
          >
            <img src={logo} alt="京东" className="h-17 w-auto" style={{ objectFit: "contain" }} />
            <span className="sr-only">京东首页</span>
          </button>

          {/* Content wrapper, enough left padding for logo */}
          <div
            className="w-full flex flex-col items-center"
          >
            {/* Responsive search + AI row */}
            <div className="flex w-full items-center">
              {/* Search bar: responsive max/min width, centered */}
              <div
                className="flex items-center bg-white rounded-lg overflow-hidden shadow px-[2px] h-10 flex-1 min-w-0"
                style={{
                  width: "100%",
                  minWidth: 180,
                  transition: "max-width .18s",
                }}
              >
                {/* Category Dropdown */}
                <div className="flex items-center px-3 text-sm text-gray-700 bg-transparent select-none cursor-pointer gap-1 min-w-[48px]">
                  全部
                  <FiChevronDown size={14} className="text-gray-400 ml-[2px]" />
                </div>
                {/* Divider */}
                <div className="w-[1px] h-6 bg-gray-100 mx-1" />
                {/* Search Input */}
                <input
                  className="flex-1 px-2 outline-none text-sm bg-transparent h-full min-w-0"
                  placeholder="电脑 显卡"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSubmitSearch()}
                  // Make input shrink with container
                  style={{ minWidth: 0 }}
                />
                {/* Camera Icon */}
                <button
                  className="flex items-center justify-center w-10 h-10 text-color-base"
                  type="button"
                  tabIndex={-1}
                  style={{ border: "none", outline: "none" }}
                >
                  <FiCamera size={20} />
                </button>
                {/* Search Button */}
                <button
                  className="h-9 px-6 bg-[#ff0f23] text-white text-base cursor-pointer rounded-lg ml-2"
                  style={{
                    fontWeight: 500,
                  }}
                  onClick={onSubmitSearch}
                >
                  搜索
                </button>
              </div>
              {/* AI Button */}
              <button
                className="flex items-center justify-center h-10 px-3 ml-4 rounded bg-[#FFE5EC] hover:bg-[#FFD1DF] transition-colors text-[#FE2C55] text-base font-medium"
                type="button"
                style={{ minWidth: 90 }}
              >
                <span
                  className="inline-block w-5 h-5 rounded-full bg-[#FE2C55] mr-1"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {/* AI icon placeholder */}
                  <img src={aiIcon} alt="AI" className="w-5 h-5" />
                </span>
                京言AI
              </button>
            </div>
            {/* Nav text row */}
            <div className="w-full flex flex-wrap items-center gap-3 mt-2 text-xs font-medium">
              {navTexts.map((txt, i) => (
                <span
                  key={txt}
                  className={
                    "cursor-pointer transition rounded " +
                    (i < 2 ? "text-white" : "text-[#E5E3DE]")
                  }
                >
                  {txt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Centered boxes row, below logo+search/nav */}
      <div
        className="flex justify-center mt-5"
        style={{ width: "100%", maxWidth: 1040 }}
      >
        <div className="flex items-center gap-3">
          {/* Left 3 boxes */}
          <div className="flex gap-3">
            {/* Each small card NOW COPYING THE SECOND ONE */}
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  热卖尖货
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  买自营省无忧
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  抢神券24.5%
                </div>
              </div>
            </div>
          </div>
          {/* Center large box */}
          <div className="relative bg-white rounded-lg h-25 w-85 min-w-0 border border-[#d6d7dc] shadow-sm flex items-center justify-center overflow-hidden">
            {/* No content, just blank (could insert promo banner if wanted) */}
          </div>
          {/* Right 3 boxes */}
          <div className="flex gap-3">
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  热搜爆品210
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  明星热抢榜
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden">
              <div className="flex-1" />
              <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider">
                  家一站购
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
