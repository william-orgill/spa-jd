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

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
      <div className="bg-white rounded-l-lg shadow flex flex-col items-center">
        {info.map((t, idx) => {
          // Determine conditional classes for special hover rounded corners
          const hoverRounded =
            idx === 0
              ? "hover:rounded-tl-lg"
              : idx === info.length - 1
              ? "hover:rounded-bl-lg"
              : "";

          return (
            <div
              key={t.name}
              className={
                `flex flex-col items-center cursor-pointer hover:bg-red-500 py-2 px-1 group w-full ${hoverRounded}`
              }
            >
              <img
                src={t.icon}
                alt={t.name}
                className="w-[20px] h-[20px] mb-1 filter invert group-hover:invert-0 transition-all"
              />
              <span className="text-[11px] text-gray-700 group-hover:text-white transition-colors">{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
