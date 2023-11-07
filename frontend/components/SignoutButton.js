"use client";
import { signoutUser } from "@/utils/apiFuntion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignoutButton = () => {
  const router=useRouter()
  const queryClient = useQueryClient();

  const signoutMutation = useMutation({
    mutationFn: signoutUser,
    onError: (data) => {
      toast.error(data.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      
      router.push("/auth/signin");
    },
  });

  const handleClick = () => {
    signoutMutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 flex items-center justify-center gap-x-2 bg-customOrange w-fit rounded-lg"
    >
      <p className="text-base font-semibold">Sign out</p>
      <LogOut size={24} />
    </button>
  );
};

export default SignoutButton;
