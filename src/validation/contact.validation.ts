import { z } from "zod";

export const contactValidation=z.object({
    name:z.string().nonempty("Name is required."),
    email:z.string().nonempty("Email is required.").email("Invalid Email."),// Email
    subject:z.string().nonempty("Subject is required."),
    message:z.string().nonempty("Message is required."),
    
})