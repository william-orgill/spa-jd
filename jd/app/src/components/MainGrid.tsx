import { useAppState } from "../state/appState";
import { TbFridge, TbBabyBottle } from "react-icons/tb";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import { LiaCouchSolid } from "react-icons/lia";
import { IoShirtOutline } from "react-icons/io5";
import { PiHighHeel, PiBuildingOfficeLight } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { CiApple } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";

// Left category config with icons
const leftCategories = [
  {
    label: "家用电器",
    icon: TbFridge,
  },
  {
    label: "手机 / 运营商 / 数码",
    icon: FiSmartphone,
  },
  {
    label: "电脑 / 办公 / 文具",
    icon: FiMonitor,
  },
  {
    label: "家居 / 家具 / 家装 / 厨具",
    icon: LiaCouchSolid,
  },
  {
    label: "男装 / 女装 / 鞋靴 / 内衣",
    icon: IoShirtOutline,
  },
  {
    label: "美妆 / 个护清洁 / 宠物",
    icon: GiLipstick,
  },
  {
    label: "女婴 / 童装 / 玩具 / 乐器",
    icon: TbBabyBottle,
  },
  {
    label: "男鞋 / 运动 / 户外",
    icon: PiHighHeel,
  },
  {
    label: "房产 / 汽车 / 汽车用品",
    icon: PiBuildingOfficeLight,
  },
  {
    label: "母婴 / 玩具乐器",
    icon: TbShoe,
  },
  {
    label: "食品 / 酒类 / 生鲜 / 特产",
    icon: CiApple,
  },
];

// Center bar (top shortcuts) with label and image
const centerShortcuts = [
  {
    label: "运动馆",
    img: "https://m.360buyimg.com/babel/jfs/t20280625/313095/2/12548/9703/685cacafFe9ac06db/9ebfa5f63bb1bd26.png",
  },
  {
    label: "司法拍卖",
    img: "https://m.360buyimg.com/babel/jfs/t20280623/311216/4/12218/52773/685a75feF5900edab/96cc24403cf5b1e5.png",
  },
  {
    label: "企业购",
    img: "https://m.360buyimg.com/babel/jfs/t20280622/318439/8/11500/12943/6858e5aaF2d7f3499/36e067da0ed3d2da.png",
  },
  {
    label: "看病买药",
    img: "https://m.360buyimg.com/babel/jfs/t20281009/337215/31/18595/7997/68e8d5d0F81b0c921/a4ab8db30f6114ee.png",
  },
  {
    label: "政府消费券",
    img: "https://m.360buyimg.com/babel/jfs/t20280623/320945/2/11431/8726/685a6abdFeaf2dadf/6f9d70312fbc3512.png",
  },
  {
    label: "家电家居",
    img: "https://m.360buyimg.com/babel/jfs/t20280623/303119/10/15980/11623/685a6d21Fb97bca06/c4de9cc700e9c4c0.png",
  },
  {
    label: "家电国补",
    img: "https://m.360buyimg.com/babel/jfs/t20280623/295025/23/16699/10674/685a6a1cFadbc88aa/86f98427852e3bde.png",
  },
  {
    label: "服饰美妆",
    img: "https://m.360buyimg.com/babel/jfs/t20280623/292638/38/16357/12031/685a7665Fd67ad1a3/5ff83344b998988e.png",
  },
  {
    label: "五金城",
    img: "https://m.360buyimg.com/babel/jfs/t20280624/297961/10/18450/19359/685b63c2F01e2a155/cad0c046efd5a1e9.png",
  },
  {
    label: "全部频道",
    img: "https://img11.360buyimg.com/img/jfs/t1/306209/32/11578/822/68528937Fd5987cb3/31367a9839e0121c.png",
  },
];

// "Product" grid -- these are just placeholders with Chinese text, no images
const productGrid = [
  [
    { name: "iQOO Neo11", price: "¥2099" },
    { name: "小米空调", price: "¥1499" },
    { name: "飞科剃须刀", price: "¥199" },
    { name: "美的饮水机", price: "¥499" },
  ],
  [
    { name: "松下电吹风", price: "¥269" },
    { name: "天猫精灵", price: "¥99" },
    { name: "安踏运动鞋", price: "¥399" },
    { name: "北鼎养生壶", price: "¥659" },
  ],
];

export default function MainGrid() {
  const [state, setState] = useAppState();

  return (
    <div
      className="max-w-[1600px] mx-auto mt-1 relative z-10"
      style={{ height: 432 }}
    >
      {/* Grid with fixed left and right, flexible middle */}
      <div
        className="grid gap-2 bg-white p-4 rounded-xl h-full"
        style={{
          gridTemplateColumns: "248px minmax(0,1fr) 248px"
        }}
      >
        {/* Left category list */}
        <div className="bg-[#F7F8FC] rounded-lg text-sm text-gray-700 flex flex-col justify-between" style={{ width: 248 }}>
          <div className="flex flex-col pt-1">
            {leftCategories.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center w-full gap-2 cursor-pointer transition-colors hover:bg-gray-200 px-3 py-2"
              >
                <Icon size={18} className="w-[16px]" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center white box */}
        <div className="px-0 py-0 flex flex-col h-60 justify-between">
          {/* Top bar for shortcuts */}
          <div className="px-1 py-2 flex flex-wrap items-center gap-y-1 min-h-[48px] bg-[#F7F8FC] rounded-lg mb-4 mx-3">
            {centerShortcuts.map(({ label, img }) => (
              <span
                key={label}
                className="flex items-center gap-1 text-md font-bold text-[#585858] px-2 cursor-pointer rounded hover:bg-[#f5f5f5] transition"
              >
                <img src={img} alt={label} className="w-5 h-5 object-contain" />
                {label}
              </span>
            ))}
          </div>
          {/* Product grid */}
          <div className="flex-1 flex flex-col justify-center pb-2">
            <div className="grid grid-cols-4 gap-x-3 gap-y-4 h-full px-3">
              {productGrid.flat().map((prod, i) => (
                <div
                  key={prod.name + i}
                  className="bg-gray-50 border border-gray-100 rounded-lg flex flex-col justify-between transition px-2 py-2 h-[160px] cursor-pointer"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="flex flex-col flex-1 justify-between">
                    <span className="text-xs font-semibold text-[#333] truncate mb-1">{prod.name}</span>
                    <span className="text-[#e1251b] text-base font-bold">{prod.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right login/entry panel */}
        <div className="bg-[#F7F8FC] rounded-lg p-3 h-full flex flex-col justify-between" style={{ width: 248 }}>
          {/* Hi greeting and buttons */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={"https://img10.360buyimg.com/img/jfs/t1/346074/6/4118/8195/68c92b91F1dc4cd05/32f8deaab0e08085.png.avif"} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
              <div className="text-sm font-medium mb-2">Hi～上午好！</div>
            </div>
            <div className="flex gap-2 mb-2">
              <button className="flex-1 bg-[#e1251b] text-white rounded py-1.5 text-sm cursor-pointer font-semibold">
                登录
              </button>
              <button className="flex-1 bg-[#ffd84d] text-black rounded py-1.5 text-sm cursor-pointer font-semibold">
                注册
              </button>
            </div>
            <div className="flex flex-row items-center justify-between bg-white rounded-md px-2 py-[6px] mb-4 border border-gray-100 text-[#333] text-[13px]">
              <div>
                <span className="text-xs text-[#888]">新人专享</span>
                <span className="ml-2 font-bold text-[#e1251b]">¥5</span>
              </div>
              <button className="bg-[#FFF3E1] text-[#FF5500] rounded px-2 py-1 ml-2 text-xs font-medium">
                立即领取
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs text-center">
            {["优惠券", "秒杀", "PLUS", "京东国际", "京东云", "充值缴费"].map((t) => (
              <div key={t} className="bg-white border border-[#f6f6f6] rounded py-2 cursor-pointer hover:bg-[#f5f5f5]">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
