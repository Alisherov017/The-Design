import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  // console.log(location, "locaiton");
  const hideNavbarPaths = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

export default MainLayout;
