import { useAppState } from "../state/appState";
import { FiPlus } from "react-icons/fi";

// Filter bar categories with images
const filterCategories = [
  {
    label: "为你推荐",
    img: "https://img14.360buyimg.com/img/jfs/t1/270373/10/4983/2770/67d7884aFdbcc633a/8a7b5c82dd34fd2d.png",
  },
  {
    label: "秒 摸鱼顺手秒",
    img: "https://m.360buyimg.com/babel/jfs/t1/350660/40/7372/849/68d50cedF5eb997c6/ebaef0fb5052a94e.png",
  },
  {
    label: "健康保养",
    img: "https://m.360buyimg.com/babel/jfs/t1/333404/28/4300/5132/68ad5991Fb6e3c18a/cb1f101d83dca53a.png",
  },
  {
    label: "粮油调味",
    img: "https://m.360buyimg.com/babel/jfs/t1/338408/21/1875/12195/68ad5398F2c926b81/18d72245740a556b.png",
  },
  {
    label: "萌宠护理",
    img: "https://m.360buyimg.com/babel/jfs/t1/340859/38/1965/12454/68ad56aeF045a8700/08ba131c2589ef53.png",
  },
  {
    label: "农资园艺",
    img: "https://m.360buyimg.com/babel/jfs/t1/340373/16/1958/10670/68ad56edF27b2538d/c38bdaabfe6f72a3.png",
  },
  {
    label: "小家电",
    img: "https://m.360buyimg.com/babel/jfs/t1/338269/13/22859/8468/68f73505F2c42486d/0590db8bdd34f695.png",
  },
  {
    label: "家居百货",
    img: "https://m.360buyimg.com/babel/jfs/t1/272164/7/19518/3246/67fc83a8F7cdf6f7e/dc377ea1317f2060.png",
  },
  {
    label: "个护美妆",
    img: "https://m.360buyimg.com/babel/jfs/t1/338664/27/1942/2693/68ad4fc0F2f34b247/5fbad790c1ea9f6c.png",
  },
  {
    label: "汽车服务",
    img: "https://m.360buyimg.com/babel/jfs/t1/337536/37/1971/4806/68ad6ba2F07311b0f/2fb0417f25de9d53.png",
  },
  {
    label: "3C数码",
    img: "https://m.360buyimg.com/babel/jfs/t1/275000/11/20563/3081/67fc839fF2f265249/aee0bcbb908b6feb.png",
  },
  {
    label: "食品饮料",
    img: "https://m.360buyimg.com/babel/jfs/t1/341477/8/17440/6449/68ff1631F300835e7/c187b94b78845a4b.png",
  },
  {
    label: "家",
    img: "https://m.360buyimg.com/babel/jfs/t1/343123/27/15191/5012/68f72527F19721187/ee95cd5981a7919e.png",
  },
];

// Product data, copy the text and price from image
const mockProduct = {
  name: "正压式长管空气呼吸器防吸毒毒防全面罩井下可通话带通讯作业面具 通...",
  price: "¥3629.00",
};

// Generate 9 rows × 6 columns = 54 products
const totalProducts = 9 * 6;
const products = Array(totalProducts).fill(mockProduct);

export default function ProductListing() {
  const [state, setState] = useAppState();

  return (
    <div className="max-w-[1600px] mx-auto mt-2 relative z-10">
      <div className="bg-white rounded-xl p-4">
        {/* Filter bar */}
        <div
          className="mb-4 pb-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200"
          style={{
            WebkitOverflowScrolling: "touch", // smooth scroll on mobile
          }}
        >
          <div
            className="flex items-center gap-4"
            style={{
              flexWrap: "nowrap", // prevent wrapping
              minWidth: `${filterCategories.length * 104}px`, // force single-row scroll if needed; each pill ~104px
              width: "max-content"
            }}
          >
            {filterCategories.map((category, idx) => (
              <div
                key={category.label}
                className={
                  "flex items-center rounded-md px-3 py-1.5 text-sm cursor-pointer transition-colors whitespace-nowrap " +
                  (idx === 0
                    ? "bg-[#fef0ef] text-[#e1251b] font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200")
                }
              >
                <img
                  src={category.img}
                  alt={category.label}
                  className="w-6 h-6 object-contain mr-2"
                />
                <span>{category.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product grid - 6 columns, 9 rows */}
        {/* Style: ONLY a thin red border and shadow on hover, no transform/pop effect. */}
        <style>{`
          .jd-product-tile {
            border: 1px solid #fff;
            transition:
              border-color 0.13s cubic-bezier(0.4,0,0.2,1),
              box-shadow 0.13s cubic-bezier(0.4,0,0.2,1);
            will-change: border-color, box-shadow;
          }
          .jd-product-tile:hover, .jd-product-tile:focus-visible {
            border-color: #e1251b;
            box-shadow: 0 1.5px 6px 0 rgba(225, 37, 27, .05), 0 0px 1.5px 0 #e1251b;
            /* No transform/scale/pop here */
            z-index: 2;
          }
        `}</style>
        <div className="grid grid-cols-6 gap-4">
          {products.map((product, index) => (
            <button
              key={index}
              className="jd-product-tile bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
              style={{
                height: "378px",
              }}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  page: "product",
                  selectedProductId: `product-${index}`,
                }))
              }
            >
              {/* Image area - leaving space for image */}
              <div
                className="w-full bg-gray-50 flex items-center justify-center"
                style={{ height: "240px" }} // fits like image area above lower box in your screenshot
              >
                {/* Placeholder for image */}
              </div>

              {/* Product info area - copy style from screenshot */}
              <div
                className="flex-1 flex flex-col justify-between px-3 pt-2 pb-3"
              >
                {/* Product name (lines, truncate with ellipsis) */}
                <div
                  className="text-[17px] font-normal text-black leading-snug break-words line-clamp-2"
                  style={{
                    fontFamily: "inherit",
                  }}
                  title={product.name}
                >
                  {product.name}
                </div>

                {/* Price and plus icon bar */}
                <div className="flex flex-row items-center justify-between mt-auto">
                  <div className="flex flex-row items-end">
                    <span
                      className="text-[#e1251b] text-[24px] leading-none font-bold"
                      style={{
                        fontFamily: "inherit",
                        marginRight: "2px",
                        letterSpacing: 0,
                      }}
                    >
                      ¥3629
                    </span>
                    <span
                      className="text-[#e1251b] text-[15px] leading-none font-bold ml-1 mb-[2px]"
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      .00
                    </span>
                  </div>
                  <span
                    className="flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-[#f1eef1] transition w-8 h-8 ml-2 border border-[#f2f2f2]"
                  >
                    <FiPlus className="text-[#e1251b] text-xl" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
