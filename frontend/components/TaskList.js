"use client";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Task from "./Task";

const TaskList = () => {
  const AxiosPrivate = useAxiosPrivate();
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await AxiosPrivate.get("task", {
        withCredentials: true,
      });
      return response.data;
    },
  });
  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );

  return (
    <section className="py-6 items-center justify-center justify-items-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-6   lg:px-[2rem] xl:px-[4rem]">
      {data?.tasks.map((task, index) => (
        <Task
          key={index}
          id={task._id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          status={task.status}
        />
      ))}
    </section>
  );
};

export default TaskList;
