import { ApiRouteConfig, Handlers } from 'motia'
import { z } from "zod"
import { connectDB } from '../../config/db';
import { User } from '../../models/user.model';
import bcrypt from "bcrypt"

export const config: ApiRouteConfig = {
    type: "api",
    name: "register-user",
    path: "/register",
    method: "POST",
    bodySchema: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
    }),
    emits: []
}

export const handler = async (
    req: any,
) => {
    await connectDB()
    let { name, email, password } = req.body;

    const checkUserExist = await User.findOne({ email })
    if (checkUserExist) {
        return {
            status: 401,
            body: { error: 'User already exists' },
        }
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name,
        email,
        password: hashPassword
    })

    if (newUser) {
        return {
            status: 200,
            body: {
                newUser
            }
        }
    } else {
        return {
            status: 500,
            body: {
                message: "Internel server error"
            }
        }
    }
}