import CompletedTaskList from "@/components/CompletedTaskList";
import { MoreVertical } from "lucide-react";

const Completed = () => {
  return (
    <article className="flex-[1_1_0%] py-6 px-8 lg:px-[2rem] xl:px-[4rem] overflow-y-auto ">
      <section className=" flex items-center justify-between">
        <h3 className="text-2xl font-semibold capitalize">Completed Tasks</h3>
        <div className="flex items-center gap-x-4">
          <MoreVertical size={24} className="stroke-gray-400" />
        </div>
      </section>
      <CompletedTaskList />
    </article>
  );
};

export default Completed;
