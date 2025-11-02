import { useState } from "react";
import { useAppContext } from "../context/AppProvider";
import { BsStarFill } from "react-icons/bs";
import ProductDetailRight from "./ProductDetailRight";
import { getProductById } from "../data/products";

export default function ProductDetail() {
  const { state, addToCart, toggleCartDropdown } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);

  // Use the selected product ID or default to "1" for mock product
  const productId = state.selectedProductId || "1";
  const productData = getProductById(productId);

  // Fallback if product not found
  if (!productData) {
    return (
      <div className="w-full h-full relative z-10 bg-[#f7f7fb] flex items-center justify-center">
        <div className="text-gray-500">Product not found</div>
      </div>
    );
  }

  const handleAddToCart = (quantity: number) => {
    addToCart(productId, quantity);
    // Open cart after adding
    if (!state.showCartDropdown) {
      toggleCartDropdown();
    }
  };

  // Use images from product data
  const productImages = productData.images || [];

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
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className={`w-full aspect-square border-2 rounded cursor-pointer transition-colors overflow-hidden ${
                  selectedImage === idx ? "border-[#e1251b]" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                {img ? (
                  <img 
                    src={img} 
                    alt={`Product ${idx + 1}`} 
                    className="w-full h-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-400">Image {idx + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center - main product image */}
          <div className="col-span-5">
            <div className="border border-gray-200 rounded p-4 bg-white h-full">
              {productImages[selectedImage] ? (
                <img 
                  src={productImages[selectedImage]} 
                  alt="Main product image" 
                  className="w-full aspect-square object-contain bg-white rounded mb-4"
                />
              ) : (
                <div className="aspect-square bg-gray-100 rounded flex items-center justify-center mb-4">
                  <span className="text-xl text-gray-400">Main Image {selectedImage + 1}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right column - product details using modular component */}
          <ProductDetailRight product={productData} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
