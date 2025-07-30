interface HeaderProps {
  size?: "normal" | "large";
}

const Header: React.FC<HeaderProps> = ({ size = "normal" }) => {
  const isLarge = size === "large";

  return (
    <header
      className="w-full shadow-lg border-b border-gray-300"
      style={{ backgroundColor: "#fdfbf1" }}
    >
      <div className={`w-full ${isLarge ? "px-12 py-8" : "px-9 py-6"}`}>
        <div className="flex items-center w-full">
          <div className="text-left">
            <h1
              className={`${
                isLarge ? "text-5xl" : "text-3xl"
              } font-bold underline`}
              style={{ color: "#b9d0fd" }}
            >
              JourneyOn
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
