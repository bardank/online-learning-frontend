import Sidebar from "@/components/Dashboard/Sidebar";
import AuthOutlet from "@/outlet/AuthOutlet";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const DashboardLayout: FC<Props> = ({children}) => {
  return (
    <AuthOutlet requiredAuthentication={true}>
      <main className=" ">
        <Sidebar />
        <div className="">{children}</div>
      </main>
    </AuthOutlet>
  );
};

export default DashboardLayout;
