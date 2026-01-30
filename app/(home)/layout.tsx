import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Home Navbar</div>
      {children}
    </div>
  );
};

export default Layout;
