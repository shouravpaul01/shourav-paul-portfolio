"use client"
import ProjectCard from "@/src/components/cards/ProjectCard";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { projectData } from "@/src/constents";
import { motion } from "framer-motion";

export default function Portfoliopage() {
  return (
    <motion.div  initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }} className="bg-background p-0 md:p-10 rounded-md">
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
    </motion.div >
  );
}
