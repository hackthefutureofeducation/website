import React from "react";
import Link from "next/link";
export function NavLink({
  link,
  active,
  text,
  responsive,
}: {
  link?: string;
  active: boolean;
  text: string;
  responsive: boolean;
}) {
  return (
    <Link
      href={link ? link : `#${text}`}
      className={`p-5 rounded-full ${
        active ? "bg-[#FD853A] text-white " : "text-white "
      } ${responsive ? "hidden lg:block" : ""}`}
    >
      {text}
    </Link>
  );
}
export function ResponsiveNavLink({
  link,
  text,
}: {
  link?: string;
  text: string;
}) {
  return (
    <Link
      href={link ? link : `#${text}`}
      className="p-5 hover:bg-[#FD853A] hover:text-black transition-colors duration-100"
    >
      {text}
    </Link>
  );
}
