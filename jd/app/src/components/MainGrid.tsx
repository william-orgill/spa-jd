import { useState, useEffect, useRef } from "react";
import { TbFridge, TbBabyBottle } from "react-icons/tb";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import { LiaCouchSolid } from "react-icons/lia";
import { IoShirtOutline } from "react-icons/io5";
import { PiHighHeel, PiBuildingOfficeLight } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { CiApple } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiClock, FiStar } from "react-icons/fi";
import { LiaCommentDots, LiaStoreSolid } from "react-icons/lia";
import { BsBoxSeam, BsCurrencyDollar } from "react-icons/bs";

// Banner carousel configuration with 6 pages, images as BGs only
const carouselPages = [
  {
    title: "看苏超决赛",
    subtitle: "爆品好价抢",
    description: "官方同款爆品直降",
    bgImage: "https://m.360buyimg.com/babel/jfs/t20281030/353833/26/3893/97915/690475e8F446f9926/e436dda904a165aa.png"
  },
  {
    title: "品质精选",
    subtitle: "好物立刻抢购",
    description: "爆单预警，抢先购",
    bgImage: "https://img1.360buyimg.com/da/jfs/t1/323993/10/10212/18574/68a9ecb6Fb5e09565/e13c4f3860da8ea9.png",
  },
  {
    title: "精选好物",
    subtitle: "爆品好价抢",
    description: "爆单预警，抢先购",
    bgImage: "https://img1.360buyimg.com/da/jfs/t1/288775/27/20294/22126/6898cbefF7c2a25ee/cc3b19f547a001e4.png",
  },
  {
    title: "金领冠新品",
    subtitle: "铂萃重磅上新",
    description: "1次至多到手20件",
    bgImage: "https://m.360buyimg.com/babel/jfs/t20281029/336054/19/27166/35475/6903255dFd1bbec02/a6e2ffd234695160.jpg",
  },
  {
    title: "精选好物",
    subtitle: "好物立刻抢购",
    description: "爆款直降，速抢",
    bgImage: "https://img1.360buyimg.com/da/jfs/t1/331946/25/19684/98363/68dea8e7Fb0bd87bd/cfc3a381fd66980b.png",
  },
  {
    title: "超补情报局",
    subtitle: "全年至低价",
    description: "粮油调味 绝密补贴计划",
    bgImage: "https://m.360buyimg.com/babel/jfs/t20281030/337425/9/23435/42843/6904b395F762b8ddc/cddc89732af46cbf.png",
  },
];

const leftCategories = [
  { label: "家用电器", icon: TbFridge },
  { label: "手机 / 运营商 / 数码", icon: FiSmartphone },
  { label: "电脑 / 办公 / 文具", icon: FiMonitor },
  { label: "家居 / 家具 / 家装 / 厨具", icon: LiaCouchSolid },
  { label: "男装 / 女装 / 鞋靴 / 内衣", icon: IoShirtOutline },
  { label: "美妆 / 个护清洁 / 宠物", icon: GiLipstick },
  { label: "女婴 / 童装 / 玩具 / 乐器", icon: TbBabyBottle },
  { label: "男鞋 / 运动 / 户外", icon: PiHighHeel },
  { label: "房产 / 汽车 / 汽车用品", icon: PiBuildingOfficeLight },
  { label: "母婴 / 玩具乐器", icon: TbShoe },
  { label: "食品 / 酒类 / 生鲜 / 特产", icon: CiApple },
];

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

// Top right section: "国家补贴 × 百亿补贴"
const subsidyProducts = [
  { img: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/204657/25/46978/60818/6714e372F5a1993b4/c5b58415ff76bb7d.png", price: "¥4199" },
  { img: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/190635/26/38225/8984/653b635bF7664859b/6e5aa45f1b42a9f0.jpg", price: "¥1079", subsidy: "已补170元" },
  { img: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/288435/14/17/16724/680b4e55Fb6cd31ac/b5c48c66c4231611.jpg", price: "¥6099", subsidy: "已补200.7元" },
  { img: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t20270809/110760/14/39714/60663/66b5ba47Fbb0cbb95/00e5b6c483e5f35b.jpg", price: "¥38.5", subsidy: "已补10.78元" },
];

// Bottom row sections -- UPDATED TO ONLY 4, last two are combined ("9.9包邮" & "1元也包邮" into one section)
const bottomSections = [
  {
    title: "家电家居",
    subtitle: "新客专享权益",
    type: "special",
    leftBox: {
      redBox: true,
      text: "专享权益",
      benefits: ["1元包邮", "居家推荐", "好物优选"]
    },
    rightBox: {
      img: "https://img30.360buyimg.com/jdcms/s77x77_jfs/t1/344403/35/9276/38841/68e0cff8Fc071f4f9/4e86c46910971dc2.jpg.avif",
      price: "¥14.62"
    }
  },
  {
    title: "京东直播",
    subtitle: "直播享好价",
    type: "twoItems",
    leftItem: {
      img: "https://m.360buyimg.com/livecms/jfs/t1/350039/37/8705/50299/68db546eF21386655/1ea39bd983f6753b.png",
      text: "赫莲娜"
    },
    rightItem: {
      img: "https://m.360buyimg.com/livecms/jfs/t1/359253/40/766/108011/69036d4eFa1407e7b/16415baddafb59e8.png",
      text: "京喜自营"
    }
  },
  {
    title: "京东秒杀",
    subtitle: "10点场 限时秒杀",
    type: "twoItems",
    leftItem: {
      img: "https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/334891/16/26173/43449/68ff1901Ff393fa2e/b9113ca998a2998a.jpg",
      price: "¥111.9 秒杀价"
    },
    rightItem: {
      img: "https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/218559/33/44626/20686/670ceaffF1a2ad89f/240775b0f22c332b.jpg",
      price: "¥61.5 秒杀价"
    }
  },
  {
    title: "9.9包邮&1元也包邮",
    subtitle: null,
    type: "doubleSingleImage",
    items: [
      {
        img: "https://img30.360buyimg.com/jdcms/s77x77_jfs/t1/215184/20/288/61722/6167cc07E6a92e249/d7bfeea139648391.jpg.avif",
        price: "¥20.6",
        label: "9.9包邮",
      },
      {
        img: "https://img10.360buyimg.com/jdcms/s77x77_jfs/t1/296276/13/25662/107849/68888d6dF463445ca/18ea8aa9614676d9.jpg.avif",
        price: "¥0.01",
        label: "1元也包邮",
      }
    ]
  },
];

export default function MainGrid() {
  // Carousel state
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [showArrows, setShowArrows] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % carouselPages.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Navigate to specific page
  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    // Reset auto-play timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % carouselPages.length);
    }, 4000);
  };

  // Navigate left/right
  const goToNext = () => {
    goToPage((currentPage + 1) % carouselPages.length);
  };

  const goToPrev = () => {
    goToPage((currentPage - 1 + carouselPages.length) % carouselPages.length);
  };

  return (
    <div
      className="max-w-[1600px] mx-auto mt-1 relative z-10"
      style={{ height: 432 }}
    >
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
          {/* Custom Product "Hybrid" Grid */}
          <div className="flex-1 flex flex-col justify-center pb-2">
            <div
              className="grid gap-x-3 gap-y-4 h-full px-3"
              style={{
                gridTemplateRows: "repeat(2, 1fr)",
                gridTemplateColumns: "repeat(4, 1fr)"
              }}
            >
              {/* Banner Carousel */}
              <div
                className="relative rounded-lg flex col-span-2 h-[160px] overflow-hidden group cursor-pointer"
                style={{
                  background: `url("${carouselPages[currentPage].bgImage}") center center / cover no-repeat`,
                  gridRow: "1",
                  gridColumn: "1 / span 2",
                  transition: "background 0.5s ease",
                }}
                onMouseEnter={() => setShowArrows(true)}
                onMouseLeave={() => setShowArrows(false)}
              >
                {/* Left Arrow */}
                <button
                  onClick={goToPrev}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity duration-300 cursor-pointer ${
                    showArrows ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                >
                  <FiChevronLeft size={24} className="text-white" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={goToNext}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 transition-opacity duration-300 cursor-pointer ${
                    showArrows ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                >
                  <FiChevronRight size={24} className="text-white" />
                </button>

                <div className="flex flex-col justify-between h-full pl-6 py-6 flex-1 max-w-[60%]">
                  <div>
                    <div className="text-white text-[24px] leading-[28px] font-extrabold mb-[6px] transition-opacity duration-300 drop-shadow-lg">
                      {carouselPages[currentPage].title}
                      {carouselPages[currentPage].subtitle && (
                        <>
                          <br />
                          {carouselPages[currentPage].subtitle}
                        </>
                      )}
                    </div>
                    <div className="text-white text-[15px] font-medium opacity-80 transition-opacity duration-300 drop-shadow">
                      {carouselPages[currentPage].description}
                    </div>
                  </div>
                  {/* Dots - now closer together */}
                  <div className="flex mt-4">
                    {carouselPages.map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                        style={{ width: 18, height: 16, borderRadius: 99, cursor: "pointer" }}
                        onMouseEnter={() => {
                          setHoveredDot(index);
                          goToPage(index);
                        }}
                        onMouseLeave={() => setHoveredDot(null)}
                      >
                        <div
                          className={`transition-all duration-200 ${
                            index === currentPage
                              ? "w-8 h-3 bg-white rounded-full"
                              : hoveredDot === index
                              ? "w-3 h-4 bg-white opacity-80 rounded-full"
                              : "w-3 h-3 bg-white opacity-40 rounded-full"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Top right: 国家补贴 × 百亿补贴 section */}
              <div
                className="col-span-2 h-[160px] bg-[#F7F8FC] rounded-lg p-3 flex flex-col"
                style={{
                  gridRow: "1",
                  gridColumn: "3 / span 2",
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <div className="text-base font-bold text-[#333]">国家补贴 × 百亿补贴</div>
                  <div className="bg-[#e1251b] text-white text-xs px-2 py-0.5 rounded">限时补贴</div>
                </div>
                {/* Products */}
                <div className="flex flex-row gap-3 flex-1">
                  {subsidyProducts.map((prod, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center flex-1"
                      style={{ minWidth: 0 }}
                    >
                      <img src={prod.img} alt="" className="w-full h-20 object-contain mb-1" style={{ mixBlendMode: 'multiply' }} />
                      {/* Reduce the gap between img and price to avoid text going outside the div, also prevent overflow */}
                      <div className="text-[#e1251b] text-sm font-bold leading-tight text-center break-words" style={{ marginTop: 0 }}>
                        {prod.price}
                      </div>
                      {prod.subsidy && (
                        <div className="text-gray-500 text-xs leading-tight mt-1 text-center break-words" style={{marginTop: 2, maxWidth: "100%"}}>
                          {prod.subsidy}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom row: 4 sections */}
              {bottomSections.map((section, i) => (
                <div
                  key={i}
                  className="bg-[#F7F8FC] rounded-lg p-3 h-[160px] flex flex-col"
                  style={{
                    gridRow: "2",
                    gridColumn: `${i + 1}`,
                  }}
                >
                  {/* Title and subtitle */}
                  <div className="mb-2">
                    <div className="text-sm font-bold text-[#333]">{section.title}</div>
                    {section.subtitle && <div className="text-xs text-[#b8860b]">{section.subtitle}</div>}
                  </div>
                  {/* Content based on type */}
                  <div className="flex-1">
                    {section.type === "special" && section.leftBox && section.rightBox && (
                      <div className="grid grid-cols-2 gap-2 h-full">
                        {/* Left red box */}
                        <div className="bg-[#e1251b] rounded p-2 flex flex-col justify-between">
                          <div className="text-white text-xs font-bold">{section.leftBox.text}</div>
                          <div className="space-y-1">
                            {section.leftBox.benefits.map((benefit, idx) => (
                              <div key={idx} className="text-white text-xs flex items-center">
                                <span className="mr-1">✓</span> {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Right image */}
                        <div className="flex flex-col items-center justify-between">
                          <img src={section.rightBox.img} alt="" className="h-16 object-contain" style={{ mixBlendMode: 'multiply' }} />
                          <div className="text-[#e1251b] text-xs font-bold">{section.rightBox.price}</div>
                        </div>
                      </div>
                    )}
                    {section.type === "twoItems" && section.leftItem && section.rightItem && (
                      <div className="grid grid-cols-2 gap-2 h-full">
                        <div className="flex flex-col items-center">
                          <img src={section.leftItem.img} alt="" className="h-20 object-contain mb-1" style={{ mixBlendMode: 'multiply' }} />
                          {section.leftItem.text && <div className="text-xs text-[#333]">{section.leftItem.text}</div>}
                          {section.leftItem.price && <div className="text-[#e1251b] text-xs">{section.leftItem.price}</div>}
                        </div>
                        <div className="flex flex-col items-center">
                          <img src={section.rightItem.img} alt="" className="h-20 object-contain mb-1" style={{ mixBlendMode: 'multiply' }} />
                          {section.rightItem.text && <div className="text-xs text-[#333]">{section.rightItem.text}</div>}
                          {section.rightItem.price && <div className="text-[#e1251b] text-xs">{section.rightItem.price}</div>}
                        </div>
                      </div>
                    )}
                    {/* Combined double single image section */}
                    {section.type === "doubleSingleImage" && section.items && (
                      <div className="flex flex-row items-center justify-between h-full gap-2">
                        {section.items.map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center flex-1">
                            <img src={item.img} alt={item.label} className="h-16 object-contain mb-1" style={{ mixBlendMode: 'multiply' }} />
                            <div className="text-[13px] text-[#333] font-semibold mb-1">{item.label}</div>
                            <div className="text-[#e1251b] text-sm font-bold">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right login/entry panel */}
        <div className="bg-[#F7F8FC] rounded-lg p-3 h-full flex flex-col" style={{ width: 248 }}>
          {/* Profile section */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-3 relative">
              <img src={"https://img10.360buyimg.com/img/jfs/t1/346074/6/4118/8195/68c92b91F1dc4cd05/32f8deaab0e08085.png.avif"} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#333]">7zlu3uoc0...</div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span className="cursor-pointer">切换账号</span>
                  <span className="text-gray-300">|</span>
                  <span className="cursor-pointer">退出</span>
                </div>
              </div>
            </div>
            
            {/* Account balances */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="flex flex-col items-center">
                <div className="text-base font-bold text-[#333]">2</div>
                <div className="text-xs text-gray-600">优惠券</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-base font-bold text-[#333]">赚京豆</div>
                <div className="text-xs text-gray-600">京豆</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-base font-bold text-[#333]">¥3</div>
                <div className="text-xs text-gray-600">红包</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-base font-bold text-[#333]">购卡返</div>
                <div className="text-xs text-gray-600">京东E卡</div>
              </div>
            </div>
          </div>

          {/* Order status icons */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="flex flex-col items-center cursor-pointer">
              <BsCurrencyDollar className="text-2xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">待付款</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <BsBoxSeam className="text-2xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">待收货</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <LiaCommentDots className="text-2xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">待评价</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <FiChevronLeft className="text-2xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">退换售后</span>
            </div>
          </div>

          {/* Order info banner */}
          <div className="bg-white rounded-lg p-3 mb-3 flex items-center gap-2">
            <img src={"https://img10.360buyimg.com/img/jfs/t1/346074/6/4118/8195/68c92b91F1dc4cd05/32f8deaab0e08085.png.avif"} alt="avatar" className="w-6 h-6 rounded-full" />
            <div>
              <div className="text-xs text-gray-900">暂无订单信息</div>
              <div className="text-xs text-gray-500">下单后查看更多订单信息</div>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="flex flex-col items-center cursor-pointer">
              <FiClock className="text-xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">浏览记录</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <FiStar className="text-xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">商品收藏</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <LiaStoreSolid className="text-xl text-gray-600 mb-1" />
              <span className="text-xs text-gray-700">店铺关注</span>
            </div>
          </div>

          {/* Service grid with images */}
          <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280707/314563/6/15331/5518/686d06e8Ff1f6536a/0f615146c09b3f5b.png" alt="护士上门" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">护士上门</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280630/318752/39/12617/3183/68635156F940430d8/c2c506471b0c308e.png" alt="企业计划购" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">企业计划购</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280622/306853/15/11818/10773/6858fa4fF21d6b9d9/ef257d4775808b7c.png" alt="天天领好礼" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">天天领好礼</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280623/319397/28/11290/14419/685a0a07F8e0e8868/166bc0591f18780c.png" alt="云建" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">云建</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280626/318565/18/12242/6839/685e38acF7a5f395f/98bca322581d0798.png" alt="京东快递" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">京东快递</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280623/304326/34/12989/27999/685a4d11F412da1e1/2d66d240702c5d30.png" alt="京东联名卡" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">京东联名卡</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280623/309812/17/12177/10541/685a05d3F8f751f61/74fcb66e5f7314a9.png" alt="游戏" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">游戏</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src="https://m.360buyimg.com/babel/jfs/t20280623/315746/28/11941/25614/685a6eddF5e1bcee4/1a93321a6c245165.png" alt="礼品" className="w-8 h-8 mb-1" />
              <span className="text-xs text-gray-700">礼品</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
