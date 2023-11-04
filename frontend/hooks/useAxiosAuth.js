"use client";

import { useAuthStore } from "@/store/authStore";
import useUpdatedToken from "./useUpdatedToken";
import { axiosPrivate } from "@/libs/axios/axiosConfig";

const useAxiosAuth = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const updateToken=useUpdatedToken()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await updateToken();
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, updateToken]);

  return axiosPrivate;
};

export default useAxiosAuth;
