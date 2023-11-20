"use client";
import useAxiosAuth from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Profile = () => {
  const axiosPrivate = useAxiosAuth();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/user", {
        withCredentials: true,
      });
      return response.data;
    },
  });

  return (
    <div className="relative w-10 h-10 rounded-full bg-gray-400">
      {data ? (
        <Image
          src={data.image}
          fill
          sizes="50px"
          alt="profile"
          className="w-full h-full rounded-full object-cover"
        />
      ) : null}
    </div>
  );
};

export default Profile;
