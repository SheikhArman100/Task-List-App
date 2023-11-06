import { CalendarCheck2, ListTodo, Star } from "lucide-react";
import ActiveLink from "./ActiveLink";
import SignoutButton from "./SignoutButton";

//sidebar items
export const sidebarItems = [
  {
    icon: <ListTodo size={20} className="stroke-purple-500" />,
    label: "All Tasks",
    href: "/dashboard",
  },
  {
    icon: <CalendarCheck2 size={20} className="stroke-green-500" />,
    label: "Completed Tasks",
    href: "/dashboard/completed",
  },

  {
    icon: <Star size={20} className="stroke-yellow-500" />,
    label: "Important Tasks",
    href: "/dashboard/important",
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:flex-col  md:items-center md:justify-between  min-w-[15rem]  bg-customGray px-4 py-16">
      <ul className="w-full flex flex-col gap-y-3">
        {sidebarItems.map((item, index) => (
          <li key={index} className="">
            <ActiveLink href={item.href} label={item.label} icon={item.icon} />
          </li>
        ))}
      </ul>
      <SignoutButton/>
    </aside>
  );
};

export default Sidebar;
