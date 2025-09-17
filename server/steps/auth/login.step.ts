import { ApiRouteConfig, Handlers } from 'motia'
import { z } from "zod"
import { connectDB } from '../../config/db';
import { User } from '../../models/user.model';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const config: ApiRouteConfig = {
    type: "api",
    name: "login-user",
    path: "/login",
    method: "POST",
    bodySchema: z.object({
        email: z.string(),
        password: z.string()
    }),
    emits: []
}

export const handler = async (req: any) => {
    await connectDB();
    const { email, password } = req.body;

    const checkUserExist = await User.findOne({ email });
    if (!checkUserExist) {
        return {
            status: 404,
            body: { error: "User does not exist" },
        };
    }

    const checkPassword = await bcrypt.compare(password, checkUserExist.password);
    if (!checkPassword) {
        return {
            status: 401,
            body: { message: "Password is not correct" },
        };
    }

    const accessToken = jwt.sign(
        { id: checkUserExist._id.toString() },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
        { id: checkUserExist._id.toString() },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
    );

    return {
        status: 200,
        body: {
            message: "User login successfully",
            accessToken,
            refreshToken,
            user: checkUserExist,
        },
    };
};
