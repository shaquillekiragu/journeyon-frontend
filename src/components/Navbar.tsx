import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoggedInUser, isLoggedIn, setIsLoggedIn } =
    useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = () => {
    setLoggedInUser({});
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <nav className="w-full shadow-md border-b border-gray-200 bg-theme-blue">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-evenly w-full">
            {/* JourneyON */}
            <div className="flex-1 text-center">
              <Link
                to="/home"
                className={`text-lg ${
                  isActive("/home") ? "font-extrabold" : "font-light"
                } hover:opacity-80 transition-all duration-200`}
                style={{ color: "#fdfbf1" }}
              >
                Home
              </Link>
            </div>

            {/* Diary */}
            <div className="flex-1 text-center">
              <Link
                to="/diary"
                className={`text-lg ${
                  isActive("/diary") ? "font-extrabold" : "font-light"
                } hover:opacity-80 transition-all duration-200`}
                style={{ color: "#fdfbf1" }}
              >
                Diary
              </Link>
            </div>

            {/* Progress */}
            <div className="flex-1 text-center">
              <Link
                to="/progress"
                className={`text-lg ${
                  isActive("/progress") ? "font-extrabold" : "font-light"
                } hover:opacity-80 transition-all duration-200`}
                style={{ color: "#fdfbf1" }}
              >
                Progress
              </Link>
            </div>

            {/* Sign Out */}
            <div className="flex-1 text-center">
              <button
                onClick={handleSignOut}
                className={`text-lg font-light hover:opacity-80 transition-all duration-200 ${
                  isLoggedIn ? "!visible" : "!hidden"
                }`}
                style={{ color: "#fdfbf1" }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
