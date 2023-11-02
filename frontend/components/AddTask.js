"use client";
import { Plus } from "lucide-react";
import DatePicker from "./DatePicker";
import StatusCheck from "./StatusCheck";

const AddTask = () => {
  return (
    <>
      <button
        className="bg-customOrange rounded-full flex items-center justify-center fixed right-4 bottom-5 py-4 px-4 md:relative md:py-2 md:bottom-0 md:right-0 md:gap-x-2"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <p className="hidden md:block text-sm">Add a task</p>
        <Plus size={32} />
      </button>
      <dialog id="my_modal_1" className="modal">
        {/* change here for width */}
        <div className="modal-box bg-customBlack border border-gray-600 p-0 h-[18rem]  overflow-hidden flex flex-col justify-between">
          <section className="h-full flex flex-col justify-between gap-y-2 px-4 pt-6 pb-2 ">
            <form className="w-full h-full flex flex-col gap-y-2">
              <input
                placeholder="Title name..."
                className="w-full bg-transparent overflow-hidden text-base font-semibold"
              />
              <textarea
                rows="4"
                placeholder="Description..."
                className="w-full bg-transparent focus:border-none focus:outline-0 overflow-hidden text-sm "
              ></textarea>
            </form>
            <section className="w-fit flex items-center gap-x-2">
              <DatePicker />
              <StatusCheck />
            </section>
          </section>
          <section className="w-full flex items-center justify-end gap-x-4 border-t border-gray-700 py-3">
            <div className="modal-action  m-0 py-2 px-4 rounded-lg bg-customGray">
              <form method="dialog ">
                {/* if there is a button in form, it will close the modal */}
                <button className="text-sm ">Close</button>
              </form>
            </div>
            <button className="py-3 px-6 rounded-lg bg-customOrange text-sm mr-2">
              Add task
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default AddTask;
