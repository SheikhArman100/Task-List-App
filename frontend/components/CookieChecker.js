"use client";
import { axiosPublic } from "@/libs/axios/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CookieChecker = ({ children }) => {
  const router = useRouter();

  const [hasCookie, setHasCookie] = useState(false);

  const cookieChecking = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await axiosPublic.get("/auth/updateAT", {
        withCredentials: true,
      });

      return response.data;
    },
  });

  useEffect(() => {
    if (!cookieChecking.isFetching) {
      if (cookieChecking.isSuccess) {
        setHasCookie(true);
      } else {
        router.push("/auth/signin");
      }
    }
  }, [cookieChecking]);

  return (
    <>
      {cookieChecking.isFetching ? (
        <div className="h-screen w-full bg-customBlack flex items-center justify-center">
          <span className="loading loading-spinner text-error" />
        </div>
      ) : (
        hasCookie && children
      )}
    </>
  );
};

export default CookieChecker;
