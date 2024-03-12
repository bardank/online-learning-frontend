import React, { FC } from "react";

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className="sidebar bg-secondary w-56 h-screen px-4">
      <div className="sidebar-header flex flex-col justify-center items-center ">
        <div className="avatar">
          <div className="rounded-full w-20 h-20 m-2">
            <img
              className="w-10 !rounded-full"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="user-info">
          <p>Teacher</p>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <SidebarItem
            icon="fas fa-home"
            title="Home"
            href="/dashboard/teacher"
          />
          <SidebarItem
            icon="fas fa-home"
            title="Courses"
            href="/dashboard/teacher/courses"
          />
          <SidebarItem
            icon="fas fa-home"
            title="Students"
            href="/dashboard/teacher/students"
          />
          <SidebarItem
            icon="fas fa-home"
            title="Profile"
            href="/dashboard/teacher/profile"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

interface SidebarItemProps {
  icon: string;
  title: string;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, title, href }) => {
  return (
    <li className="text-center">
      <a href={href}>
        <span className="icon">
          <i className={icon}></i>
        </span>
        <span className="text">{title}</span>
      </a>
    </li>
  );
};
