"use client";
import { useAuthStore } from "@/store/authStore";
import { handleUpdateAT } from "@/utils/apiFuntion";
import { useQuery } from "@tanstack/react-query";

const useUpdatedToken = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const updateToken = async () => {
    const { data } = useQuery({
      queryKey: ["updateAT"],
      queryFn: () => handleUpdateAT(),
    });
    
    setAccessToken(data.accessToken);

    return data.accessToken;
  };
  return updateToken
};

export default useUpdatedToken;
