import { axiosPublic } from "@/libs/axios/axiosConfig";

export const registerUser = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.post("/auth/register", data);

  return response.data;
};

export const signinUser = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.post("/auth/signin", data,{
    withCredentials:true
  });

  return response.data;
};

export const handleUpdateAT = async () => {
  const response = await axiosPublic.get("/auth/updateAT", {
    withCredentials: true,
  });
  return response.data;
};

export const signoutUser = async () => {
  const response = await axiosPublic.post("/auth/signout", {
    withCredentials: true,
  });

  return response.data;
};
