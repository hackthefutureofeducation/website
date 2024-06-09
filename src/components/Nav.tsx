"use client";
import React, { useState, useEffect } from "react";
import { NavLink, ResponsiveNavLink } from "./NavLink";
export function Nav() {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
        setIsMobileMenuOpen(false)
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <nav className={"pt-2 lg:p-2 lg:m-10 bg-black lg:rounded-full lg:flex justify-evenly h-[700px] max-h-[70px] " +( IsMobileMenuOpen? "fixed top-0 w-screen":"")}>
      <NavLink text="Home" active={true} responsive={true} />
      <NavLink text="About" active={false} responsive={true} />
      <NavLink text="Services" active={false} responsive={true} />
      <div className="lg:bg-white w-full lg:w-1/5 rounded-full  mb-[-20px] lg:h-[100px] flex flex-col justify-center items-center text-black">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-tl from-orange-500 to-purple-800 bg-clip-text text-transparent">
          Hack the Future of Education
        </h1>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3 cursor-pointer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <NavLink text="Projects" active={false} responsive={true} />
      <NavLink text="Contact" active={false} responsive={true} />
      <NavLink
        text="Blog"
        active={false}
        link="https://adambashaahmednaji.com/articles/"
        responsive={true}
      />
      <div className={"bg-black w-full text-white grid mt-2 z-50 fixed h-[100vh] " +(IsMobileMenuOpen?" block":" hidden")}>
        <ResponsiveNavLink text="Home" />
        <ResponsiveNavLink text="About" />
        <ResponsiveNavLink text="Services" />
        <ResponsiveNavLink text="Projects" />
        <ResponsiveNavLink text="Contact" />
        <ResponsiveNavLink
          text="Blog"
          link="https://adambashaahmednaji.com/articles/"
        />
      </div>
    </nav>
  );
}
