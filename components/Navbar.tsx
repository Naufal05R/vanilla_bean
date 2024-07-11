import React from "react";
import Link from "next/link";
import { cn, slugify } from "@/lib/utils";
import { ALL_CATEGORY, NAVIGATIONS } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu className="max-lg:hidden">
      <NavigationMenuList>
        {NAVIGATIONS.map((navItem, navItemIndex) => (
          <NavigationMenuItem key={navItemIndex}>
            {navItem.name === "Menu" ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full justify-start font-bold uppercase text-amber-900",
                  )}
                >
                  {navItem.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {ALL_CATEGORY.map((category, categoryIndex) => (
                    <Link
                      key={categoryIndex}
                      href={`/item/${slugify(category)}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "w-full justify-start font-bold uppercase text-amber-900",
                        )}
                      >
                        {category}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <Link href="/item/menu" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "w-full justify-start font-bold uppercase text-amber-900",
                      )}
                    >
                      Menu
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/item" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-bold uppercase text-amber-900",
                      )}
                    >
                      All Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={navItem.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-bold uppercase text-amber-900",
                  )}
                >
                  {navItem.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
