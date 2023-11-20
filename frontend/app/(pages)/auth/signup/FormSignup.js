"use client";
import { signupSchema } from "@/libs/zodSchema";
import { registerUser } from "@/utils/apiFuntion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormSignup = () => {
  const router = useRouter();
  //react-hook-form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  //registration mutation
  const registerMutation = useMutation({
    mutationFn: registerUser,
  });

  //sign up button form control
  const handleSignup = (data) => {
    registerMutation.mutate(
      {
        username: data.username,
        email: data.email,
        password: data.password,
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      },
      {
        onError: (data) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          toast.success(data.message);
          router.push("/auth/signin");
        },
      }
    );
  };
  return (
    <section className="flex flex-col items-center gap-y-8">
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit(handleSignup)}
      >
        <section className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="form-control w-full max-w-[20rem]">
            <label className="label ">
              <span className="label-text text-xs text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("username")}
              className="input w-full bg-transparent border border-white input-md"
            />
            {errors.username?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.username?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-[20rem]">
            <label className="label text-white">
              <span className="label-text text-xs text-white">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="input w-full bg-transparent border border-white input-md"
            />
            {errors.email?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-[20rem]">
            <label className="label text-white">
              <span className="label-text text-xs text-white">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter you password"
              className="input input-bordered w-full bg-transparent border border-white input-md"
            />
            {errors.password?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-[20rem]">
            <label className="label text-white">
              <span className="label-text text-xs text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              {...register("passwordConfirmation")}
              placeholder="Enter you password again"
              className="input input-bordered w-full bg-transparent border border-white input-md"
            />
            {errors.passwordConfirmation?.message && (
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.passwordConfirmation?.message}
              </p>
            )}
          </div>
        </section>
        <button className="w-full max-w-[20rem] sm:col-span-2 bg-customOrange py-3 rounded-lg text-base font-semibold mt-4 fle items-center justify-center  ">
          {registerMutation.isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <p>Sign up</p>
          )}
        </button>
      </form>
      <div className="flex flex-col items-center gap-y-2 max-w-[20rem]">
        <p className="text-xs text-gray-300 text-center">
          By sign up,yoy agree to TaskList's{" "}
          <span className="underline">terms of service</span> and{" "}
          <span className="underline">privacy policy</span>
        </p>
        <p className="text-xs text-gray-300">
          Doesn't have an account ?{" "}
          <Link href="/auth/signin" className="underline font-medium">
            Signin
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FormSignup;
