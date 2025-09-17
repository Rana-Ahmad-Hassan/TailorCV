import { api } from "../../api/api";

interface RegisterBody {
    name: string,
    email: string,
    password: string
}
export const registerUser = async (body: RegisterBody) => {
    try {
        const res = await api.post("/register", {
            name : body.name,
            email: body.email,
            password: body.password
        })
        return res.data
    } catch (error: any) {
        throw new Error(error)
    }
}