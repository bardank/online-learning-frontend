import Sidebar from "@/components/Dashboard/Sidebar";
import AuthOutlet from "@/outlet/AuthOutlet";
import React from "react";

interface Props {
  name: string;
}

const TeacherDashboard: React.FC<Props> = ({ name }) => {
  return (
    <AuthOutlet>
      <div className="">
        <Sidebar />
      </div>
    </AuthOutlet>
  );
};

export default TeacherDashboard;
