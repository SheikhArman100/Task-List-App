import { CalendarCheck2, ListStart, ListTodo, Star } from "lucide-react";
import Link from "next/link";

//sidebar items
export const sidebarItems = [
  {
    icon: <ListTodo size={20} className="stroke-purple-500"/>,
    label: "All Tasks",
    href: "/all",
  },
  {
    icon: <CalendarCheck2 size={20} className="stroke-green-500"/>,
    label: "Completed Tasks",
    href: "/completed",
  },
  {
    icon: <ListStart size={20} className="stroke-blue-500"/>,
    label: "In Progress Tasks",
    href: "/in_progress",
  },
  {
    icon: <Star size={20} className="stroke-yellow-500"/>,
    label: "Important Tasks",
    href: "/important",
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-60  bg-customGray px-4 py-16">
      <ul className="w-full flex flex-col gap-y-3">
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
  );
};

export default Sidebar;
