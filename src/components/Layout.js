import React from "react";
import { Navbar } from "./index";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex-1 overflow-auto focus:outline-none">
        <Navbar />
        <main className="flex-1 relative pt-4 pb-12 z-0 overflow-y-auto">
          <div className="space-y-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
