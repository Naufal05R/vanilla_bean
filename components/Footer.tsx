import { FOOTERS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-2 p-4 font-bold">
      {FOOTERS.map((footerItem, footerItemIndex) => (
        <Link
          href={footerItem.href}
          className={cn(
            "inline-flex rounded-xl font-display text-white",
            footerItem.icon ? "bg-stone-800 p-2.5" : "bg-amber-800 px-4 py-2",
          )}
          key={footerItemIndex}
        >
          {footerItem.icon ? footerItem.icon() : footerItem.name}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
