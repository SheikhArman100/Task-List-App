import { Bell, Search, Star } from "lucide-react";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <nav className="h-16 md:h-12 w-full bg-customOrange flex items-center justify-between px-8 lg:px-[2rem] xl:px-[4rem]">
      <div className="flex items-center gap-x-4">
        {/* navbar */}
        <Drawer />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="white"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-calendar-check hidden md:block"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line stroke="hsl(5,77%,55%)" x1="16" x2="16" y1="2" y2="6" />
          <line stroke="hsl(5,77%,55%)" x1="8" x2="8" y1="2" y2="6" />

          <path stroke="hsl(5,77%,55%)" d="m9 14 2 2 4-4" />
        </svg>
        <form className="hidden md:flex glassEffect px-2 py-1.5 rounded-lg">
          <input type="text" className="bg-transparent text-sm" />
          <button className="">
            <Search size={24} />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-x-4  md:gap-x- ">
        <div className="hidden md:flex items-center py-1.5 px-3 rounded-lg bg-gray-600">
          <Star size={20} className="stroke-none fill-yellow-400" />
          <p className="text-xs font-medium">Upgrade to Pro</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <Bell size={28} />
      </div>
    </nav>
  );
};

export default Navbar;
