"use client"
import React, {useState} from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import data from '@/db/data.json'
interface Rev {
  author: string;
  review: string;
}
export function MainSection() {
  const [curentData, setcurrentdata] = useState<Rev>(data[0]);
  const generateRandomNumber = (): number => {
    let num = Math.floor(Math.random() * data.length);
    while (true) {
      if(data[num] != curentData){
        return num;
      }else{
        num = Math.floor(Math.random() * data.length);
      }
    }
  };
  const handleReview = ()=>{
    setcurrentdata(data[generateRandomNumber()]);
  }
  return (
    <section className="p-2 lg:flex justify-evenly mt-[150px] items-center">
      <div className="lg:w-1/4">
        <blockquote className="text-xl italic font-semibold text-black dark:text-white p-5 max-h-[500px] overflow-auto">
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
            "{curentData.review}"
          </p>
        </blockquote>
        <button onClick={handleReview} className="w-full text-center p-5 rounded bg-gradient-to-tr from-violet-300 to-orange-200 text-lg font-bold hover:from-orange-200 hover:to-violet-300 transition-colors duration-100">See Another Review</button>
      </div>
      <div className="lg:w-1/2 text-black text-center my-5 lg:my-0">
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
      <div className="lg:w-1/4 w-full text-center lg:text-left ">
        <div className="flex justify-evenly">
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
