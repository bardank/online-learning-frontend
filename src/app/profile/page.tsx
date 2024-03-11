"use client";
import useAuthStore from "@/customHooks/auth";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

const Profile: React.FC = () => {
  const { user } = useAuthStore();
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center   py-4 px-4">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center my-4">{user?.name}</h2>
          <h3 className="text-xl font-semibold text-center my-4">
            User Details
          </h3>
          <div className="flex flex-col justify-center items-center">
            <p>{user?.email}</p>
            <p> {console.log(user)}</p>
          </div>

          {/* {
            user?.role.label === ""
          } */}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
