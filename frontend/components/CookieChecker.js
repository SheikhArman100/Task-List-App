"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CookieChecker = ({ children }) => {
  const router = useRouter();
  const [cookies] = useCookies(["TaskListJwt"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (!cookies.TaskListJwt) {
      router.push("auth/signin");
    } else {
      setHasCookie(true);
    }
  }, [cookies]);

  return <>{hasCookie ? children : null}</>;
};

export default CookieChecker;
