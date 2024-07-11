import { ALL_CATEGORY, FOOTERS, NAVIGATIONS } from "@/constants";
import { cn, slugify } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const MenuLink = ({ onClick }: { onClick: () => void }) => {
  "use client";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="peer inline-flex items-center px-3.5 py-2 hover:bg-stone-100"
      >
        Menu{" "}
        <ChevronDown
          size={16}
          className={cn(
            "ml-1.5 transition duration-300",
            isOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      <ul className={cn("flex-col p-1 transition", isOpen ? "flex" : "hidden")}>
        {ALL_CATEGORY.map((category, categoryIndex) => (
          <Link
            key={categoryIndex}
            href={`/item/${slugify(category)}`}
            className="px-3.5 py-2 hover:bg-stone-100"
            onClick={onClick}
          >
            {category}
          </Link>
        ))}
        <hr className="my-4" />
        <Link
          onClick={onClick}
          className="px-3.5 py-2 hover:bg-stone-100"
          href="/item/menu"
        >
          Menu
        </Link>
        <Link
          onClick={onClick}
          className="px-3.5 py-2 hover:bg-stone-100"
          href="/item"
        >
          Item
        </Link>
      </ul>
    </React.Fragment>
  );
};

const Sidebar = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <aside
      className={cn(
        "fixed top-0 z-50 h-screen w-60 bg-white transition-all duration-300",
        className,
      )}
    >
      <ul className="flex flex-col space-y-2 p-1">
        {FOOTERS.map((navItem, navItemIndex) => {
          return navItem.name === "Menu" ? (
            <MenuLink onClick={onClick} key={navItemIndex} />
          ) : (
            <Link
              className="px-3.5 py-2 hover:bg-stone-100"
              href={navItem.href}
              key={navItemIndex}
              target={navItem.icon && "_blank"}
              onClick={onClick}
            >
              <span className="inline-flex items-center gap-1">
                {navItem.name}{" "}
                {navItem.icon && <IconExternalLink size={16} strokeWidth={1} />}
              </span>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
