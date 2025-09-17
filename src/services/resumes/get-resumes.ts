import { api } from "../../api/api";



export const getResumesOfUser = async (id: any) => {
    try {
        const res = await api.get(`/resumes/${id}`)
        return res.data
    } catch (error: any) {
        throw new Error(error)
    }
}