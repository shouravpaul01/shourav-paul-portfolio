import { CircleAdjustIcon, SchoolIcon } from "@/src/components/icons";
import EducationLine from "@/src/components/ui/EducationLine";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { backendSkills, frontendSkills, softSkills } from "@/src/constents";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { it } from "node:test";

export default function HomePage() {
  return (
    <div className="bg-background p-5 md:p-10 rounded-md">
      <section>
        <h1 className="text-3xl font-extrabold font-chakra ">
          Hello ✋, I am <span className="text-secondary ">Shourav Paul</span>{" "}
          <Chip
            color="success"
            size="lg"
            startContent={
              <span className="animate-ping">
                <CircleAdjustIcon />
              </span>
            }
            className="font-bold"
          >
            Available for Hire.
          </Chip>
        </h1>
        <div className="text-md text-slate-500 text-justify mt-5 mb-8">
          I am a dedicated <span className="font-bold">MERN stack developer</span> with a flair for creating
          dynamic,creative and user friendly web applications. Now I’m currently
          pursuing my MSc. at Jahangirnagar University, and I hold a Bachelor’s
          degree in Computer Science Engineering from the University of Science
          and Technology Chittagong. This background has given me a strong
          foundation in about world of technology .
          <p className="mt-2" />
          With over 2 years of hands-on experience, I have gained skills and
          developed expertise using various tools and technologies, such as
          <span className="font-bold"> Tailwind CSS, Firebase, Javascript, Typescript, React,Redux,Next JS, MongoDB,
          Mongoose, and Express JS.</span> I love solving difficult challenges and
          bringing ideas to life in impactful ways.
          <p className="mt-2" />
          I’m a firm believer in lifelong learning. Whether through
          workshops,online source, online courses, or industry conferences, I am
          constantly seeking opportunities to deepen my expertise and stay ahead
          in the ever-evolving MERN stack ecosystem.
        </div>
        <div className="flex gap-10 ">
          <div>
            <h1 className="font-chakra font-extrabold text-3xl">2+</h1>
            <p className="text-slate-500 text-md">Year of Experience </p>
          </div>
          <div>
            <h1 className="font-chakra font-extrabold text-3xl">10+</h1>
            <p className="text-slate-500 text-md">Project Completed </p>
          </div>
        </div>
      </section>

      <section className="w-full mt-8 ">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold font-chakra">Working Skills</h3>
          <HeadingLine classNames={{ line: "w-32" }} />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-chakra  mb-2">Frontend Skills</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              {frontendSkills.map((item, index) => (
                <div
                  key={index}
                  className="w-[100px] shadow-small  rounded-md flex flex-col justify-around dark:border border-secondary items-center p-1  bg-gradient-to-t from-secondary-100 to-background"
                >
                  <Image
                    src={item.image}
                    alt={item.skill}
                    width={50}
                    height={50}
                    className="z-10"
                  />
                  <span className="text-xs font-semibold">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-chakra  mb-2">Backend Skills</h2>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((item, index) => (
                <div
                  key={index}
                  className="w-[100px] shadow-small  rounded-md flex flex-col justify-around dark:border border-secondary items-center p-1  bg-gradient-to-t from-secondary-100 to-background"
                >
                  <Image
                    src={item.image}
                    alt={item.skill}
                    width={50}
                    height={50}
                    className="z-10"
                  />
                  <span className="text-xs font-semibold">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-8">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold font-chakra">Soft Skills</h3>
          <HeadingLine classNames={{ line: "w-32" }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((item, index) => (
            <Chip key={index} radius="sm">
              {item}
            </Chip>
          ))}
        </div>
      </section>
      <section className="my-8">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-2xl font-bold font-chakra">Education</h3>
          <HeadingLine classNames={{ line: "w-32" }} />
        </div>
        <div className="flex gap-5 mb-5">
          <EducationLine />
          <div>
            <Chip radius="full" className="font-bold mt-2">
              2023 - Present
            </Chip>
            <p className="font-chakra font-bold text-xl mt-6">
              Jahangirnagar University
            </p>
            <p className="font-chakra  text-xl text-slate-500">
              MSc in <span>Computer Science.</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <EducationLine />
          <div>
            <Chip radius="full" className="font-bold mt-2">
              2016 - 2021
            </Chip>
            <p className="font-chakra font-bold text-xl mt-6">
              University of Science and Technology, Chitagong
            </p>
            <p className="font-chakra  text-xl text-slate-500">
              BSc in <span>Computer Science and Engineering.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
