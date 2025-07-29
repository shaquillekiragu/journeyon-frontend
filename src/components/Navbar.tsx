import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = () => {
    // Add sign out logic here
    console.log("Signing out...");
  };

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-evenly w-full">
          {/* JourneyON */}
          <div className="flex-1 text-center">
            <Link
              to="/home"
              className={`text-lg ${
                isActive("/home") ? "font-bold text-blue-600" : "font-medium text-gray-600"
              } hover:text-blue-600 transition-colors duration-200`}
            >
              Home
            </Link>
          </div>

          {/* Diary */}
          <div className="flex-1 text-center">
            <Link
              to="/diary"
              className={`text-lg ${
                isActive("/diary") ? "font-bold text-blue-600" : "font-medium text-gray-600"
              } hover:text-blue-600 transition-colors duration-200`}
            >
              Diary
            </Link>
          </div>
          
          {/* Progress */}
          <div className="flex-1 text-center">
            <Link
              to="/progress"
              className={`text-lg ${
                isActive("/progress") ? "font-bold text-blue-600" : "font-medium text-gray-600"
              } hover:text-blue-600 transition-colors duration-200`}
            >
              Progress
            </Link>
          </div>

          {/* Sign Out */}
          <div className="flex-1 text-center">
            <button
              onClick={handleSignOut}
              className="text-lg font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;