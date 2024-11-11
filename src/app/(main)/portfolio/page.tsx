import ProjectCard from "@/src/components/cards/ProjectCard";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { projectData } from "@/src/constents";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Portfoliopage() {
  return (
    <div className="bg-background p-5 md:p-10 rounded-md">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold font-chakra">
          Explore My Recent Projects
        </h3>
        <HeadingLine classNames={{ line: "w-32" }} />
      </div>
      <p className=" text-slate-500 text-justify mb-5">
      Browse through my latest work to explore a diverse range of designs and developments, meticulously crafted with precision and creativity.
        </p>
      <div className="space-y-7">
      {
        projectData.map((item,index)=> <ProjectCard key={index} project={item} />)
      }
      </div>
    </div>
  );
}
