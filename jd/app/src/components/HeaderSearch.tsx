import logo from "../assets/logo.png";
import { useAppContext } from "../context/AppProvider";
import { useState } from "react";
import { FiChevronDown, FiCamera } from "react-icons/fi";
import aiIcon from "../icons/ai.png";
import surprise from "../assets/surprise.png";

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

// 7 boxes' content/labels and images:
const boxData = [
  {
    img: "https://m.360buyimg.com/babel/jfs/t20261109/180861/1/40248/26542/654d9954F7e5217ad/fa9860886b3c867c.png",
    label: "低至5折",
    id: "box-1",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/314998/14/10321/23294/68510b49F87424655/a6b42db222177cfc.jpg",
    label: "直降15%起",
    id: "box-2",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/333728/8/12077/209618/68c38736F9187a71d/668ac39cc64db221.jpg",
    label: "低至5折",
    id: "box-3",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/296213/1/4589/38581/681c4b33F720154cf/03a194bc1d3c17a0.jpg",
    label: "球迷惊喜日",
    isCenter: true,
    sub: "官方旗舰店任性购",
    id: "box-4",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/197537/24/9808/185592/614c5d96E861c4e54/74d944f65a927cee.jpg",
    label: "企业专享价",
    id: "box-5",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/164957/4/46983/111616/670c8cfbFb108f33a/c6f0751fd8dbb9bc.jpg",
    label: "不止5折",
    id: "box-6",
  },
  {
    img: "https://m.360buyimg.com/babel/jfs/t1/114431/9/48017/34832/674171bbFdb6e009b/0d01bcb502348034.jpg",
    label: "抢小美盒",
    id: "box-7",
  },
];

export default function HeaderSearch() {
  const { setSearchQuery, setPage } = useAppContext();
  const [input, setInput] = useState("");

  const onSubmitSearch = () => {
    const q = input.trim();
    setSearchQuery(q);
    setPage("search");
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
            className="absolute -left-70 top-1/2 -translate-y-1/2 flex items-center px-0 sm:px-2 z-10 cursor-pointer"
            style={{ height: 52 }}
            onClick={() => setPage("home")}
            tabIndex={0}
          >
            <img src={logo} alt="京东" className="h-17 w-auto" style={{ objectFit: "contain" }} />
            <span className="sr-only">京东首页</span>
          </button>

          {/* Content wrapper, enough left padding for logo */}
          <div className="w-full flex flex-col items-center">
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
            {boxData.slice(0, 3).map((box, idx) => (
              <div
                key={box.id || `box-${idx}`}
                className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden items-center justify-between"
              >
                <div className="flex-1 flex items-end justify-center pb-[38px]">
                  <img
                    src={box.img}
                    alt={box.label}
                    className="max-h-[100px] max-w-[90%] object-contain"
                  />
                </div>
                <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                  <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider whitespace-nowrap">
                    {box.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Center large box with two images: left 1/3 is boxData[3], right 2/3 is surprise */}
          <div className="relative bg-[#fff3f4] rounded-lg h-25 w-85 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-row items-stretch justify-center overflow-hidden">
            {/* Left: boxData[3] image and labels */}
            <div className="flex w-1/3 h-full">
              <img
                src={boxData[3].img}
                alt={boxData[3].label}
                className="object-contain h-full"
              />
            </div>
            {/* Right: surprise image fills 2/3 */}
            <div className="flex items-center justify-center w-2/3 h-full">
              <img
                src={surprise}
                alt="Surprise"
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          {/* Right 3 boxes */}
          <div className="flex gap-3">
            {boxData.slice(4).map((box, idx) => (
              <div
                key={box.id || `box-${idx + 4}`}
                className="relative bg-white rounded-lg h-25 w-25 min-w-0 border border-[#d6d7dc] shadow-sm flex flex-col overflow-hidden items-center justify-between"
              >
                <div className="flex-1 flex items-end justify-center pb-[38px]">
                  <img
                    src={box.img}
                    alt={box.label}
                    className="max-h-[100px] max-w-[90%] object-contain"
                  />
                </div>
                <div className="absolute -left-1 bottom-0 w-27 flex justify-center ">
                  <div className="bg-[#eb1324] text-white text-xs font-bold rounded-[4px] py-1 mb-1 w-[86%] text-center shadow-sm tracking-wider whitespace-nowrap">
                    {box.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
