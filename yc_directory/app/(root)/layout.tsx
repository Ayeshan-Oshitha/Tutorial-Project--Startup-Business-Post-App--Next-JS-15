import React from "react";
import Navbar from "../components/Navbar";

interface Props {
  children: Readonly<React.ReactNode>;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
