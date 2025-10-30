import { useAppState } from "../state/appState";
import type { Product } from "../state/appState";

const sampleProducts: Product[] = [
  {
    id: "p1",
    title: "Apple iPhone 15 Pro",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1696446707358-9f97a78e3e01?q=80&w=600&auto=format&fit=crop",
    category: "手机",
  },
  {
    id: "p2",
    title: "美的电饭煲",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1586201375774-061a3be1b87f?q=80&w=600&auto=format&fit=crop",
    category: "家居",
  },
  {
    id: "p3",
    title: "小米扫地机器人",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593011955256-4b9e01d1bb7a?q=80&w=600&auto=format&fit=crop",
    category: "家电",
  },
  {
    id: "p4",
    title: "保温杯",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1561715276-a2d087060f1e?q=80&w=600&auto=format&fit=crop",
    category: "日用",
  },
];

export default function MainGrid() {
  const [state, setState] = useAppState();
  const products = sampleProducts;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-2 relative z-10">
      <div className="grid grid-cols-[220px_minmax(0,1fr)_260px] gap-4">
        {/* Left category list */}
        <div className="bg-white rounded p-3 text-sm text-gray-700 shadow">
          {[
            "家用电器",
            "手机 / 运营商 / 数码",
            "电脑 / 办公 / 文具",
            "家居 / 家具 / 家装 / 厨具",
            "男装 / 女装 / 鞋靴 / 内衣",
            "美妆 / 个护清洁 / 宠物",
            "女婴 / 童装 / 玩具 / 乐器",
            "男鞋 / 运动 / 户外",
            "房产 / 汽车 / 汽车用品",
            "母婴 / 玩具乐器",
            "食品 / 酒类 / 生鲜 / 特产",
          ].map((t) => (
            <div key={t} className="py-1.5 px-2 hover:bg-gray-50 rounded cursor-pointer">
              {t}
            </div>
          ))}
        </div>

        {/* Center white box with grey sub-sections */}
        <div className="bg-white rounded shadow p-3 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-100 rounded h-28" />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {products.map((p) => (
              <button
                key={p.id}
                className="bg-white rounded border border-gray-100 hover:shadow-md transition text-left cursor-pointer"
                onClick={() =>
                  setState((prev) => ({ ...prev, page: "product", selectedProductId: p.id }))
                }
              >
                <img src={p.image} alt={p.title} className="w-full h-36 object-cover rounded-t" />
                <div className="p-3">
                  <div className="text-xs text-gray-500">{p.category}</div>
                  <div className="text-sm font-medium line-clamp-2 h-10">{p.title}</div>
                  <div className="text-[#e1251b] font-bold mt-1">¥{p.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right login/entry panel */}
        <div className="bg-white rounded shadow p-3">
          <div className="text-sm">Hi～欢迎来到京东！</div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 bg-[#e1251b] text-white rounded py-1.5 text-sm cursor-pointer">登录</button>
            <button className="flex-1 bg-[#ffd84d] text-black rounded py-1.5 text-sm cursor-pointer">注册</button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-center">
            {["优惠券", "秒杀", "PLUS", "京东国际", "京东云", "充值缴费"].map((t) => (
              <div key={t} className="bg-gray-50 rounded py-2 cursor-pointer">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


