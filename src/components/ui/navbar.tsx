"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { HandShakeIcon } from "@/src/components/icons";
import { useState } from "react";
import MenuTab from "./MenuTab";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      maxWidth="xl"
      isBlurred
      classNames={{
        base: ` !backdrop-blur-none !backdrop-saturate-100 !bg-transparent data-[menu-open=true]:!backdrop-blur-none`,
        wrapper: ` bg-background rounded-md shadow-small dark:border border-slate-700 `,
        menu: "!backdrop-blur-none !backdrop-saturate-100 !bg-transparent data-[menu-open=true]:!backdrop-blur-none px-3",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full  " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center  gap-1" href="/">
            <img src="/SP-logo.png" alt="logo" width={200} height={70} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <MenuTab />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            href="/contact"
            as={Link}
            color="secondary"
            endContent={<HandShakeIcon />}
            variant="flat"
            className="font-semibold"
          >
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="bg-background shadow-small dark:border border-slate-700 h-screen p-3 rounded-md">
          <MenuTab
            tabsProps={{
              isVertical: true,
              classNames: { base: "flex-1 flex-col", tab: "justify-start" },
            }}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Button
            href="/contact"
            as={Link}
            color="secondary"
            startContent={<HandShakeIcon />}
            variant="flat"
            className="w-full font-semibold mt-3"
          >
            Let's Talk
          </Button>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
