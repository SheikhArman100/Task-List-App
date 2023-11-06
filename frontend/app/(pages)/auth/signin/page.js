import signInImage from "@/public/assets/signin.png";
import Image from "next/image";
import FormSignin from "./FormSignin";

const SignIn = () => {
  return (
    <article className="w-full h-full   md:h-screen md:grid md:grid-cols-2 py-10 px-8 lg:px-[2rem] xl:px-[4rem] gap-x-5">
      <section className="h-full flex flex-col items-center justify-center gap-y-10 ">
        <div className="flex flex-col items-center gap-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="hsl(5,77%,55%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-check"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line stroke="white" x1="16" x2="16" y1="2" y2="6" />
            <line stroke="white" x1="8" x2="8" y1="2" y2="6" />
            <path stroke="white" d="m9 14 2 2 4-4" />
          </svg>
          <h4 className="text-2xl font-bold text-center">Welcome to TaskList</h4>
        </div>
        <div className="relative w-full aspect-square sm:aspect-[1/0.6] md:hidden">
          <Image
            src={signInImage}
            priority
            fill
            sizes="calc(100vw - 64px)"
            className="w- full h-full object-cover"
            alt="sign in"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="text-xl font-semibold text-center uppercase ">
            Sign In
          </h5>
          <FormSignin />
        </div>
      </section>
      <section className="hidden md:block">
        <div className="relative w-full h-full">
          <Image
            src={signInImage}
            priority
            fill
            className="w- full h-full object-cover"
            alt="sign in"
          />
        </div>
      </section>
    </article>
  );
};

export default SignIn;
