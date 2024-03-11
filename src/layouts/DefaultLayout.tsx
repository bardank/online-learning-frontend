import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthOutlet from "@/outlet/AuthOutlet";
import React, { FC } from "react";

interface Props {
  requiredAuthentication?: boolean;
  children: React.ReactNode;
}

const DefaultLayout: FC<Props> = ({
  requiredAuthentication = false,
  ...props
}) => {
  return (
    <AuthOutlet requiredAuthentication={true}>
      <main className=" ">
        <header className="">
          <Navbar />
        </header>
        {props.children}
        <Footer />
      </main>
    </AuthOutlet>
  );
};

export default DefaultLayout;
