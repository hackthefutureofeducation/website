import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export function MainSection() {
  return (
    <section className=" flex justify-evenly mt-[150px] items-center">
      <div className="w-1/4">
        <blockquote className="text-xl italic font-semibold text-black dark:text-white p-5">
          <svg
            className="w-8 h-8 text-slate-500 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="text-black">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
      </div>
      <div className="w-1/2 text-black text-center">
        <h1 className="text-4xl">Hello!</h1>
        <h2 className=" text-3xl">
          I am the owner of{" "}
          <span className="bg-gradient-to-tl from-orange-500 to-purple-800 bg-clip-text text-transparent font-bold italic">
            Hack the Future of Education
          </span>
        </h2>
        <div className=" bg-green-500/50 rounded-t-full">
          <Image
            src={"/me.png"}
            width={500}
            height={0}
            alt="Me"
            className="w-full"
          ></Image>
        </div>
      </div>
      <div>
        <div className="flex">
          <FaStar size={50} className="text-yellow-500" />
          <FaStar size={50} className="text-yellow-500" />
          <FaStar size={50} className="text-yellow-500" />
          <FaStar size={50} className="text-yellow-500" />
          <FaStar size={50} className="text-yellow-500" />
        </div>
        <h3 className="text-2xl">2+ YEARS OF EXPERIENCE</h3>
      </div>
    </section>
  );
}
