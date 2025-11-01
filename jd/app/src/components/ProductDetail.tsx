import { useState } from "react";
import { useAppContext } from "../context/AppProvider";
import { BsStarFill } from "react-icons/bs";

export default function ProductDetail() {
  const { state, addToCart, toggleCartDropdown } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  // Use the selected product ID or default to "1" for mock product
  const productId = state.selectedProductId || "1";

  const handleAddToCart = () => {
    addToCart(productId, quantity);
    // Open cart after adding
    if (!state.showCartDropdown) {
      toggleCartDropdown();
    }
  };

  // Mock product images - you can replace these with actual images
  const productImages = Array(6).fill(null);

  // Product details
  const productTitle = "Apple iPhone 15 Pro Max 【24期免息】苹果 15promax 国行全网通 苹果手机 15 Promax 原色钛金属 9成新 256G国行";
  const currentPrice = "¥4626";
  const originalPrice = "¥4829.00";
  const colorOptions = ["原色钛金属", "蓝色钛金属", "黑色钛金属", "白色钛金属"];
  const storageOptions = ["9成新256G国行", "95新256G国行", "99新256G国行", "95新512G国行"];

  return (
    <div className="w-full h-full relative z-10 bg-[#f7f7fb]">
      {/* Breadcrumbs */}
      <div className="w-full bg-[#f7f7fb] py-2">
        <div className="max-w-[1600px] mx-auto px-4 text-xs text-gray-500">
          <span className="cursor-pointer hover:text-[#e1251b]">二手商品</span>
          <span className="mx-2">&gt;</span>
          <span className="cursor-pointer hover:text-[#e1251b]">二手手机通讯</span>
          <span className="mx-2">&gt;</span>
          <span className="cursor-pointer hover:text-[#e1251b]">二手手机</span>
          <span className="mx-2">&gt;</span>
          <span className="cursor-pointer hover:text-[#e1251b]">Apple</span>
          <span className="mx-2">&gt;</span>
          <span>Apple iPhone 15 Pr...</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-3 grid grid-cols-11 bg-[#f7f7fb] h-[68px] px-5 relative z-10 font-sans" style={{fontFamily:'PingFang SC,Arial,sans-serif'}}>
        {/* Store section */}
        <div className="flex col-span-6 items-center min-w-max">
          <div className="bg-white w-[58px] h-[58px] items-center flex justify-center ">
            <img
              src="https://img30.360buyimg.com/popshop/jfs/t1/155674/12/49373/2752/670de0a6F0d382c0e/a94a8e7542e55b2c.jpg"
              alt=""
              className="w-[58px] h-[18px] mr-2"
              draggable="false"
            />
          </div>
          <div className="flex-col">
            <div className="ml-2 flex items-center mb-2">
              <span className="text-[16px] text-[#333] font-bold mr-1 leading-none">扬子商超设备旗舰店</span>
              <span className="flex items-center ml-1 mr-2">
                <BsStarFill className="text-[#e1251b]" size={12} />
                <span className="ml-[2px] text-[12px] text-[#e1251b] font-semibold leading-none align-middle">4.0</span>
              </span>
            </div>
            <button className="px-2 py-0.5 ml-2 border border-[#d9d9d9] rounded hover:border-[#e1251b] text-[#333] text-xs leading-none font-normal transition-colors h-7">关注店铺</button>
            <button className="px-2 py-0.5 ml-2 border border-[#d9d9d9] rounded hover:border-[#e1251b] text-[#333] text-xs leading-none font-normal transition-colors h-7">联系客服</button>
          </div>
        </div>

        {/* Search bar section */}
        <div className="col-span-5 flex flex-col items-center w-full ml-2">
          {/* Huge red outlined search bar including input and buttons */}
          <div className="flex items-center border border-[#e1251b] rounded-md overflow-hidden bg-white w-full p-[2px] gap-1" style={{height:'40px'}}>
            <input
              type="text"
              value="苹果手机16pro max"
              readOnly
              className="flex-1 px-4 h-full outline-none bg-white text-[#333] text-[15px] border-none"
              style={{minWidth:'180px', fontFamily:'PingFang SC,Arial,sans-serif'}}
            />
            <button className="h-full px-6 bg-[#ffebf1] text-[#fa2c19] text-[16px] font-bold whitespace-nowrap rounded-md cursor-pointer">搜本店</button>
            <button className="h-full px-6 bg-[#fa2c19] text-white text-[16px] font-bold whitespace-nowrap rounded-md cursor-pointer">搜全站</button>
          </div>
          {/* Tag line under search bar */}
          <div className="w-full flex justify-end mt-1">
            <div>
              {[
                "自营二手官方回收商城",
                "苹果16ProMax全新现货",
                "超值特惠专区",
                "更多优惠活动"
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[#565656] px-2"
                  style={{whiteSpace: 'nowrap', cursor: 'pointer'}}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main product display */}
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="grid grid-cols-11 gap-4">
          {/* Left column - thumbnails */}
          <div className="col-span-1 flex flex-col gap-2">
            {productImages.map((_, idx) => (
              <div
                key={idx}
                className={`w-full aspect-square border-2 rounded cursor-pointer transition-colors ${
                  selectedImage === idx ? "border-[#e1251b]" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  {/* Placeholder for thumbnail */}
                  <span className="text-xs text-gray-400">Image {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Center - main product image */}
          <div className="col-span-5">
            <div className="border border-gray-200 rounded p-4 bg-white h-full">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center mb-4">
                {/* Placeholder for main image */}
                <span className="text-xl text-gray-400">Main Image {selectedImage + 1}</span>
              </div>
            </div>
          </div>

          {/* Right column - product details */}
          <div className="col-span-5 bg-white p-5 rounded-lg">
            {/* Red banner */}
            <div className="bg-[#e1251b] text-white px-3 py-1 rounded text-xs font-bold mb-3">
              又好又便宜
            </div>

            {/* Product title */}
            <h1 className="text-base font-bold text-gray-900 mb-3 leading-tight">
              {productTitle}
            </h1>

            {/* Price */}
            <div className="mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-[#e1251b] font-bold">{currentPrice}</span>
                <span className="text-base text-gray-500 line-through">{originalPrice}</span>
              </div>
            </div>

            {/* Promotions */}
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-3 text-xs">
              <div className="text-[#e1251b] mb-2">优惠活动</div>
              <div className="space-y-1">
                <div>满2999减200</div>
                <div>满2999减200</div>
                <div>最高返462京豆</div>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-blue-600 cursor-pointer">累计评价2万+</span>
              </div>
              <span className="cursor-pointer hover:text-[#e1251b]">降价通知</span>
            </div>

            {/* Ranking */}
            <div className="bg-yellow-50 border border-yellow-200 rounded px-3 py-2 mb-4 text-xs text-yellow-800">
              512GB二手手机热卖榜·第4名
            </div>

            {/* Delivery info */}
            <div className="mb-4 text-xs">
              <div className="text-gray-600 mb-1">送至</div>
              <div className="text-gray-900">此商品暂时售完</div>
              <div className="text-gray-500 mt-1">海外澳大利亚 AUSTRALIAN CAPITAL TERRITORY...</div>
            </div>

            {/* Color selection */}
            <div className="mb-4">
              <div className="text-xs text-gray-600 mb-2">
                规格1 <span className="text-gray-400">颜色/材质</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 text-xs border rounded transition-colors ${
                      selectedColor === idx
                        ? "border-[#e1251b] text-[#e1251b] bg-red-50"
                        : color === "原色钛金属"
                        ? "border-gray-300 text-gray-600"
                        : "border-gray-200 text-gray-400 bg-gray-50"
                    }`}
                    disabled={color !== "原色钛金属"}
                    onClick={() => setSelectedColor(idx)}
                  >
                    {color}
                    {color !== "原色钛金属" && (
                      <span className="ml-2 text-red-500">无货</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage selection */}
            <div className="mb-4">
              <div className="text-xs text-gray-600 mb-2">
                规格2 <span className="text-gray-400">成色/存储/保修</span>
              </div>
              <div className="flex flex-col gap-2">
                {storageOptions.map((storage, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 text-xs border rounded transition-colors text-left ${
                      selectedStorage === idx
                        ? "border-[#e1251b] text-[#e1251b] bg-red-50"
                        : storage.includes("9成新256G国行")
                        ? "border-gray-300 text-gray-600"
                        : "border-gray-200 text-gray-400 bg-gray-50"
                    }`}
                    disabled={!storage.includes("9成新256G国行")}
                    onClick={() => setSelectedStorage(idx)}
                  >
                    {storage}
                    {!storage.includes("9成新256G国行") && (
                      <span className="ml-2 text-red-500">无货</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center gap-3">
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-2">数量</div>
                <div className="flex items-center border border-gray-300 rounded w-fit">
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-2 mt-2 bg-[#e1251b] text-white rounded font-bold text-[16px] cursor-pointer hover:bg-[#c41e1a] transition-colors"
              >
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

