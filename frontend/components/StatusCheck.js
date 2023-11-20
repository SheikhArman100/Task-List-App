"use client";
import { Flag } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const statusOptions = [
  { label: "Not started", value: "Not started" },
  { label: "In progress", value: "In progress" },
];

const StatusCheck = ({ isModalOpen }) => {
  const {register}=useFormContext()
  const [selectedStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    if (!isModalOpen) {
      setSelectedStatus("");
    }
  }, [isModalOpen]);

  return (
    <>
      <button
        type="button"
        className={`py-2 px-2 md:px-3 border  rounded-lg flex items-center gap-x-1 md:gap-x-1 text-xs md:text-sm text-gray-200 whitespace-nowrap ${
          selectedStatus == "In progress"
            ? "border-blue-500"
            : selectedStatus == "Not started"
            ? "border-yellow-500"
            : "border-gray-500"
        }`}
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {selectedStatus ? (
          <p
            className={`${
              selectedStatus == "In progress"
                ? "text-blue-500"
                : "text-yellow-500"
            }`}
          >
            {selectedStatus}
          </p>
        ) : (
          <p>Status</p>
        )}
        <Flag
          size={20}
          className={`${
            selectedStatus == "In progress"
              ? "stroke-blue-500"
              : selectedStatus == "Not started"
              ? "stroke-yellow-500"
              : "stroke-gray-200"
          }`}
        />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box overflow-hidden w-fit p-2 flex items-center justify-center bg-customBlack border border-gray-500 text-sm">
          <div className="flex flex-col gap-y-2">
            {statusOptions.map((status, index) => (
              <fieldset key={index} className="flex items-center gap-x-2 p-2">
                <input
                  type="radio"
                  name="status"
                  value={status.value}
                  {...register("status")}
                  checked={selectedStatus === status.value}
                  onChange={(e) => {
                    setSelectedStatus(e.target.value);
                    document.getElementById("my_modal_3").close();
                  }}
                  className={`radio ${
                    status.label == "In progress"
                      ? "checked:bg-blue-500 border border-blue-500"
                      : "checked:bg-yellow-500 border border-yellow-500"
                  }`}
                />
                <span className="label-text text-white">{status.label}</span>
                <Flag
                  size={20}
                  className={`${
                    status.label == "In progress"
                      ? "stroke-blue-500"
                      : "stroke-yellow-500"
                  }`}
                />
              </fieldset>
            ))}
          </div>
        </div>
        <div method="dialog" className="modal-backdrop">
          <button onClick={()=>document.getElementById("my_modal_3").close()}>close</button>
        </div>
      </dialog>
    </>
  );
};

export default StatusCheck;
