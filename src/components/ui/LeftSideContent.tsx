"use client"
import { Button } from "@heroui/button";
import Image from "next/image";
import {
  CallIcon,
  CircleAdjustIcon,
  DownloadIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MessageIcon,
  WhatsUpIcon,
} from "../icons";
import { Snippet } from "@heroui/snippet";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

export default function LeftSideContent() {
  return (
    <motion.div  initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }} className="bg-background p-5 rounded-md shadow-small dark:border border-slate-700 ">
      <div className="flex  flex-col md:flex-row lg:flex-col gap-0 md:gap-8 lg:gap-0">
        <div className="w-full md:w-[40%] lg:w-full">
          <div className="flex gap-5 justify-start sm:justify-center">
            <div className="w-11 flex flex-col justify-between ">
              <div className="relative  w-8 h-8">
                <span className="animate-ping absolute top-1 left-1 inline-flex  h-full w-full rounded-lg bg-secondary-400 opacity-75"></span>
                <Tooltip
                  placement="right"
                  color="success"
                  showArrow
                  content="Hey, What's up?"
                >
                  <Button
                    isIconOnly
                    href={`https://api.whatsapp.com/send/?phone=${"+8801863272200"}&text=${"Hey, What's up?"}`}
                    as={Link}
                    isExternal
                  >
                    <WhatsUpIcon className="size-7" />
                  </Button>
                </Tooltip>
              </div>
              <Button
                isIconOnly
                href="https://github.com/shouravpaul01"
                as={Link}
                isExternal
              >
                <GithubIcon />
              </Button>
              <Button
                isIconOnly
                href="https://www.linkedin.com/in/shouravpaul01/"
                as={Link}
                isExternal
              >
                <LinkedinIcon />
              </Button>
              <Button
                isIconOnly
                href="https://www.facebook.com/shourav.paul01"
                as={Link}
                isExternal
              >
                <FacebookIcon />
              </Button>
            </div>
            <div className="w-[236px] h-52 relative rounded-md   ">
              <Image
                src={"/profile.jpg"}
                alt="profile"
                fill
                className="rounded-md "
              />
              <Chip
                color="success"
                size="md"
                startContent={
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#004493]"></span>
                  </span>
                }
                classNames={{
                  base: "gap-2 px-2 absolute -bottom-3 left-[15%]",
                  content: "font-chakra font-semibold ",
                }}
              >
                Available for Hire.
              </Chip>
            </div>
          </div>
          <div className="space-y-2 text-center mt-4">
            <p className="text-2xl font-bold font-chakra">Shourav Paul</p>
            <p className="font-bold font-chakra text-slate-500 ">
              TypeScript | React JS | Redux | Next JS | Express JS | Mongoose
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-3">
              <div className="size-10 md:size-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
                <CallIcon fill="#2854C5" />
              </div>
              <div className="font-chakra">
                <p className="text-slate-500 font-semibold">Call</p>
                <Snippet
                  hideSymbol
                  classNames={{
                    base: " bg-transparent p-0 text-md -mt-2 md:mt-0 gap-0",
                    pre: "font-bold",
                    copyButton: "text-secondary",
                  }}
                >
                  +8801863272200
                </Snippet>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="size-10 md:size-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
                <MessageIcon fill="#F19E39" />
              </div>
              <div className="font-chakra">
                <p className="text-slate-500 font-semibold">Email</p>
                <Snippet
                  hideSymbol
                  classNames={{
                    base: " bg-transparent p-0 text-md gap-0 -mt-2 md:mt-0",
                    pre: "font-bold",
                    copyButton: "text-secondary",
                  }}
                >
                  Shourav.paul01@gmail.com
                </Snippet>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="size-10 md:size-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
                <LocationIcon fill="#EA3323" />
              </div>
              <div className="font-chakra">
                <p className="text-slate-500 font-semibold">Location</p>
                <p className="font-bold -mt-[1px] md:mt-0">
                  Kalabagan ,Dhanmondi
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-normal lg:justify-center pt-5">
            <Button
              href="/Shourav_paul_resume.pdf"
              as={Link}
              isExternal
              color="secondary"
              radius="full"
              className="w-44 shadow-md shadow-gray-300 "
              endContent={
                <span className="animate-bounce">
                  <DownloadIcon fill="#FFFFFF" />
                </span>
              }
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
