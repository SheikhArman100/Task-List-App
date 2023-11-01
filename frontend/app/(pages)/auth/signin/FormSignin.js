import Link from "next/link";

const FormSignin = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <form className="flex flex-col items-center gap-y-1">
        <div className="form-control w-full max-w-[20rem]">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-transparent border border-white"
          />
          <p className="text-red-500 text-sm mt-1">*show error here</p>
        </div>
        <div className="form-control w-full max-w-[20rem]">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter you password"
            className="input input-bordered w-full bg-transparent border border-white"
          />
          <p className="text-red-500 text-sm mt-1">*show error here</p>
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
          <Link href="/signup" className="underline font-medium">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FormSignin;
