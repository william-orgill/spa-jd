import phoneImg from "../assets/phone.png";
import type { ProductDetailData } from "../types/product";

// Centralized product data - can be expanded later
export const productCatalog: ProductDetailData[] = [
  {
    id: "1",
    title: "Apple iPhone 15 Pro Max 【24期免息】苹果 15promax 国行全网通 苹果手机 15 Promax 原色钛金属 9成新 256G国行【3期免息+三年店保+五年老店】",
    badge: "拍拍二手",
    badgeBgColor: "#90EE90",
    badgeTextColor: "#000",
    currentPrice: "¥4626",
    originalPrice: "¥4829.00",
    priceTag: "到手价",
    images: [
      phoneImg,
      "https://img11.360buyimg.com/n1/s720x720_jfs/t1/346990/3/19072/64840/6902ce13F7667a459/a658bb3d3db4b6cd.jpg",
      "https://img10.360buyimg.com/n1/s720x720_jfs/t1/337450/24/21920/54728/68f48607Fd37ce86e/afaccf82f3d62c98.jpg",
      "",
      "",
      "",
    ],
    salesInfo: "销量100+",
    reviews: {
      count: "2万+",
      hasNotification: true,
    },
    promotions: [
      { id: "1", text: "满2999减200", backgroundColor: "#ffebef" },
      { id: "2", text: "满2999减200", backgroundColor: "#ffebef" },
      { id: "3", text: "最高返462京豆", backgroundColor: "#ffebef" },
    ],
    ranking: {
      text: "512GB二手手机热卖榜·第4名>",
    },
    shipping: {
      availability: "此商品暂时售完",
      location: "海外澳大利亚 AUSTRALIAN CAPITAL TERRITORY ACT...",
    },
    stockStatus: "out_of_stock",
    variants: [
      {
        label: "规格1",
        subtitle: "颜色/材质",
        gridCols: 2,
        options: [
          { id: "1", label: "15 Promax 原色钛金属", available: true, image: "" },
          { id: "2", label: "15 Promax 蓝色钛金属", available: false, image: "" },
          { id: "3", label: "15 Promax 黑色钛金属", available: false, image: "" },
          { id: "4", label: "15 Promax 白色钛金属", available: true, image: "" },
        ],
      },
      {
        label: "规格2",
        subtitle: "成色/存储/保修",
        gridCols: 1,
        options: [
          { id: "1", label: "9成新256G国行【3期免息+三年店保+五年老店】", available: true },
          { id: "2", label: "95新256G国行【3期免息+三年店保+五年老店】", available: false },
          { id: "3", label: "99新256G国行【3期免息+三年店保+五年老店】", available: false },
          { id: "4", label: "95新512G国行【3期免息+三年店保+五年老店】", available: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "JEEP SPIRIT吉普衬衫男长袖外套男士秋冬季男装上衣服宽松休闲潮牌衬衣 - Men's Casual Shirt Jacket",
    badge: "官方旗舰店",
    badgeBgColor: "#e1251b",
    badgeTextColor: "#fff",
    currentPrice: "¥158.00",
    originalPrice: "¥299.00",
    priceTag: "活动价",
    images: [
      "https://img12.360buyimg.com/jdcms/s720x720_jfs/t1/237744/12/25476/95496/66e3cfc9F8273b8c1/863c633bb1ef54f6.jpg.avif",
      "",
      "",
      "",
      "",
      "",
    ],
    salesInfo: "销量5000+",
    reviews: {
      count: "5000+",
      hasNotification: false,
    },
    promotions: [
      { id: "1", text: "满199减50", backgroundColor: "#ffebef" },
      { id: "2", text: "2件9折", backgroundColor: "#ffebef" },
      { id: "3", text: "免费退换货", backgroundColor: "#e8f4ff", textColor: "#1890ff" },
    ],
    ranking: {
      text: "男士衬衫热卖榜·第12名>",
    },
    shipping: {
      availability: "有货",
      location: "北京朝阳区",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "颜色",
        subtitle: "选择颜色",
        gridCols: 4,
        options: [
          { id: "1", label: "经典黑色", available: true, image: "https://img12.360buyimg.com/jdcms/s80x80_jfs/t1/237744/12/25476/95496/66e3cfc9F8273b8c1/863c633bb1ef54f6.jpg.avif" },
          { id: "2", label: "深蓝", available: true, image: "" },
          { id: "3", label: "卡其色", available: true, image: "" },
          { id: "4", label: "军绿色", available: false, image: "" },
        ],
      },
      {
        label: "尺码",
        subtitle: "选择尺码",
        gridCols: 4,
        options: [
          { id: "1", label: "S", available: true },
          { id: "2", label: "M", available: true },
          { id: "3", label: "L", available: true },
          { id: "4", label: "XL", available: true },
          { id: "5", label: "XXL", available: false },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "华丰京觅华丰三鲜伊面方便面五连包 110g 大面饼 原味118g*5袋 - Instant Noodles 5 Pack",
    badge: "京东自营",
    badgeBgColor: "#e1251b",
    badgeTextColor: "#fff",
    currentPrice: "¥12.90",
    originalPrice: "¥15.80",
    priceTag: "特价",
    images: [
      "https://img20.360buyimg.com/jdcms/s720x720_jfs/t1/331950/33/14298/148515/68ca2f70F1cad3f75/1b0e295ae4a5e45b.jpg.avif",
      "",
      "",
      "",
      "",
      "",
    ],
    salesInfo: "365天最低销量200万+",
    reviews: {
      count: "10万+",
      hasNotification: true,
    },
    promotions: [
      { id: "1", text: "买2免1", backgroundColor: "#ffebef" },
      { id: "2", text: "满59包邮", backgroundColor: "#ffebef" },
      { id: "3", text: "限时特价", backgroundColor: "#fff2e8", textColor: "#fa541c" },
    ],
    ranking: {
      text: "方便面热卖榜·第3名>",
    },
    shipping: {
      availability: "现货",
      location: "上海浦东新区",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "口味",
        subtitle: "选择口味",
        gridCols: 2,
        options: [
          { id: "1", label: "原味三鲜", available: true, image: "https://img20.360buyimg.com/jdcms/s80x80_jfs/t1/331950/33/14298/148515/68ca2f70F1cad3f75/1b0e295ae4a5e45b.jpg.avif" },
          { id: "2", label: "麻辣味", available: true, image: "" },
          { id: "3", label: "牛肉味", available: false, image: "" },
          { id: "4", label: "酸菜味", available: true, image: "" },
        ],
      },
      {
        label: "包装",
        subtitle: "选择包装规格",
        gridCols: 1,
        options: [
          { id: "1", label: "5连包【特价】", available: true },
          { id: "2", label: "10连包【更优惠】", available: true },
          { id: "3", label: "24连包【批发价】", available: true },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "爱仕达（ASD）炒锅钛瓷不粘锅钛锅炒菜锅32cm燃气电磁炉通用CL32T5WJ晨曦白内灰 - Titanium Non-Stick Frying Pan",
    badge: "京东自营",
    badgeBgColor: "#e1251b",
    badgeTextColor: "#fff",
    currentPrice: "¥269.00",
    originalPrice: "¥399.00",
    priceTag: "到手价",
    images: [
      "https://img20.360buyimg.com/jdcms/s720x720_jfs/t1/246700/29/34302/158646/6905e7f0F53f0ea55/52fec4375f2f09dc.jpg.avif",
      "https://img13.360buyimg.com/n1/s720x720_jfs/t1/246700/29/34302/158646/6905e7f0F53f0ea55/52fec4375f2f09dc.jpg",
      "https://img14.360buyimg.com/n1/s720x720_jfs/t1/246700/29/34302/158646/6905e7f0F53f0ea55/52fec4375f2f09dc.jpg",
      "",
      "",
      "",
    ],
    salesInfo: "销量1000+",
    reviews: {
      count: "2.5万+",
      hasNotification: true,
    },
    promotions: [
      { id: "1", text: "满199减30", backgroundColor: "#ffebef" },
      { id: "2", text: "赠锅铲", backgroundColor: "#e8f4ff", textColor: "#1890ff" },
      { id: "3", text: "3年质保", backgroundColor: "#f6ffed", textColor: "#52c41a" },
    ],
    ranking: {
      text: "炒锅热卖榜·第7名>",
    },
    shipping: {
      availability: "现货",
      location: "浙江杭州",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "尺寸",
        subtitle: "选择锅具尺寸",
        gridCols: 3,
        options: [
          { id: "1", label: "28cm【适合1-2人】", available: true, image: "https://img20.360buyimg.com/jdcms/s80x80_jfs/t1/246700/29/34302/158646/6905e7f0F53f0ea55/52fec4375f2f09dc.jpg.avif" },
          { id: "2", label: "32cm【热销款 适合3-4人】", available: true, image: "" },
          { id: "3", label: "36cm【适合5-6人】", available: false, image: "" },
        ],
      },
      {
        label: "颜色",
        subtitle: "选择锅具颜色",
        gridCols: 3,
        options: [
          { id: "1", label: "晨曦白", available: true },
          { id: "2", label: "经典黑", available: true },
          { id: "3", label: "星空灰", available: true },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "紫苏酱新鲜香辣拌面拌饭神器素食开胃下饭菜家用雀舌 常吃睡眠好+【香辣】特级紫苏酱+ 血亏价：买1送1【发150克*2大瓶】 - Perilla Sauce Condiment",
    badge: "品牌旗舰店",
    badgeBgColor: "#ff4d4f",
    badgeTextColor: "#fff",
    currentPrice: "¥29.90",
    originalPrice: "¥59.80",
    priceTag: "买一送一",
    images: [
      "https://img20.360buyimg.com/jdcms/s720x720_jfs/t1/259304/6/23847/200377/67bc218bF759bb975/fffb3e5cbe179343.jpg.avif",
      "https://img13.360buyimg.com/n1/s720x720_jfs/t1/259304/6/23847/200377/67bc218bF759bb975/fffb3e5cbe179343.jpg",
      "https://img14.360buyimg.com/n1/s720x720_jfs/t1/259304/6/23847/200377/67bc218bF759bb975/fffb3e5cbe179343.jpg",
      "",
      "",
      "",
    ],
    salesInfo: "销量5万+",
    reviews: {
      count: "8万+",
      hasNotification: true,
    },
    promotions: [
      { id: "1", text: "买1送1", backgroundColor: "#fff2e8", textColor: "#fa541c" },
      { id: "2", text: "满79包邮", backgroundColor: "#ffebef" },
      { id: "3", text: "限时抢购", backgroundColor: "#f5222d", textColor: "#fff" },
    ],
    ranking: {
      text: "调味酱热卖榜·第2名>",
    },
    shipping: {
      availability: "现货速发",
      location: "湖南长沙",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "口味",
        subtitle: "选择酱料口味",
        gridCols: 2,
        options: [
          { id: "1", label: "香辣味【热销】", available: true, image: "https://img20.360buyimg.com/jdcms/s80x80_jfs/t1/259304/6/23847/200377/67bc218bF759bb975/fffb3e5cbe179343.jpg.avif" },
          { id: "2", label: "蒜香味", available: true, image: "" },
          { id: "3", label: "原味", available: true, image: "" },
          { id: "4", label: "特辣味", available: false, image: "" },
        ],
      },
      {
        label: "规格",
        subtitle: "选择包装规格",
        gridCols: 1,
        options: [
          { id: "1", label: "150g*2瓶【买1送1】", available: true },
          { id: "2", label: "150g*4瓶【更优惠】", available: true },
          { id: "3", label: "300g*2瓶【大瓶装】", available: true },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "奥克斯（AUX）【真国家补贴】智能豪华按摩椅2025十大品牌家用全身太空舱零重力多功能电动全自动老人沙发摇摇椅 【不惧对比 横扫同级】创新摇摆系统深睡舱+米棕色 【买按摩椅认准官方旗舰】金牌服务丨关注每一个细节 - Smart Massage Chair",
    badge: "官方旗舰店",
    badgeBgColor: "#1890ff",
    badgeTextColor: "#fff",
    currentPrice: "¥8999.00",
    originalPrice: "¥12999.00",
    priceTag: "补贴价",
    images: [
      "https://img20.360buyimg.com/jdcms/s720x720_jfs/t1/238712/6/32850/140762/68e76698F88a517d3/1dba87156e40d898.jpg.avif",
      "https://img13.360buyimg.com/n1/s720x720_jfs/t1/238712/6/32850/140762/68e76698F88a517d3/1dba87156e40d898.jpg",
      "https://img14.360buyimg.com/n1/s720x720_jfs/t1/238712/6/32850/140762/68e76698F88a517d3/1dba87156e40d898.jpg",
      "",
      "",
      "",
    ],
    salesInfo: "销量5000+",
    reviews: {
      count: "3000+",
      hasNotification: false,
    },
    promotions: [
      { id: "1", text: "国家补贴价", backgroundColor: "#f6ffed", textColor: "#52c41a" },
      { id: "2", text: "24期免息", backgroundColor: "#e8f4ff", textColor: "#1890ff" },
      { id: "3", text: "免费安装", backgroundColor: "#ffebef" },
    ],
    ranking: {
      text: "按摩椅热卖榜·第5名>",
    },
    shipping: {
      availability: "有货",
      location: "广东佛山",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "颜色",
        subtitle: "选择按摩椅颜色",
        gridCols: 3,
        options: [
          { id: "1", label: "米棕色【热销】", available: true, image: "https://img20.360buyimg.com/jdcms/s80x80_jfs/t1/238712/6/32850/140762/68e76698F88a517d3/1dba87156e40d898.jpg.avif" },
          { id: "2", label: "深灰色", available: true, image: "" },
          { id: "3", label: "咖啡色", available: false, image: "" },
        ],
      },
      {
        label: "功能",
        subtitle: "选择按摩功能配置",
        gridCols: 1,
        options: [
          { id: "1", label: "基础款【零重力+全身按摩】", available: true },
          { id: "2", label: "豪华款【+热敷+音乐】", available: true },
          { id: "3", label: "旗舰款【+AI检测+5D按摩】", available: true },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "【假一赔三】活力28花漾茉莉洗衣液洁净衣物去渍亮白增艳留香持久 【囤货装】2kg*2袋 - Jasmine Laundry Detergent",
    badge: "京东自营",
    badgeBgColor: "#e1251b",
    badgeTextColor: "#fff",
    currentPrice: "¥45.90",
    originalPrice: "¥69.90",
    priceTag: "囤货价",
    images: [
      "https://img11.360buyimg.com/jdcms/s720x720_jfs/t1/342261/34/10744/95490/68e784dfFf3742f8d/b696eb63626cbf5f.jpg.avif",
      "https://img12.360buyimg.com/n1/s720x720_jfs/t1/342261/34/10744/95490/68e784dfFf3742f8d/b696eb63626cbf5f.jpg",
      "https://img13.360buyimg.com/n1/s720x720_jfs/t1/342261/34/10744/95490/68e784dfFf3742f8d/b696eb63626cbf5f.jpg",
      "",
      "",
      "",
    ],
    salesInfo: "销量5万+",
    reviews: {
      count: "15万+",
      hasNotification: true,
    },
    promotions: [
      { id: "1", text: "满99减20", backgroundColor: "#ffebef" },
      { id: "2", text: "买2送1", backgroundColor: "#fff2e8", textColor: "#fa541c" },
      { id: "3", text: "假一赔三", backgroundColor: "#f6ffed", textColor: "#52c41a" },
    ],
    ranking: {
      text: "洗衣液热卖榜·第1名>",
    },
    shipping: {
      availability: "现货",
      location: "天津",
    },
    stockStatus: "in_stock",
    variants: [
      {
        label: "香味",
        subtitle: "选择洗衣液香味",
        gridCols: 3,
        options: [
          { id: "1", label: "花漾茉莉【热销】", available: true, image: "https://img11.360buyimg.com/jdcms/s80x80_jfs/t1/342261/34/10744/95490/68e784dfFf3742f8d/b696eb63626cbf5f.jpg.avif" },
          { id: "2", label: "清新海洋", available: true, image: "" },
          { id: "3", label: "阳光薰衣草", available: true, image: "" },
        ],
      },
      {
        label: "规格",
        subtitle: "选择包装规格",
        gridCols: 1,
        options: [
          { id: "1", label: "2kg*2袋【囤货装】", available: true },
          { id: "2", label: "2kg*4袋【家庭装】", available: true },
          { id: "3", label: "1kg*8袋【组合装】", available: true },
        ],
      },
    ],
  },
];

// Helper function to get product by ID
export function getProductById(productId: string): ProductDetailData | undefined {
  return productCatalog.find((p) => p.id === productId);
}

// Helper function to get the display price as a number (removes ¥ and converts)
export function getPriceAsNumber(priceStr: string): number {
  return parseFloat(priceStr.replace("¥", "").replace(",", ""));
}