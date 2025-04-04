import Logo from "../../images/logos/Logo.svg";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const TopNavBar = () => {
  const { token } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-black text-white flex items-center px-6 py-4">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="logo" className="h-10 w-10" />
        <span className="text-xl font-semibold">
          DOT<span className="text-orange-500">-</span>Music
        </span>
      </div>

      <div className="flex-grow flex justify-center">
        <input
          type="search"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-3xl bg-black border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        {!token ? (
          <>
            <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700">
              <a href="/signup">Sign Up</a>
            </button>
            <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600">
            <a href="/signin">Log In</a>
            </button>
          </>
        ) : (
          <div className="relative">
            {/* User Image */}
            <img
              src="https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45"
              alt="profilepic"
              className="h-12 w-12 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <a
                  href="#settings"
                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-orange-500"
                >
                  Settings
                </a>
                <a
                  href="#logout"
                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-orange-500"
                >
                  Log Out
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
