import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Other Navbar</div>
      {children}
    </div>
  );
};

export default Layout;
