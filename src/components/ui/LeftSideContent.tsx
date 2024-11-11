import { Button } from "@nextui-org/button";
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
import { Snippet } from "@nextui-org/snippet";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { Chip } from "@nextui-org/chip";

export default function LeftSideContent() {
  return (
    <div className="bg-background p-5 rounded-md shadow-small dark:border border-slate-700 ">
      <div className="flex ">
        <div className="w-[15%] flex flex-col justify-between">
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
            href="https://www.linkedin.com/in/shourav-paul-6b541022a/"
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
        <div className="w-[80%] h-52 relative rounded-md   ">
          <Image
            src={"/profile.jpg"}
            alt="profile"
            fill
            className="rounded-md"
          />
          <Chip
            color="success"
            size="lg"
            startContent={
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-400"></span>
              </span>
            }
            className="font-bold absolute -bottom-3 left-[13%]"
          >
            Available for Hire.
          </Chip>
        </div>
      </div>
      <div className="space-y-2 text-center mt-4">
        <p className="text-2xl font-bold font-chakra">Shourav Paul</p>
        <p className="font-bold font-chakra text-slate-500 ">
          Typescript | React JS | Redux | Next JS | Express JS | Mongoose
        </p>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
            <CallIcon fill="#2854C5" />
          </div>
          <div className="font-chakra">
            <p className="text-slate-500 font-semibold">Call</p>
            <Snippet
              hideSymbol
              classNames={{
                base: " bg-transparent p-0 text-md",
                pre: "font-bold",
              }}
            >
              +8801863272200
            </Snippet>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
            <MessageIcon fill="#F19E39" />
          </div>
          <div className="font-chakra">
            <p className="text-slate-500 font-semibold">Email</p>
            <Snippet
              hideSymbol
              classNames={{
                base: " bg-transparent p-0 text-md",
                pre: "font-bold",
              }}
            >
              Shourav.paul01@gmail.com
            </Snippet>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-gradient-to-t from-secondary-100 to-background flex items-center justify-center rounded-md shadow-slate-400 dark:shadow-secondary shadow-md border dark:border-secondary">
            <LocationIcon fill="#EA3323" />
          </div>
          <div className="font-chakra">
            <p className="text-slate-500 font-semibold">Location</p>
            <p className="font-bold">Kalabagan ,Dhanmondi</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          href="/my-resume.pdf"
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
  );
}
