import { FiPlus } from "react-icons/fi";
import  { useAppContext } from "../context/AppProvider";
import { productCatalog, getPriceAsNumber } from "../data/products";
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import ad4 from "../assets/ad4.png";

type ProductListingProps = {
  onProductClick?: (productId: string) => void;
};

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

// Ad image URLs array (replace with your actual ad image URLs)
const adImages = [
  ad1, // AD 1
  ad2, // AD 2
  ad3, // AD 3
  ad4, // AD 4
];

// Generate 9 rows × 6 columns = 54 products by looping through the catalog
const totalRows = 9;
const totalCols = 6;
const totalProducts = totalRows * totalCols;
const products = Array.from({ length: totalProducts }, (_, idx) => {
  return productCatalog[idx % productCatalog.length];
});

// Ad positions: (row 1,4,7,9) at first column (col 0): indexes 0, 18, 36, 48
const adInsertIndexes = [0, 18, 36, 48];

// Helper to randomly shuffle ads each render
function shuffledAds() {
  const arr = [...adImages];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ProductListing({ onProductClick }: ProductListingProps) {
  const { addToCart } = useAppContext();

  // Shuffle ads only once per render.
  const ads = shuffledAds();

  const handleProductClick = (productId: string) => {
    if (onProductClick) {
      onProductClick(productId);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    addToCart(productId, 1);
  };

  return (
    <div className="max-w-[1600px] mx-auto mt-2 relative z-10">
      <div className="bg-white rounded-xl p-4">
        {/* Filter bar with right arrow */}
        <div className="mb-4 relative">
          {/* Hide the scroll bar for all browsers and make the arrow perfectly middle right */}
          <div
            className="overflow-x-auto"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
            }}
          >
            <div
              // Hide scrollbar in Webkit browsers
              style={{
                flexWrap: "nowrap",
                minWidth: `${filterCategories.length * 104}px`,
                width: "max-content",
                // Hide scrollbar in Chrome, Safari and Opera
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="flex items-center gap-4"
            >
              {/* Hide the scroll bar for all browsers */}
              <style>{`
                div[role='presentation']::-webkit-scrollbar,
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                  height: 0 !important;
                  background: transparent !important;
                }
              `}</style>
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
          {/* Arrow right overlay - perfectly centered vertically */}
          <div
            className="absolute right-0 top-1/2 -translate-y-2/3 flex items-center h-9 w-9 bg-gradient-to-l from-white via-white/60 to-white/10 rounded-md shadow border border-gray-200 z-10 cursor-pointer justify-center"
            style={{
              boxShadow: "0px 2px 12px 0 rgba(31, 56, 88, 0.08)", 
              pointerEvents: "none", // decorative only, not clickable
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
              <path d="M9.5 17a1 1 0 0 1-.7-1.71l4.22-4.29a1 1 0 0 0 0-1.42l-4.22-4.29A1 1 0 1 1 10.92 4.7l4.23 4.3a3 3 0 0 1 0 4.24l-4.23 4.3a1 1 0 0 1-.7.29z" fill="#b7bac3"/>
            </svg>
          </div>
        </div>

        {/* Product grid - 6 columns, 9 rows */}
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
            z-index: 2;
          }
          .jd-ad-tile:hover {
            border-color: #e1251b;
            box-shadow: 0 1.5px 6px 0 rgba(225, 37, 27, .05);
            z-index: 2;
          }
        `}</style>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: totalProducts }).map((_, index) => {
            // If this should be an ad:
            const adPos = adInsertIndexes.indexOf(index);
            if (adPos !== -1) {
              // Show ad tile - FULL SIZE
              return (
                <div
                  key={`ad-tile-${adPos}-${ads[adPos]}`}
                  className="jd-product-tile jd-ad-tile bg-white rounded-lg overflow-hidden flex flex-col border border-[#fff] cursor-pointer p-0"
                  style={{
                    height: "378px",
                    gridColumn: "span 1 / span 1"
                  }}
                >
                  <img
                    src={ads[adPos]}
                    alt={`广告${adPos + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  />
                </div>
              );
            }
            // Product card as usual
            const product = products[index];
            const mainImage = product.images?.[0] || "";
            const priceStr = product.currentPrice;
            const price = getPriceAsNumber(priceStr);

            return (
              <div
                key={`${product.id}-${index}`}
                className="jd-product-tile bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                style={{
                  height: "378px",
                }}
                onClick={() => handleProductClick(product.id)}
              >
                {/* Image area */}
                <div
                  className="w-full bg-gray-50 flex items-center justify-center overflow-hidden"
                  style={{ height: "240px" }}
                >
                  {mainImage ? (
                    <img
                      src={mainImage}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No Image</span>
                  )}
                </div>

                {/* Product info area */}
                <div
                  className="flex-1 flex flex-col justify-between px-3 pt-2 pb-3"
                >
                  {/* Product name */}
                  <div
                    className="text-[17px] font-normal text-black leading-snug break-words line-clamp-2"
                    style={{
                      fontFamily: "inherit",
                    }}
                    title={product.title}
                  >
                    {product.title}
                  </div>

                  {/* Price and plus icon bar */}
                  <div className="flex flex-row items-center justify-between mt-auto">
                    <div className="flex flex-row items-end">
                      <span
                        className="text-[#e1251b] text-[24px] leading-none font-bold"
                        style={{
                          fontFamily: "inherit",
                          letterSpacing: 0,
                        }}
                      >
                        ¥{Math.floor(price)}
                      </span>
                      <span
                        className="text-[#e1251b] text-[15px] leading-none font-bold mb-[1px]"
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        .{((price % 1) * 100).toFixed(0).padStart(2, '0')}
                      </span>
                      {product.salesInfo && (
                        <span className="text-[12px] text-gray-500 ml-2 align-baseline whitespace-nowrap">
                          {product.salesInfo}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-[#f1eef1] transition w-8 h-8 ml-2 border border-[#f2f2f2] cursor-pointer"
                    >
                      <FiPlus className="text-[#e1251b] text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
