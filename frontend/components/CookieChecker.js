"use client";
import { axiosPublic } from "@/libs/axios/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const CookieChecker = ({ children }) => {
  const router = useRouter();

  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await axiosPublic.get("/auth/updateAT", {
        withCredentials: true,
      });

      return response.data;
    },
    refetchOnMount: false,
    retry:false,
    staleTime: 10 * 60 * 100,
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-customBlack flex items-center justify-center">
        <span className="loading loading-spinner text-error" />
      </div>
    );
  }
  if (isError) {
    router.push("/auth/signin");
  }

  return <>{data && children}</>;
};

export default CookieChecker;
