import { Button } from "@nextui-org/button";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "../icons";


export default function LeftSideContent() {
  return (
    <div className="bg-background p-5 rounded-md ">
      <Image src={"https://res.cloudinary.com/dcrui4h7s/image/upload/v1730580132/ttt-zone/vhftx1uuwavg2qetf10z.webp"} alt="profile" width={500} height={500} className="rounded-md"/>
      <div className="space-y-4">
        <p className="text-2xl font-bold ">Shourav Paul</p>
        <p className="text-justify">A Passionate Full Stack Developer 🖥️ & Product Designer having 12 years of Experiences over 24+ Country Worldwide.</p>
        <div className="flex gap-2">
        <Button className="w-1/2">Copy Email</Button>
            <Button className="w-1/2">Copy Email</Button>
        </div>
        <div className="flex gap-2">
            <Button isIconOnly><GithubIcon/></Button>
            <Button isIconOnly><LinkedinIcon/></Button>
        </div>
      </div>
    </div>
  )
}
