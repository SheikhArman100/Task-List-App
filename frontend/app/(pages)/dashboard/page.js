"use client";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import useDebounce from "@/hooks/useDebounce";
import { MoreVertical, Search } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  return (
    <article className="flex-[1_1_100%] py-6 px-8 lg:px-[2rem] xl:px-[4rem] overflow-y-auto">
      <section className=" flex flex-col md:flex-row items-center justify-between gap-y-2">
        <h3 className="text-2xl font-semibold capitalize text-left">
          All Tasks
        </h3>
        <div className="flex items-center gap-x-4">
          <div className="flex glassEffect px-2 py-1.5 rounded-lg">
            <input
              type="text"
              className="bg-transparent text-sm w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <Search size={24} />
          </div>
          <AddTask />
          <MoreVertical size={24} className="stroke-gray-400" />
        </div>
      </section>
      <TaskList searchText={debouncedValue} />
    </article>
  );
};

export default Dashboard;
