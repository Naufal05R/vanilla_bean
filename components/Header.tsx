"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { IconArrowRight, IconMenu } from "@tabler/icons-react";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import Layer from "./Layer";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between py-8 font-display">
      <Link href={"/"} className="inline-flex items-center">
        <figure className="aspect-square h-14 w-14 max-xs:h-9 max-xs:w-9">
          <Image
            src={"/icon.jpg"}
            width={927}
            height={927}
            alt="logo"
            className="h-full w-full"
          />
        </figure>
        <h1 className="text-nowrap text-4xl font-black uppercase text-amber-900 max-xs:text-2xl">
          Vanilla Bean
        </h1>
      </Link>
      <Button
        className="lg:hidden h-8 w-8 xs:w-12 xs:h-12"
        variant={"outline"}
        size={"icon"}
        onClick={() => setOpen(!open)}
      >
        <IconMenu className="h-4 w-4 xs:h-8 xs:w-8" />
      </Button>
      <Layer
        onClick={() => setOpen(false)}
        className={open ? "block" : "hidden"}
      />
      <Sidebar
        className={open ? "right-0" : "-right-60"}
        onClick={() => setOpen(!open)}
      />
      <Navbar />
      <Link
        href="/take-order"
        className="inline-flex items-center rounded-full bg-amber-900 px-4 py-2 font-bold uppercase text-white max-lg:hidden"
      >
        Order
        <IconArrowRight className="ml-4" size={20} strokeWidth={3} />
      </Link>
    </header>
  );
};

export default Header;
