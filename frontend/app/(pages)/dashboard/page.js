import AddTask from "@/components/AddTask";
import Task from "@/components/Task";
import TaskList from "@/components/TaskList";
import { MessageSquarePlus, MoreVertical, Plus, UserPlus } from "lucide-react";

const Dashboard = () => {
  return (
    <article className="flex-[1_1_0%] py-6 px-8 lg:px-[2rem] xl:px-[4rem] l">
      <section className=" flex items-center justify-between">
        <h3 className="text-2xl font-semibold capitalize">All Tasks</h3>
        <div className="flex items-center gap-x-4">
          {/* <button className="hidden md:flex items-center py-2 px-4 gap-x-2 bg-customOrange rounded-lg text-sm">
            Add a Task
            <Plus size={28} />
          </button> */}
          <AddTask />
          <UserPlus size={24} className="stroke-gray-400" />
          <MessageSquarePlus size={24} className="stroke-gray-400" />
          <MoreVertical size={24} className="stroke-gray-400" />
        </div>
      </section>
      <TaskList/>
    </article>
  );
};

export default Dashboard;
