import { create } from "zustand";

export const useTaskStore = create((set) => ({
  title:"",
  description:"",
  dueDate:"",
  status:"",
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description}),
  setDueDate: (dueDate) => set({ dueDate }),
  setStatus: (status) => set({ status }),
}));
