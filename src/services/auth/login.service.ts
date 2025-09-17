import { api } from "../../api/api";

interface RegisterBody {
    email: string,
    password: string
}
export const loginUser = async (body: RegisterBody) => {
    try {
        const res = await api.post("/login", {
            email: body.email,
            password: body.password
        })
        return res.data
    } catch (error: any) {
        throw new Error(error)
    }
}