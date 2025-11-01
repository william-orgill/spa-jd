import { useState } from "react";
import { useAppState } from "../state/appState";
import { BsStarFill } from "react-icons/bs";
import Topbar from "./Topbar";

export default function ProductDetail() {
  const [state] = useAppState();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);

  // Mock product images - you can replace these with actual images
  const productImages = Array(6).fill(null);

  // Product details
  const productTitle = "Apple iPhone 15 Pro Max 【24期免息】苹果 15promax 国行全网通 苹果手机 15 Promax 原色钛金属 9成新 256G国行";
  const currentPrice = "¥4626";
  const originalPrice = "¥4829.00";
  const colorOptions = ["原色钛金属", "蓝色钛金属", "黑色钛金属", "白色钛金属"];
  const storageOptions = ["9成新256G国行", "95新256G国行", "99新256G国行", "95新512G国行"];

  return (
    <div className="w-full bg-white relative z-10">
      <Topbar />
      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b border-gray-200 py-2">
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

      {/* Store information */}
      <div className="max-w-[1600px] mx-auto px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-gray-900">
              拍拍二手 精诚优品手机专营店
            </div>
            <div className="flex items-center gap-1">
              <BsStarFill className="text-yellow-400" size={14} />
              <span className="text-xs text-gray-600">4.0</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-1 border border-gray-300 rounded hover:border-[#e1251b] hover:text-[#e1251b] transition-colors">
              关注店铺
            </button>
            <button className="px-4 py-1 border border-gray-300 rounded hover:border-[#e1251b] hover:text-[#e1251b] transition-colors">
              联系客服
            </button>
          </div>
        </div>
      </div>

      {/* Product-specific search */}
      <div className="max-w-[1600px] mx-auto px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value="苹果手机16pro max"
            className="flex-1 px-3 py-2 border border-gray-300 rounded outline-none focus:border-[#e1251b]"
            readOnly
          />
          <button className="px-6 py-2 bg-[#e1251b] text-white rounded hover:bg-[#c52319] transition-colors">
            搜本店
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
            搜全站
          </button>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {["iphone15pro max", "iphone15promax", "苹果15", "15promax", "苹果手机"].map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white border border-gray-300 rounded text-xs cursor-pointer hover:border-[#e1251b] hover:text-[#e1251b] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main product display */}
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="grid grid-cols-5 gap-6">
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
          <div className="col-span-3">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center mb-4">
                {/* Placeholder for main image */}
                <span className="text-xl text-gray-400">Main Image {selectedImage + 1}</span>
              </div>
              
              {/* Promotional banners */}
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded text-sm font-bold text-center">
                  0首付白条免息
                </div>
                <div className="bg-blue-50 border border-blue-200 py-2 px-3 rounded text-xs text-blue-800">
                  三年 免费试用 | 赠运费险 | 现货速发 店保 购机送外屏险*1 电池换新*1
                </div>
              </div>
            </div>
          </div>

          {/* Right column - product details */}
          <div className="col-span-1">
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
            <div className="mb-4">
              <div className="text-xs text-gray-600 mb-2">数量</div>
              <div className="flex items-center border border-gray-300 rounded w-fit">
                <button
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              className="w-full py-3 bg-gray-300 text-gray-500 rounded font-semibold cursor-not-allowed"
              disabled
            >
              加入购物车
            </button>
          </div>
        </div>
      </div>

      {/* Left promotional banners */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-20 ml-4">
        <div className="flex flex-col gap-4">
          {/* Collect/Follow banner */}
          <div className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition-colors text-sm font-bold">
            收藏关注
          </div>
          
          {/* Promotional banners */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white px-4 py-6 rounded text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity">
            <div className="text-center leading-tight">
              0首付<br />白条免息
            </div>
          </div>
          
          <div className="bg-green-600 text-white px-4 py-6 rounded text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity leading-tight">
            <div className="text-center">
              三年店保<br />购机送外屏险<br />电池换新
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

