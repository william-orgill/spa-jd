import { useState, useEffect } from "react";
import { FiBell, FiChevronRight } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import type { ProductDetailData, ProductVariant } from "../types/product";

interface ProductDetailRightProps {
  product: ProductDetailData;
  onAddToCart: (quantity: number) => void;
}

export default function ProductDetailRight({ product, onAddToCart }: ProductDetailRightProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>({});

  // Auto-select first available variant if none selected yet for each variant group
  useEffect(() => {
    if (product.variants) {
      product.variants.forEach((variantGroup, groupIdx) => {
        if (selectedVariants[groupIdx] === undefined) {
          const autoIdx = variantGroup.options.findIndex(v => v.available);
          if (autoIdx !== -1) {
            setSelectedVariants(prev => ({
              ...prev,
              [groupIdx]: autoIdx,
            }));
          }
        }
      });
    }
  }, [product.variants]);

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  const handleVariantClick = (variantGroupIndex: number, optionIndex: number, available: boolean) => {
    if (!available) return;
    setSelectedVariants((prev) => ({
      ...prev,
      [variantGroupIndex]: optionIndex,
    }));
  };

  const renderVariantOptions = (
    variants: ProductVariant[],
    variantGroupIndex: number,
    cols: number = 4
  ) => {
    // Utility for common color logic
    const getBoxClass = (isSelected: boolean, isAvailable: boolean) => `
      relative border-2 rounded cursor-pointer transition-colors flex items-center
      ${isSelected && isAvailable
        ? "border-green-500 bg-[#fce9ed]"
        : isAvailable
          ? "border-white bg-gray-100"
          : "border-white text-gray-400 bg-gray-50"
      }
    `;
  
    if (cols === 1) {
      // 1 per row, boxes only as wide as their content
      return (
        <div className="flex flex-col gap-2">
          {variants.map((variant, idx) => {
            const isSelected = selectedVariants[variantGroupIndex] === idx;
            const isAvailable = variant.available;
            return (
              <div
                key={variant.id}
                className={getBoxClass(isSelected, isAvailable)}
                onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
                style={{
                  pointerEvents: isAvailable ? "auto" : "none",
                  alignItems: "center",
                  width: "fit-content",
                  minWidth: "0",
                  padding: "0.25rem 0.75rem"
                }}
              >
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                    style={{ minWidth: "1.5rem" }}
                  />
                )}
                <span className={`text-xs ${
                  isSelected && isAvailable
                    ? "text-gray-900"
                    : isAvailable
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}>
                  {variant.label}
                </span>
                {!isAvailable && (
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                    无货
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    if (cols === 2) {
      // 2 per row, each box wraps content
      return (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, idx) => {
            const isSelected = selectedVariants[variantGroupIndex] === idx;
            const isAvailable = variant.available;
            return (
              <div
                key={variant.id}
                className={getBoxClass(isSelected, isAvailable)}
                onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
                style={{
                  pointerEvents: isAvailable ? "auto" : "none",
                  alignItems: "center",
                  width: "fit-content",
                  minWidth: "0",
                  padding: "0.25rem 0.875rem",
                  marginRight: "0", // needed so only gap-2 handles spacing
                  marginBottom: "0", // needed so only gap-2 handles spacing
                  flex: `1 0 calc(50% - 0.5rem)`, // 2 per row, with spacing
                  maxWidth: "calc(50% - 0.5rem)",
                }}
              >
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                    style={{ minWidth: "1.5rem" }}
                  />
                )}
                <span className={`text-xs ${
                  isSelected && isAvailable
                    ? "text-gray-900"
                    : isAvailable
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}>
                  {variant.label}
                </span>
                {!isAvailable && (
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                    无货
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    if (cols === 3) {
      // 3 per row, each box wraps content
      return (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, idx) => {
            const isSelected = selectedVariants[variantGroupIndex] === idx;
            const isAvailable = variant.available;
            return (
              <div
                key={variant.id}
                className={getBoxClass(isSelected, isAvailable)}
                onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
                style={{
                  pointerEvents: isAvailable ? "auto" : "none",
                  alignItems: "center",
                  width: "fit-content",
                  minWidth: "0",
                  padding: "0.25rem 0.75rem",
                  flex: `1 0 calc(33.333% - 0.5rem)`,
                  maxWidth: "calc(33.333% - 0.5rem)",
                }}
              >
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                    style={{ minWidth: "1.5rem" }}
                  />
                )}
                <span className={`text-xs ${
                  isSelected && isAvailable
                    ? "text-gray-900"
                    : isAvailable
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}>
                  {variant.label}
                </span>
                {!isAvailable && (
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                    无货
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    if (cols === 4) {
      // 4 per row
      return (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, idx) => {
            const isSelected = selectedVariants[variantGroupIndex] === idx;
            const isAvailable = variant.available;
            return (
              <div
                key={variant.id}
                className={getBoxClass(isSelected, isAvailable)}
                onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
                style={{
                  pointerEvents: isAvailable ? "auto" : "none",
                  alignItems: "center",
                  width: "fit-content",
                  minWidth: "0",
                  padding: "0.25rem 0.75rem",
                  flex: `1 0 calc(25% - 0.5rem)`,
                  maxWidth: "calc(25% - 0.5rem)",
                }}
              >
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                    style={{ minWidth: "1.5rem" }}
                  />
                )}
                <span className={`text-xs ${
                  isSelected && isAvailable
                    ? "text-gray-900"
                    : isAvailable
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}>
                  {variant.label}
                </span>
                {!isAvailable && (
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                    无货
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    if (cols === 5) {
      // 5 per row
      return (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, idx) => {
            const isSelected = selectedVariants[variantGroupIndex] === idx;
            const isAvailable = variant.available;
            return (
              <div
                key={variant.id}
                className={getBoxClass(isSelected, isAvailable)}
                onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
                style={{
                  pointerEvents: isAvailable ? "auto" : "none",
                  alignItems: "center",
                  width: "fit-content",
                  minWidth: "0",
                  padding: "0.25rem 0.75rem",
                  flex: `1 0 calc(20% - 0.5rem)`,
                  maxWidth: "calc(20% - 0.5rem)",
                }}
              >
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                    style={{ minWidth: "1.5rem" }}
                  />
                )}
                <span className={`text-xs ${
                  isSelected && isAvailable
                    ? "text-gray-900"
                    : isAvailable
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}>
                  {variant.label}
                </span>
                {!isAvailable && (
                  <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                    无货
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    // fallback: just flow them inline
    return (
      <div className="flex flex-wrap gap-2">
        {variants.map((variant, idx) => {
          const isSelected = selectedVariants[variantGroupIndex] === idx;
          const isAvailable = variant.available;
          return (
            <div
              key={variant.id}
              className={getBoxClass(isSelected, isAvailable)}
              onClick={() => handleVariantClick(variantGroupIndex, idx, isAvailable)}
              style={{
                pointerEvents: isAvailable ? "auto" : "none",
                alignItems: "center",
                width: "fit-content",
                minWidth: "0",
                padding: "0.25rem 0.75rem",
              }}
            >
              {variant.image && (
                <img
                  src={variant.image}
                  alt={variant.label}
                  className="w-6 h-6 object-contain mr-2 rounded bg-gray-50"
                  style={{ minWidth: "1.5rem" }}
                />
              )}
              <span className={`text-xs ${
                isSelected && isAvailable
                  ? "text-gray-900"
                  : isAvailable
                    ? "text-gray-600"
                    : "text-gray-400"
              }`}>
                {variant.label}
              </span>
              {!isAvailable && (
                <div className="absolute top-0 right-0 bg-gray-600 bg-opacity-70 text-white text-[10px] px-1 py-0.5 rounded-tl rounded-br">
                  无货
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="col-span-5 bg-white p-5 rounded-lg">

      {/* Product title with star and collect button */}
      <div className="flex items-start justify-between mb-3">
        <h1 className="text-base font-bold text-gray-900 leading-tight flex-1">
          {/* Badge */}
          {product.badge && (
            <div
              className="inline-block text-white px-1 py-1 rounded text-[12px] font-bold mr-2"
              style={{
                backgroundColor: product.badgeBgColor || "#e1251b",
                color: product.badgeTextColor || "white",
              }}
            >
              {product.badge}
            </div>
          )}
          {product.title}
        </h1>
        <div className="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-[#e1251b] ml-2">
          <AiOutlineStar size={18} />
          <span className="text-sm">收藏</span>
        </div>
      </div>

      {/* Price with price tag and reviews/notifications */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl text-[#e1251b] font-bold">{product.currentPrice}</span>
        {product.priceTag && (
          <span className="bg-[#e1251b] text-white text-xs px-1.5 py-0.5 rounded">
            {product.priceTag}
          </span>
        )}
        {product.originalPrice && (
          <span className="text-base text-gray-500 line-through">{product.originalPrice}</span>
        )}
        {/* Reviews and notification on the same line as price */}
        {product.reviews && (
          <div className="flex items-center ml-auto">
            <span className="text-xs text-gray-500 cursor-pointer hover:underline border-r border-gray-300 pr-2">
              累计评价{product.reviews.count}
            </span>
            {product.reviews.hasNotification && (
              <span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-[#e1251b] pl-2">
                <FiBell size={14} />
                降价通知
              </span>
            )}
          </div>
        )}
      </div>

      {/* Promotions in a row */}
      {product.promotions && product.promotions.length > 0 && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {product.promotions.map((promo) => (
            <div
              key={promo.id}
              className="text-[#ff222d] text-xs px-2 py-1 rounded whitespace-nowrap font-bold"
              style={{
                backgroundColor: promo.backgroundColor || "#e1251b",
                color: "#ff222d",
              }}
            >
              {promo.text}
            </div>
          ))}
          {/* More promotions arrow */}
          {product.promotions.length > 2 && (
            <button className="text-gray-400 hover:text-[#e1251b] cursor-pointer">
              <FiChevronRight size={16} />
            </button>
          )}
        </div>
      )}

      {/* Ranking */}
      {product.ranking && (
        <div className="bg-orange-100 rounded px-3 py-2 mb-4 flex items-center gap-1 w-fit">
          {product.ranking.icon && (
            <img src={product.ranking.icon} alt="" className="w-4 h-4" />
          )}
          <span className="text-xs text-[#d38d28] font-bold">{product.ranking.text}</span>
          <FiChevronRight className="text-[#d38d28] ml-auto" size={12} />
        </div>
      )}

      {/* Shipping info */}
      {product.shipping && (
        <div className="mb-4 text-xs">
          <div className="grid grid-cols-[auto_1fr] items-start gap-10">
            {/* Left text */}
            <div className="text-gray-600 mb-0 mt-px min-w-[2em]">送至</div>
            {/* Right: Shipping info */}
            <div>
              <div
                className={`font-semibold ${
                  product.stockStatus === "out_of_stock"
                    ? "text-[#eda651]"
                    : product.stockStatus === "limited"
                    ? "text-orange-600"
                    : "text-gray-900"
                }`}
              >
                {product.shipping.availability}
              </div>
              <div className="text-gray-900 mt-1 flex items-center gap-1">
                {product.shipping.location}
                <FiChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Variant selections as 2-column grid: label on left, options on right */}
      {product.variants &&
        product.variants.map((variantGroup, groupIdx) => (
          <div key={groupIdx} className="mb-4">
            <div className="grid grid-cols-[auto_1fr] items-start gap-10">
              {/* Left: label (as a column) */}
              <div className="text-xs text-gray-600 mb-0 mt-px min-w-[2em] pt-[2px]">
                {variantGroup.label}
              </div>
              {/* Right: options */}
              <div>
                {renderVariantOptions(variantGroup.options, groupIdx, variantGroup.gridCols)}
              </div>
            </div>
          </div>
        ))}

      {/* Quantity selector and Add to cart */}
      <div className="flex items-end gap-3 border-t border-gray-200 pt-5">
        <div className="mb-1">
          <div className="flex items-center border border-gray-300 rounded w-fit">
            <button
              className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer bg-gray-50"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 h-full border-x border-gray-300 text-sm text-gray-700">
              {quantity}
            </span>
            <button
              className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer bg-gray-50"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 py-3 bg-[#e1251b] text-white rounded font-bold text-[16px] cursor-pointer hover:bg-[#c41e1a] transition-colors"
        >
          加入购物车
        </button>
      </div>
    </div>
  );
}
