import { Menu } from "lucide-react";
import { sidebarItems } from "./Sidebar";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import SignoutButton from "./SignoutButton";

const Drawer = () => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <Menu size={28} />
        </label>
      </div>
      <div className="drawer-side pt-[4rem] md:pt-12 z-[2]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="menu w-60 min-h-full flex flex-col items-center justify-between bg-customGray px-4 py-16 ">
          <ul className="w-full flex flex-col gap-y-3">
            {/* Sidebar content here */}
            {sidebarItems.map((item, index) => (
              <li key={index} className="">
                <ActiveLink
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
          <SignoutButton/>
        </aside>
      </div>
    </div>
  );
};

export default Drawer;
