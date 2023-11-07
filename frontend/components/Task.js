"use client";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format, isAfter, isToday } from "date-fns";

import { Star, Trash2, X } from "lucide-react";
import { toast } from "react-toastify";

const Task = ({
  id,
  title,
  description,
  dueDate,
  status,
  isCompleted,
  isImportant,
}) => {
  const today = format(new Date(), "d MMMM, yyyy");
  const selectedDay = format(new Date(dueDate), "d MMMM, yyyy");
  const buttonColorClass =
    isAfter(new Date(selectedDay), new Date(today)) ||
    isToday(new Date(selectedDay))
      ? "border-green-500 text-green-500"
      : "border-red-500 text-red-500";

  return (
    <section className="flex flex-col max-w-xs sm:max-w-sm  w-full h-full bg-customGray border border-gray-600 p-2 px-4  aspect-[1/0.2] rounded-lg gap-y-2">
      <div className="flex-[1_1_100%] flex items-start ">
        <CompletedInput isCompleted={isCompleted} id={id} />
        <div className="flex-[1_1_0%] flex flex-col ml-2">
          <h4 className="text-sm font-semibold line-clamp-2">{title}</h4>
          <p className="text-xs text-gray-300 line line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-start gap-x-1">
          <ImportantButton isImportant={isImportant} id={id} />
          <DeleteButton id={id} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <span
          className={`text-xs  py-1 px-2 rounded-lg border ${buttonColorClass}`}
        >
          {selectedDay}
        </span>
        <span
          className={`text-xs py-1 px-2 rounded-lg border ${
            status == "In progress"
              ? "text-blue-500 border-blue-500"
              : "text-yellow-500 border-yellow-500"
          }`}
        >
          {status}
        </span>
      </div>
    </section>
  );
};

const CompletedInput = ({ isCompleted, id }) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const completedMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.put("/task/completed", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleChecked = () => {
    completedMutation.mutate({
      isCompleted:!isCompleted,
      id: id,
    });
  };
  return (
    <input
      type="checkbox"
      name="radio-1"
      className="checkbox checkbox-sm border-white"
      checked={isCompleted}
      onChange={handleChecked}
    />
  );
};

const ImportantButton = ({ isImportant, id }) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const importantMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.put("/task/important", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleClick = () => {
    importantMutation.mutate({
      isImportant: !isImportant,
      id: id,
    });
  };

  return (
    <button onClick={handleClick}>
      {isImportant ? (
        <Star size={20} className="stroke-none fill-yellow-600" />
      ) : (
        <Star size={20} />
      )}
    </button>
  );
};

const DeleteButton = ({ id }) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  const deleteMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.delete("/task", {
        withCredentials: true,
        data: {
          id: data,
        },
      });
      return response.data;
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  const handleClick = () => {
    deleteMutation.mutate({
      id: id,
    });
  };
  return (
    <>
      <button
        className=""
        onClick={() => document.getElementById("delete").showModal()}
      >
        <Trash2 size={20} />
      </button>
      <dialog id="delete" className="modal">
        <div className="modal-box bg-customGray border border-gray-600 w-[20rem] flex flex-col items-center gap-y-6">
          <section className="flex flex-col items-center">
            <div className="p-2 rounded-full border border-red-600">
              <X size={40} className="stroke-red-500" />
            </div>
            <h4 className="text-base font-semibold mt-2">Are you sure?</h4>
            <p className="text-sm text-gray-400">
              Do you really want to delete the task?
            </p>
          </section>
          <section className="flex gap-x-3">
            <button
              className="py-2 px-4 rounded-lg bg-customBlack"
              onClick={() => document.getElementById("delete").close()}
            >
              Close
            </button>
            <button
              onClick={handleClick}
              className="py-2 px-8 rounded-lg bg-customOrange font-semibold"
            >
              Yes
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default Task;
