import React from "react";
import { NavLink } from "./NavLink";
export function Nav() {
  return (
    <nav className=" p-2 m-10 bg-black rounded-full flex justify-evenly">
      <NavLink text="Home" active={true} />
      <NavLink text="About" active={false}></NavLink>
      <NavLink text="Services" active={false}></NavLink>
      <NavLink text="Projects" active={false}></NavLink>
      <NavLink text="Contact" active={false}></NavLink>
    </nav>
  );
}
