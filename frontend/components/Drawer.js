import { Menu } from "lucide-react";
import { sidebarItems } from "./Sidebar";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <Menu size={28} />
        </label>
      </div>
      <div className="drawer-side pt-16 md:pt-12">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="menu w-60 min-h-full bg-customGray px-4 py-16">
          <ul className="w-full flex flex-col gap-y-3">
            {/* Sidebar content here */}
            {sidebarItems.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.href}
                  className="flex items-center gap-x-2 p-2 w-full bg-[#393939] rounded-lg text-sm font-medium"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Drawer;
