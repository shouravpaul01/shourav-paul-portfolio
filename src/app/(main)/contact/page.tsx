"use client";
import { CircleIcon, ContactIcon } from "@/src/components/icons";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactValidation } from "@/src/validation/contact.validation";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactValidation),
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSuccess(true);
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      reset();
      toast.success(responseData?.message);
    } else {
      toast.error(responseData?.message);
    }
    setIsSuccess(false);
  };
 
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }} className="bg-background p-5 md:p-10 rounded-md">
      <section>
        <div className="flex items-center gap-3 mb-3">
          <p className="font-chakra font-bold text-2xl">Get in Touch</p>
          <HeadingLine classNames={{ line: "w-32" }} />
        </div>
        <p className=" text-slate-500 text-justify mb-5">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.4,
          }} className="bg-gray-50 border dark:border-secondary dark:bg-opacity-10  dark:shadow-inner dark:shadow-secondary p-5 md:p-20 rounded-md ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                type="text"
                {...register("name")}
                errorMessage={
                  errors["name"] ? (errors["name"]?.message as string) : ""
                }
                isInvalid={!!errors["name"]}
                label="Name"
                variant="underlined"
                color="secondary"
                placeholder="Full Name"
                className="w-full md:w-[40%]"
                classNames={{ label: "text-lg font-chakra font-semibold" }}
              />
              <Input
                type="email"
                {...register("email")}
                errorMessage={
                  errors["email"] ? (errors["email"]?.message as string) : ""
                }
                isInvalid={!!errors["email"]}
                label="Email"
                variant="underlined"
                color="secondary"
                placeholder="Enter Your Email"
                className="w-full md:w-[60%]"
                classNames={{ label: "text-lg font-chakra font-semibold" }}
              />
            </div>
            <Input
              type="text"
              {...register("subject")}
              errorMessage={
                errors["subject"] ? (errors["subject"]?.message as string) : ""
              }
              isInvalid={!!errors["subject"]}
              label="Subject"
              variant="underlined"
              color="secondary"
              placeholder="Enter Subject"
              classNames={{ label: "text-lg font-chakra font-semibold" }}
            />
            <Textarea
              label="Message"
              {...register("message")}
              errorMessage={
                errors["message"] ? (errors["message"]?.message as string) : ""
              }
              isInvalid={!!errors["message"]}
              variant="underlined"
              color="secondary"
              placeholder="Write Message"
              minRows={5}
              classNames={{ label: "text-lg font-chakra font-semibold" }}
            />
            <Button
              type="submit"
              color="secondary"
              className="w-full md:w-44"
              isLoading={isSuccess}
              spinner={
                <CircleIcon className="size-6 text-current animate-spin" />
              }
              startContent={!isSuccess && <ContactIcon fill="#FFFFFF" />}
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
}
