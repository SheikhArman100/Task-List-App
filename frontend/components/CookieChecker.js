"use client";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const CookieChecker = ({ children }) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["TaskListJwt"]);

  if (!cookies.TaskListJwt) {
    router.push("auth/signin");
  }

  return <>{children}</>;
};

export default CookieChecker;
