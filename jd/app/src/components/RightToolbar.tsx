import cart from "../icons/cart.png";
import mine from "../icons/mine.png";
import customer from "../icons/customer.png";
import feedback from "../icons/feedback.png";

export default function RightToolbar() {
  const info = [
    {
      name: "购物车",
      icon: cart,
    },
    {
      name: "我的",
      icon: mine,
    },
    {
      name: "客服",
      icon: customer,
    },
    {
      name: "反馈",
      icon: feedback,
    },
  ];

  // Use CSS filter to invert white image to black
  const invertToBlackStyle = {
    filter: "invert(1) brightness(0) saturate(100%)",
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
      <div className="bg-white rounded-l-lg shadow flex flex-col py-2 items-center space-y-4 px-1">
        {info.map((t) => (
          <div key={t.name} className="flex flex-col items-center cursor-pointer group">
            <img
              src={t.icon}
              alt={t.name}
              className="w-[18.1px] h-[18.1px] mb-1"
              style={invertToBlackStyle}
            />
            <span className="text-[11px] text-color-base ">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

