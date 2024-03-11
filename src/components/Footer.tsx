import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center flex justify-center items-center bg-darkBlue py-4">
      <p className=" font-light text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CampusCoLearn. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
