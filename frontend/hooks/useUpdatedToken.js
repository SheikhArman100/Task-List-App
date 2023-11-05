"use client";
import { axiosPublic } from "@/libs/axios/axiosConfig";
import { useAuthStore } from "@/store/authStore";

const useUpdatedToken = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const update = async () => {
    const response = await axiosPublic.get("/auth/updateAT", {
      withCredentials: true,
    });
    setAccessToken(response.data.accessToken);
    return response.data.accessToken;
  };
  return update;
};

export default useUpdatedToken;
