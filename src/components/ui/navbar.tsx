"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  HomeIcon,
  AboutIcon,
  ServiceIcon,
  PortfolioIcon,
  BlogIcon,
  ContactIcon,
  HandShakeIcon,
} from "@/src/components/icons";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400  pointer-events-none flex-shrink-0 " />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: ` !backdrop-blur-none !backdrop-saturate-100 !bg-transparent data-[menu-open=true]:!backdrop-blur-none md:pt-3`,
        wrapper: ` bg-background rounded-md `,
        menu: "!backdrop-blur-none !backdrop-saturate-100 !bg-transparent data-[menu-open=true]:!backdrop-blur-none px-3",
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full  " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center  gap-1" href="/">
            <img src="/SP-logo.png" alt="logo" width={200} height={70} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Tabs
            selectedKey={pathname}
            onSelectionChange={(key) => key}
            aria-label="Options"
            variant="light"
          >
            <Tab
              key="/"
              href="/"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <HomeIcon />
                  <span>Home</span>
                </div>
              }
            />

            <Tab
              key="/services"
              href="/services"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <ServiceIcon />
                  <span>Services</span>
                </div>
              }
            />
            <Tab
              key="/portfolio"
              href="/portfolio"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <PortfolioIcon />
                  <span>Portfolio</span>
                </div>
              }
            />

            <Tab
              key="/contact"
              href="/contact"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <ContactIcon />
                  <span>Contact</span>
                </div>
              }
            />
            <Tab
              key="/blog"
              title={
                <div className="flex items-center space-x-2">
                  <BlogIcon />
                  <span>Blog</span>
                </div>
              }
            />
          </Tabs>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            href="/contact"
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            endContent={<HandShakeIcon />}
            variant="flat"
          >
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu >
        <div className="bg-background h-screen p-3 rounded-md"><Tabs
        isVertical
            selectedKey={pathname}
            onSelectionChange={(key) => key}
            aria-label="Options"
            variant="light"
            classNames={{base:"flex-1 flex-col",tab:"justify-start"}}
          >
            <Tab
              key="/"
              href="/"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <HomeIcon />
                  <span>Home</span>
                </div>
              }
            />

            <Tab
              key="/services"
              href="/services"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <ServiceIcon />
                  <span>Services</span>
                </div>
              }
            />
            <Tab
              key="/portfolio"
              href="/portfolio"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <PortfolioIcon />
                  <span>Portfolio</span>
                </div>
              }
            />

            <Tab
              key="/contact"
              href="/contact"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <ContactIcon />
                  <span>Contact</span>
                </div>
              }
            />
            <Tab
              key="/blog"
              title={
                <div className="flex items-center space-x-2">
                  <BlogIcon />
                  <span>Blog</span>
                </div>
              }
            />
          </Tabs></div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
