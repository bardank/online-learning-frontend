import React from "react";

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className="sidebar bg-base-100">
      <div className="sidebar-header">
        <div className="avatar">
          <div className="rounded-full w-20 h-20 m-2">
            <img src="./assets/images/avatar.jpg" alt="avatar" />
          </div>
          <div className="user-info">
            <p>Teacher</p>
          </div>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-book"></i>
              </span>
              <span className="text">Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="text">Students</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
