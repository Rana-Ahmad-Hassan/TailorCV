import { ApiRouteConfig, Handlers } from 'motia'
import { connectDB } from '../../config/db';
import { User } from '../../models/user.model';


export const config: ApiRouteConfig = {
    type: "api",
    name: "get-user",
    path: "/get-user/:id",
    method: "GET",
    emits: []
}

export const handler = async (req: any) => {
    await connectDB();
    const { id } = req.pathParams;

    const getuser = await User.findById(id)
    if (!getuser) {
        return {
            status: 401,
            body: {
                message: "User dosent exist"
            }
        }
    }

    return {
        status: 200,
        body: {
            getuser
        }
    }
};
