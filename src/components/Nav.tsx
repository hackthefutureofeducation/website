import React from "react";
import { NavLink } from "./NavLink";
export function Nav() {
  return (
    <nav className=" p-2 lg:m-10 bg-black lg:rounded-full flex justify-evenly max-h-[70px]">
      <NavLink text="Home" active={true} />
      <NavLink text="About" active={false}/>
      <NavLink text="Services" active={false}/>
      <div className="bg-white w-1/5 rounded-full  mb-[-20px] h-[100px] flex flex-col justify-center items-center text-black">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-tl from-orange-500 to-purple-800 bg-clip-text text-transparent">Hack the Future of Education</h1>
      </div>
      <NavLink text="Projects" active={false}/>
      <NavLink text="Contact" active={false}/>
      <NavLink text="Blog" active={false} link="https://adambashaahmednaji.com/articles/"/>

    </nav>
  );
}
