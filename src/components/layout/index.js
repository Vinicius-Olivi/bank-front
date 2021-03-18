import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, name }) => {
  document.title = name;
  return (
    <div>
      <Header name={name} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
