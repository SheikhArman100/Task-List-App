"use client"
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Task from './Task';

const ImportantTaskList = () => {
  const axiosPrivate = useAxiosPrivate();
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/task", {
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

  const importantTasks = data?.tasks?.filter((task) => task.isImportant);

  return (
    <section className="py-6 items-center justify-center justify-items-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-6   lg:px-[2rem] xl:px-[4rem]">
      {importantTasks?.map((task) => (
        <Task
          key={task._id}
          id={task._id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          status={task.status}
          isCompleted={task.isCompleted}
          isImportant={task.isImportant}
        />
      ))}
    </section>
  );
}

export default ImportantTaskList