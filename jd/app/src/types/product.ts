export type ProductVariant = {
  id: string;
  label: string;
  available: boolean;
  image?: string;
};

export type ProductPromotion = {
  id: string;
  text: string;
  backgroundColor?: string;
  textColor?: string;
};

export type ProductDetailData = {
  id: string;
  title: string;
  badge?: string; // e.g., "拍拍二手"
  badgeBgColor?: string;
  badgeTextColor?: string;
  currentPrice: string;
  originalPrice?: string;
  priceTag?: string; // e.g., "到手价"
  images?: string[]; // Product images array
  salesInfo?: string; // Gray text next to price in product listing (e.g., "销量1000+", "365天最低销量200万+")
  reviews?: {
    count: string; // e.g., "2万+"
    hasNotification?: boolean;
  };
  promotions?: ProductPromotion[];
  ranking?: {
    text: string;
    icon?: string;
  };
  shipping?: {
    availability: string;
    location: string;
  };
  variants?: {
    label: string; // e.g., "规格1"
    subtitle?: string;
    options: ProductVariant[];
    gridCols?: number; // How many columns in the grid (default 4 for inline, 2 for 2x2)
  }[];
  stockStatus?: "in_stock" | "out_of_stock" | "limited";
};

