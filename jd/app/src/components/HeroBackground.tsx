import bgTop from "../assets/background.png";

// Absolutely-positioned background so it doesn't push layout.
export default function HeroBackground() {
  return (
      <div className="absolute top-0 left-0 w-full h-183" style={{ background: "linear-gradient(rgb(255, 15, 35) 0%, rgb(255, 15, 35) 50%, transparent 100%)" }}>
        <div
          className="w-full h-61"
          style={{
            backgroundImage: `url(${bgTop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "83.3% 100%",
            backgroundPosition: "center",
          }}
        />
      </div>
  );
}


