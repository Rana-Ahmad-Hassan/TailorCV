import { ApiRouteConfig } from "motia";
import { connectDB } from "../../config/db";
import { Resume } from "../../models/resume.model";

export const config: ApiRouteConfig = {
  type: "api",
  name: "get-user-resumes",
  path: "/resumes/:id",
  method: "GET",
  emits: [],
};

export const handler = async (req: any) => {
  await connectDB();

  const { id } = req.pathParams; // this is userId

  try {
    const resumes = await Resume.find({ userId: id }).sort({ createdAt: -1 });

    if (!resumes || resumes.length === 0) {
      return { status: 404, body: { error: "No resumes found for this user" } };
    }

    return { status: 200, body: { resumes } };
  } catch (error: any) {
    console.error(error);
    return { status: 500, body: { error: "Failed to fetch resumes" } };
  }
};
