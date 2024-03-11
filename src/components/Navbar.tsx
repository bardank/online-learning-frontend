"use client";
import useAuthStore from "@/customHooks/auth";
import Link from "next/link";
import React, { FC } from "react";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="flex justify-between  items-center px-4 py-4 drop-shadow">
      <a href="/" className="font-semibold">
        <span className="text-yellow-500">Campus</span>
        <span className="text-darkBlue">CoLearn</span>
      </a>
      <div className="flex justify-between items-center">
        <ul className="flex gap-4 justify-center items-center">
          <NavItem title="Home" href="/" />
          <NavItem title="Courses" href="/courses" />
          {!isAuthenticated ? (
            <>
              <NavItem title="Login" href="/login" />
              <NavItem title="Register" href="/register" />
            </>
          ) : (
            <div className="avatar">
              <Link href="/profile">
                <div className="w-10 !rounded-full">
                  <img
                    className="w-10 !rounded-full"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </Link>
              {/* <a href="/dashbaord/teacher"></a> */}
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
