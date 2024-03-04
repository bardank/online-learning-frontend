"use client";

import useAuthStore from "@/customHooks/auth";
import { getCookie } from "@/customHooks/cookies";
import axios from "@/utils/axios";
import React, { FC, useEffect } from "react";

interface Props {
  requiredAuthentication?: boolean;
  children: React.ReactNode;
}

const AuthOutlet: FC<Props> = ({ requiredAuthentication = true, ...props }) => {
  const { setUser, loading, isAuthenticated } = useAuthStore();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const user = await axios.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${getCookie("auth-token")}`,
        },
      });
      setUser(user.data?.user);
      console.log({ user });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading && requiredAuthentication ) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-secondary text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!loading && requiredAuthentication == false && !isAuthenticated) {
    return <div className="flex justify-center items-center">Please login</div>;
  }
  return <>{props.children}</>;
};

export default AuthOutlet;
