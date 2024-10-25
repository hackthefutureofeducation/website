import React, { useState } from "react";

interface Props {
    title:string;
    content: string;
}

export function Card({ title, content }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="#" className="group relative block h-64 sm:h-80 lg:h-96" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className={`relative flex h-full transform items-end border-2 border-black bg-white transition-transform ${isHovered ? 'group-hover:-translate-x-2 group-hover:-translate-y-2' : ''}`}>

        <div className={`absolute p-4 transition-opacity ${isHovered ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

          <p className="mt-4 text-sm sm:text-base">
            {content}
          </p>
        </div>
      </div>
    </a>
  );
}