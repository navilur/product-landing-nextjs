"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handelNavOpen = () => setShowNav(true);
  const handelNavClose = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={handelNavOpen} />
      <MobileNav showNav={showNav} closeNav={handelNavClose} />
    </div>
  );
};

export default ResponsiveNav;
