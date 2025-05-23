"use client";
import { CodeIcon, DatabaseIcon, LaptopIcon } from "@/src/components/icons";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-background p-5 md:p-10 rounded-md"
    >
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold font-chakra">My Offered Services</h3>
        <HeadingLine classNames={{ line: "w-32" }} />
      </div>
      <p className="text-md text-slate-500 text-justify  mb-8">
        With a focus on real solutions, I drive innovation and creativity,
        offering experienced product design and development services to
        transform your vision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.4,
          }}
          className="p-5 bg-gradient-to-t from-secondary-100 to-background  border  dark:border-secondary rounded-md"
        >
          <p className="font-chakra font-bold text-xl flex items-center gap-3">
            <LaptopIcon className="size-10 fill-black dark:fill-white animate-bounce" /> Wed
            Design
          </p>
          <p className="text-slate-500 text-justify mt-2">
            Building dynamic, scalable, and highly responsive web applications
            using MERN stack technology (
            <span className="font-bold">
              Typescript, React JS, Redux, Next JS, Node.js, Express JS
              ,Mongoose
            </span>
            ).
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.4,
          }}
          className="p-5 bg-gradient-to-t from-secondary-100 to-background  border dark:border-secondary rounded-md"
        >
          <p className="font-chakra font-bold text-xl flex items-center gap-3">
            <CodeIcon className="size-10 fill-black dark:fill-white animate-bounce" /> API
            Development & Integration
          </p>
          <p className="text-slate-500 text-justify mt-2">
            Developing RESTful APIs for seamless data handling, CRUD operations,
            and third-party integrations using ,
            <span className="font-bold">
              Node.js, Express, MongoDB and Mongoose
            </span>
            . Implementing secure authentication with JWT and documenting APIs
            with Swagger or Postman for easy integration.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.4,
          }}
          className="p-5 bg-gradient-to-t from-secondary-100 to-background  border dark:border-secondary rounded-md"
        >
          <p className="font-chakra font-bold text-xl flex items-center gap-3">
            <DatabaseIcon className="size-10 fill-black dark:fill-white animate-bounce" /> Database
            Design & Optimization
          </p>
          <p className="text-slate-500 text-justify mt-2">
            Designing efficient and scalable MongoDB schemas with optimized data
            modeling, utilizing indexes, and employing aggregation techniques to
            improve query performance. Expertise in Mongoose ODM for seamless
            data interaction and advanced optimization strategies..
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
