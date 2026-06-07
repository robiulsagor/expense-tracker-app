import bcrypt from "bcryptjs";
import { User } from "../user/user.model";

export const registerUser = async (name: string, email: string, pass: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists!");
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const userObject = newUser.toObject();
    const { password, ...userWithoutPassword } = userObject;

    return userWithoutPassword;
}