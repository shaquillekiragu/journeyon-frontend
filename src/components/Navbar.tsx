import { Link, useLocation, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useAuth } from "../contexts/UserContext";
=======
import { logoutUser } from "../services/authService";
import { DataContext } from "../contexts/DataContextObject";
import { useContext } from "react";
>>>>>>> 77051037a3a475bd7e0f932602dfc391f6c27f10

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn } =
    useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 77051037a3a475bd7e0f932602dfc391f6c27f10
          </div>
        </div>
      </nav>
      <p className="text-center font-semibold text-lg mt-3">
        (Temp feature - for tracking login/logout functionality)
      </p>
      <p className="text-center font-semibold text-2xl my-3">
        Logged in user: {loggedInUser?.user?.email}
      </p>
    </>
  );
};

export default Navbar;

