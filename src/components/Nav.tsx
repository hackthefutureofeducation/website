"use client";
import React, { useState, useEffect } from "react";
import { NavLink, ResponsiveNavLink } from "./NavLink";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // IDs of your sections in the same order as your NavLink components
  const sectionIds = ["Home", "About", "Services", "Projects", "Contact", "Blog"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(false);
    };

    const handleScroll = () => {
      // Setup IntersectionObserver to detect sections in view
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold based on when you'd like the link to update
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    };

    handleScroll();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sectionIds]);

  return (
    <nav className={"pt-2 lg:p-2 lg:m-10 bg-black lg:rounded-full lg:flex justify-evenly h-[700px] max-h-[70px] sticky top-0 " + (isMobileMenuOpen ? "fixed top-0 w-screen" : "")}>
      <NavLink text="Home" active={activeSection === "Home"} responsive={true} />
      <NavLink text="About" active={activeSection === "About"} responsive={true} />
      <NavLink text="Services" active={activeSection === "Services"} responsive={true} />
      <div className="lg:p-2 lg:bg-white w-full lg:w-1/5 rounded-full mb-[-20px] lg:h-[100px] flex flex-col justify-center items-center text-black">
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
      <NavLink text="Projects" active={activeSection === "Projects"} responsive={true} />
      <NavLink text="Contact" active={activeSection === "Contact"} responsive={true} />
      <NavLink
        text="Blog"
        active={activeSection === "Blog"}
        link="https://adambashaahmednaji.com/articles/"
        responsive={true}
      />
      <div className={"bg-black w-full text-white grid mt-2 z-50 fixed h-[100vh] " + (isMobileMenuOpen ? " block" : " hidden")}>
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
