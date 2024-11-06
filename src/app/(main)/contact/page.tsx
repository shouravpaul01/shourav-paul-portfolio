"use client";
import { ContactIcon } from "@/src/components/icons";
import HeadingLine from "@/src/components/ui/HeadingLine";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactValidation } from "@/src/validation/contact.validation";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactValidation),
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response, "dddd");
    //   if (response.ok) {
    //     setStatus('Email sent successfully');
    //   } else {
    //     setStatus('Failed to send email');
    //   }
  };
  return (
    <div className="bg-background p-10 rounded-md">
      <section>
        <div className="flex items-center gap-3 mb-3">
          <p className="font-chakra font-bold text-2xl">Get in Touch</p>
          <HeadingLine classNames={{ line: "w-32" }} />
        </div>
        <p className=" text-slate-500 text-justify mb-5">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="bg-gray-50 dark:bg-opacity-10 dark:shadow-inner dark:shadow-secondary  md:p-20 rounded-md ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
            <div className="flex gap-5">
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
              startContent={<ContactIcon fill="#FFFFFF" />}
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}