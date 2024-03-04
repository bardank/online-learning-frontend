"use client";
import useAuthStore from "@/customHooks/auth";
import React, { FC } from "react";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="flex justify-between  items-center px-4 py-4 drop-shadow">
      <a href="">E-Learning</a>
      <div className="flex justify-between items-center">
        <ul className="flex gap-4 justify-center items-center">
          <NavItem title="Home" href="/" />
          <NavItem title="Courses" href="/courses" />
          <NavItem title="About" href="/about" />
          <NavItem title="Contact" href="/contact" />
          {!isAuthenticated ? (
            <>
              <NavItem title="Login" href="/login" />
              <NavItem title="Register" href="/register" />
            </>
          ) : (
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavItemProps {
  title: string;
  href: string;
}
const NavItem: FC<NavItemProps> = ({ title, href }) => {
  return (
    <li className="hover:text-secondary text-gray-800 font-medium">
      <a href={href}>{title}</a>
    </li>
  );
};
