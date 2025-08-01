import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { DataContext } from "../contexts/DataContextObject";
import { useContext } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const {setUser, user} = useContext(DataContext)

  const handleSignOut = (): void => {
    logoutUser();
    setUser( null );
    navigate("/");    
  };

  return (
    <nav className="w-full shadow-md border-b border-gray-200 bg-theme-blue">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-evenly w-full">
          {/* JourneyON */}
          <div className="flex-1 text-center">
            <Link
              to="/home"
              className={`text-lg ${
                isActive("/home") ? "font-extrabold" : "font-light"
              } text-white hover:scale-110 transition-all duration-200 inline-block`}
            >
              JourneyOn
            </Link>
          </div>

          {/* Diary */}
          <div className="flex-1 text-center">
            <Link
              to="/diary"
              className={`text-lg ${
                isActive("/diary") ? "font-extrabold" : "font-light"
              } text-white hover:scale-110 transition-all duration-200 inline-block`}
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
              } text-white hover:scale-110 transition-all duration-200 inline-block`}
            >
              Progress
            </Link>
          </div>

          {/* Sign Out */}
          <div className="flex-1 text-center">
            <button
              onClick={handleSignOut}
              className="text-lg font-light text-white hover:scale-110 transition-all duration-200 inline-block cursor-pointer"
            >
              {user ? "Sign Out" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

