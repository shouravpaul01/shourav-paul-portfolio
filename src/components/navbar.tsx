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


export const Navbar = () => {

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
        <SearchIcon className="text-base text-default-400  pointer-events-none flex-shrink-0 "  />
      }
      type="search"
    />
  );
 
  return (

  <NextUINavbar maxWidth="xl" position="sticky" classNames={{ base:`bg-transparent  pt-3`, wrapper:`bg-background rounded-md` }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center  gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Tabs aria-label="Options" variant="light">
            <Tab
              key="home"
              href="/"
              as={Link}
              title={
                <div className="flex items-center space-x-2">
                  <HomeIcon />
                  <span>Home</span>
                </div>
              }
            />

            <Tab key="about" href="/about" as={Link} title={
                <div className="flex items-center space-x-2">
                  <AboutIcon />
                  <span>About</span>
                </div>
              } />

            <Tab key="services" title={
                <div className="flex items-center space-x-2">
                  <ServiceIcon />
                  <span>Services</span>
                </div>
              } />
              <Tab key="portfolio" title={
                <div className="flex items-center space-x-2">
                  <PortfolioIcon />
                  <span>Portfolio</span>
                </div>
              } />
              <Tab key="blog" title={
                <div className="flex items-center space-x-2">
                  <BlogIcon />
                  <span>Blog</span>
                </div>
              } />
              <Tab key="contact" title={
                <div className="flex items-center space-x-2">
                  <ContactIcon />
                  <span>Contact</span>
                </div>
              } />
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
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            endContent={<HandShakeIcon  />}
            variant="flat"
          >
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>

     
 
  );
};
