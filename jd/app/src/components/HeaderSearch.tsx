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
    <div
      className="mx-auto mt-6 px-4 pt-4 pb-2 flex flex-col items-center"
    >
      <div className="flex items-start w-full">
        {/* Logo column */}
        <div
          className="flex-shrink-0 flex flex-col items-center justify-center h-full pr-8 pt-1"
          style={{ minWidth: 140 }}
        >
          <button
            className="cursor-pointer w-full flex justify-start items-center"
            onClick={() => setState((p) => ({ ...p, page: "home" }))}
            style={{ height: 52 }}
          >
            <img src={logo} alt="京东" className="h-17 w-auto" />
            <span className="sr-only">京东首页</span>
          </button>
        </div>
        {/* Search bar and nav (centered, max-w-1040px, shrink/grow with site) */}
        <div className="flex-1 flex flex-col min-w-0 items-center">
          <div
            className="w-full flex flex-col"
            style={{
              maxWidth: 1040,
              // place to adjust responsive width before max is reached:
              // width: "100%", minWidth: 360, ... (set as you like)
            }}
          >
            {/* Search row & AI button */}
            <div className="flex items-center">
              <div
                className="flex items-center bg-white rounded-lg overflow-hidden shadow px-[2px] h-10 flex-1"
                style={{
                  width: "100%",
                }}
              >
                {/* Category Dropdown */}
                <div className="flex items-center px-3 text-sm text-gray-700 bg-transparent select-none cursor-pointer gap-1 min-w-[48px]">
                  全部
                  <FiChevronDown size={14} className="text-gray-400 ml-[2px]" />
                </div>
                {/* Divider between category and input */}
                <div className="w-[1px] h-6 bg-gray-100 mx-1" />
                {/* Search Input */}
                <input
                  className="flex-1 px-2 outline-none text-sm bg-transparent h-full"
                  style={{ minWidth: 0 }}
                  placeholder="电脑 显卡"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSubmitSearch()}
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
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
          </div>
          {/* Center large box */}
          <div
            className="bg-white rounded-lg shadow h-25 w-85 min-w-0 border border-[#ececec]"
          />
          {/* Right 3 boxes */}
          <div className="flex gap-3">
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
            <div className="bg-white rounded-lg shadow h-25 w-25 min-w-0 border border-[#ececec]" />
          </div>
        </div>
      </div>
    </div>
  );
}
