import { z } from "zod";

//sign up
const usernameRegex = new RegExp(/^\w+\d+/);
export const signupSchema = z
  .object({
    username: z.string().nonempty("Username is required").regex(usernameRegex, {
      message: "username should have at least one digit",
    }),
    email: z.string().nonempty("Email is required").email({
      message: "not a valid mail",
    }),
    password: z.string().nonempty("Password is required").min(6, {
      message: "Password too short - should be 6 chars minimum",
    }),
    passwordConfirmation: z.string().nonempty("Confirm password is required"),
    // image: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

//sign in
export const signinSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Not a valid email",
  }),
  password: z.string().nonempty("Password is required").min(6, {
    message: "Password too short - should be 6 chars minimum",
  }),
});

//taskSchema
const status = ["Not started", "In progress"];
export const taskSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .min(6, { message: "Title has to be at least 6 char long" }),
  description: z
    .string()
    .nonempty("Description is required")
    .max(80, { message: "Description can not be more than 80 char long" }),
  dueDate: z.date(),
  status: z.enum(status),
});

//search schema
export const searchSchema = z.object({
  search: z.string(),
});
