import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardLayout from "@/layouts/DashboardLayout";
import AuthOutlet from "@/outlet/AuthOutlet";
import React from "react";

interface Props {
}

const TeacherDashboard: React.FC<Props> = ({  }) => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Welcome,</h1>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
