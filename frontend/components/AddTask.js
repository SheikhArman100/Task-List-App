"use client";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { taskSchema } from "@/libs/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker from "./DatePicker";
import StatusCheck from "./StatusCheck";

const AddTask = () => {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const methods = useForm({
    resolver: zodResolver(taskSchema),
  });

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = methods;

  //?create task mutation
  const createTaskMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post("/task", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: async () => {
      reset();
      return queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleCreateTask = (data) => {
    createTaskMutation.mutate(
      {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        status: data.status,
      },
      {
        onError: (data) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          toast.success(data.message);
          document.getElementById("addTaskModal").close();
          setIsModalOpen(false);
        },
      }
    );
  };

  return (
    <>
      <button
        className="bg-customOrange rounded-full flex items-center justify-center fixed right-4 bottom-5 py-4 px-4 md:relative md:py-2 md:bottom-0 md:right-0 md:gap-x-2"
        onClick={() => {
          document.getElementById("addTaskModal").showModal();
          setIsModalOpen(true);
        }}
      >
        <p className="hidden md:block text-sm">Add a task</p>
        <Plus size={32} />
      </button>
      <dialog id="addTaskModal" className="modal opacity-0">
        <div className="modal-box bg-customBlack h-[18rem] border border-gray-600">
          <FormProvider {...methods}>
            <form
              className="w-full h-full flex flex-col"
              onSubmit={handleSubmit(handleCreateTask)}
            >
              <section className="flex-[1_1_100%] flex flex-col ">
                <div className="flex-[1_1_100%]">
                  <input
                    placeholder="Title name..."
                    {...register("title")}
                    className="w-full bg-transparent overflow-hidden text-base font-semibold"
                  />
                  <textarea
                    rows="4"
                    placeholder="Description..."
                    {...register("description")}
                    className="w-full bg-transparent focus:border-none focus:outline-0 overflow-hidden text-sm "
                  ></textarea>
                </div>
                <div className="flex gap-x-2 p-2 items-center">
                  <DatePicker isModalOpen={isModalOpen} />
                  <StatusCheck isModalOpen={isModalOpen} />
                </div>
              </section>
              <section className="w-full  flex item-center justify-end gap-x-2 pt-2 border-t border-gray-600">
                <button
                  type="button"
                  className="text-sm py-2 px-6 bg-customGray rounded-lg"
                  onClick={() => {
                    document.getElementById("addTaskModal").close();
                    setIsModalOpen(false);
                    reset();
                  }}
                >
                  Close
                </button>
                <button
                  className="py-3 px-6 rounded-lg bg-customOrange text-sm mr-2 disabled:opacity-50"
                  disabled={!isValid}
                >
                  {createTaskMutation.isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <p>AddTask</p>
                  )}
                </button>
              </section>
            </form>
          </FormProvider>
        </div>
      </dialog>
    </>
  );
};

export default AddTask;
