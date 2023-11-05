"use client";
import useAxiosAuth from "@/hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Profile = () => {
  const axiosPrivate = useAxiosAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/user", {
        withCredentials: true,
      });
      return response.data;
    },
  });

  return (
    <div className="relative w-8 h-8 rounded-full bg-gray-400">
      {isLoading ? null : (
        <Image
          src={data.image}
          fill
          alt="profile"
          className="w-full h-full rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default Profile;
