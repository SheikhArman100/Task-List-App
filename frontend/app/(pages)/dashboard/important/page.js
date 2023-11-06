import ImportantTaskList from '@/components/ImportantTaskList';
import TaskList from '@/components/TaskList';
import { MessageSquarePlus, MoreVertical, UserPlus } from 'lucide-react';
import React from 'react'

const Important = () => {
  return (
    <article className="flex-[1_1_0%] py-6 px-8 lg:px-[2rem] xl:px-[4rem] overflow-y-auto ">
      <section className=" flex items-center justify-between">
        <h3 className="text-2xl font-semibold capitalize">Important Tasks</h3>
        <div className="flex items-center gap-x-4">
          <MoreVertical size={24} className="stroke-gray-400" />
        </div>
      </section>
      <ImportantTaskList />
    </article>
  );
}

export default Important