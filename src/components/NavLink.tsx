import React from "react";
import Link from "next/link";
export function NavLink({
  link,
  active,
  text,
}: {
  link?: string;
  active: boolean;
  text: string;
}) {
  return <Link href={link ? link : `#${text}`} className={"p-5 rounded-full " + (active ? "bg-orange text-white" : "text-white")}>{text}</Link>;
}
