"use client";
import { signinSchema } from "@/libs/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const FormSignin = () => {
  //react-hook-form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  //signin control
  const handleSignin = (data) => {
    console.log(data);
  };
  return (
    <section className="flex flex-col gap-y-8">
      <form
        className="flex flex-col items-center gap-y-1"
        onSubmit={handleSubmit(handleSignin)}
      >
        <div className="form-control w-full max-w-[20rem]">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="input input-bordered w-full bg-transparent border border-white"
          />
          {errors.email?.message && (
            <p className="text-xs font-semibold text-red-700 mt-1">
              *{errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-[20rem]">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter you password"
            className="input input-bordered w-full bg-transparent border border-white"
          />
          {errors.password?.message && (
            <p className="text-xs font-semibold text-red-700 mt-1">
              *{errors.password?.message}
            </p>
          )}
        </div>
        <button className="w-full max-w-[20rem] bg-customOrange py-3 rounded-lg text-base font-semibold mt-4">
          Sign in
        </button>
      </form>
      <div className="flex flex-col items-center gap-y-2 max-w-[20rem]">
        <p className="text-xs text-gray-300 text-center">
          By sign in,yoy agree to TaskList's{" "}
          <span className="underline">terms of service</span> and{" "}
          <span className="underline">privacy policy</span>
        </p>
        <p className="text-xs text-gray-300">
          Already have an account ?{" "}
          <Link href="signup" className="underline font-medium">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FormSignin;
