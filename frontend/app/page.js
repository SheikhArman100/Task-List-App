"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      // Navigate to the other page
      router.push("auth/signin");
    }, 3000);
  }, []);
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col gap-y-10 items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="hsl(5,77%,55%)"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-check"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line stroke="white" x1="16" x2="16" y1="2" y2="6" />
            <line stroke="white" x1="8" x2="8" y1="2" y2="6" />

            <path stroke="white" d="m9 14 2 2 4-4" />
          </svg>
          <h4 className="text-white text-2xl font-semibold">
            Task List
          </h4>
        </div>
        <span className="loading loading-spinner text-customOrange  loading-md"></span>
      </section>
    </main>
  );
}
