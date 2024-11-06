import { Button } from "@nextui-org/button";
import Image from "next/image";
import {
  CallIcon,
  DownloadIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MessageIcon,
} from "../icons";
import { Chip } from "@nextui-org/chip";
import { Snippet } from "@nextui-org/snippet";

export default function LeftSideContent() {
  return (
    <div className="bg-background p-5 rounded-md ">
      <div className="flex ">
        <div className="w-[15%] space-y-2">
          <Button isIconOnly>
            <GithubIcon />
          </Button>
          <Button isIconOnly>
            <LinkedinIcon />
          </Button>
          <Button isIconOnly>
            <FacebookIcon />
          </Button>
        </div>
        <div className="w-[85%] h-52 relative rounded-md   ">
          <Image
            src={
              "https://res.cloudinary.com/dcrui4h7s/image/upload/v1730580132/ttt-zone/vhftx1uuwavg2qetf10z.webp"
            }
            alt="profile"
            fill
            className="rounded-md"
          />
        </div>
      </div>
      <div className="space-y-3 text-center mt-3">
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
              +08801863272200
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
          color="secondary"
         radius="full"
         className="w-44 shadow-md shadow-gray-300 "
          endContent={<span className="animate-bounce"><DownloadIcon fill="#FFFFFF" /></span>}
        >
          Dowload CV
        </Button>
      </div>
    </div>
  );
}
