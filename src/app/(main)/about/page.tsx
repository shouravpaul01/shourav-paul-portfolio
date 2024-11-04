import { frontendSkills } from "@/src/constents";
import Image from "next/image";
import { it } from "node:test";

export default function AboutPage() {
  return (
    <div className="bg-background p-10 rounded-md">
      <div className="flex ">
        <div className="w-full md:w-[60%] space-y-6">
          <h1 className="text-3xl font-bold">
            Hello ✋, I am <span className="text-secondary">Shourav Paul</span>
          </h1>
          <p className="text-xl font-semibold text-gray-400 text-justify">
            A Passionate Full Stack Developer 🖥️ & Product Designer having 12
            years of Experiences over 24+ Country Worldwide.
          </p>
          <div className="flex gap-10">
            <div>
              <h1 className="font-extrabold text-3xl">2+</h1>
              <p className="text-gray-400 text-md">Year of Experience </p>
            </div>
            <div>
              <h1 className="font-extrabold text-3xl">10+</h1>
              <p className="text-gray-400 text-md">Project Completed </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%]"></div>
      </div>
      <div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold">Working Skills</h3>

          <div>
            <h2 className="text-xl font-semibold">Frontend Skills</h2>
            <div className="flex flex-wrap gap-4">
              {
                frontendSkills.map((item,index)=><div key={index} className="w-[100px] shadow-small  rounded-md flex flex-col justify-around dark:border border-secondary items-center p-1  bg-gradient-to-t from-secondary-100 to-background">
                <Image
                  src={item.image}
                  alt={item.skill}
                  width={50}
                  height={50}
                  className="z-10"
                />
                <span className="text-xs font-semibold">{item.skill}</span>
              </div>)
              }
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
