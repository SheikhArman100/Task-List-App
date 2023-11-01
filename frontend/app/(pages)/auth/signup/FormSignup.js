"use client";
import { signupSchema } from "@/libs/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const FormSignup = () => {
  //react-hook-form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  //sign up form control
  const handleSignup = (data) => {
    console.log(data);
  };
  return (
    <section className="flex flex-col items-center gap-y-8">
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit(handleSignup)}
      >
        <section className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="form-control w-full max-w-[20rem]">
            <label className="label">
              <span className="label-text text-xs">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("username")}
              className="input w-full bg-transparent border border-white input-md"
            />
            {errors.username?.message &&(
              <p className="text-xs font-semibold text-red-700 mt-1">
                *{errors.username?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-[20rem]">
            <label className="label">
              <span className="label-text text-xs">Email</span>
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
            <label className="label">
              <span className="label-text text-xs">Password</span>
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
            <label className="label">
              <span className="label-text text-xs">Confirm Password</span>
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
        <button className="w-full max-w-[20rem] sm:col-span-2 bg-customOrange py-3 rounded-lg text-base font-semibold mt-4  ">
          Sign up
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
          <Link href="/signin" className="underline font-medium">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FormSignup;
