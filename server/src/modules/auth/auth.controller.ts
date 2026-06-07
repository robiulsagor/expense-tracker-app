import { Request, Response } from "express";
import { registerUser } from "./auth.service";
import { registerSchema } from "./auth.validation"



export const register = async (req: Request, res: Response) => {
    try {
        const validatedData = registerSchema.parse(req.body);
        const user = await registerUser(validatedData.name, validatedData.email, validatedData.password);

        res.status(201).json({ success: true, data: user, message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({
            message:
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
        });
    }
}