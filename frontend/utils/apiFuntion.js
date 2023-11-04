import { axiosPrivate } from "@/libs/axios/axiosConfig";




export const registerUser = async (data) => {
  await new Promise((resolve)=>setTimeout(resolve,1000)) 
  const response = await axiosPrivate.post("/auth/register", data);

  return response.data
};

export const signinUser = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPrivate.post("/auth/signin", data);

  return response.data;
};
