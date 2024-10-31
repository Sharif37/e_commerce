// signUpRouter.ts
import { Request, Response } from "express";
import { z } from "zod";
import { registerUser } from "../services/userService";


  

export const UserBodySchema = z.object({
  user_name: z.string().optional(),
  user_email: z.string().email(),
  user_phone: z.string().optional(),
  user_image_url: z.string().url().optional(),
  password: z.string().min(6),
});

export const userRegistration = async (
  req: Request,
  res: Response,
  role_id: number
) => {
  try {
    const userData = UserBodySchema.parse(req.body);
    const user_id = await registerUser(userData, role_id);

    
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        name: "Invalid data type.",
        message: error.errors,
      });
    } else {
      res.status(500).json({ message: "Error registering user", error });
    }
  }
};



// i added some code 