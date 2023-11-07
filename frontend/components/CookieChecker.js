"use client";
import { axiosPublic } from "@/libs/axios/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CookieChecker = ({ children }) => {
  const router = useRouter();

  const [hasCookie, setHasCookie] = useState(false);

  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      const response = await axiosPublic.get("/auth/updateAT", {
        withCredentials: true,
      });

      return response.data;
    },
  });

  useEffect(() => {
    if (!isFetching) {
      if (isSuccess) {
        setHasCookie(true);
      } else {
        router.push("/auth/signin");
      }
    }
  }, [isFetching, isSuccess]);

  return (
    <>
      {isFetching ? (
        <div className="h-screen w-full bg-customBlack flex items-center justify-center">
          <span className="loading loading-spinner text-error" p />
        </div>
      ) : (
        hasCookie && children
      )}
    </>
  );
};

export default CookieChecker;
