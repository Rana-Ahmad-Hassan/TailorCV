import { ApiRouteConfig, Handlers } from 'motia';
import { z } from "zod";
import { connectDB } from '../../config/db';
import { Resume } from '../../models/resume.model';

export const config: ApiRouteConfig = {
    type: "api",
    name: "save-resume",
    path: "/save/resume",
    method: "POST",
    bodySchema: z.object({
        userId: z.string(),
        title: z.string(),
        templateKey: z.string(),
        data: z.object({
            personal: z.object({
                fullName: z.string(),
                title: z.string(),
                email: z.string(),
                phone: z.string(),
                website: z.string().optional(),
                github: z.string().optional(),
                linkedin: z.string().optional(),
                location: z.string(),
                image: z.string().optional(),
            }),
            summary: z.string().optional(),
            skills: z.array(z.object({ name: z.string() })),
            experience: z.array(z.object({
                jobTitle: z.string(),
                company: z.string(),
                location: z.string().optional(),
                startDate: z.string(),
                endDate: z.string(),
                details: z.string(),
                isCurrent: z.boolean().optional(),
            })),
            education: z.array(z.object({
                degree: z.string(),
                school: z.string(),
                location: z.string().optional(),
                startDate: z.string(),
                endDate: z.string(),
                details: z.string().optional(),
            })),
            projects: z.array(z.object({
                title: z.string(),
                description: z.string(),
                technologies: z.array(z.string()).optional(),
                link: z.string().optional(),
                date: z.string().optional(),
            })).optional(),
            certifications: z.array(z.object({
                name: z.string(),
                issuer: z.string().optional(),
                dateEarned: z.string().optional(),
            })).optional(),
            mentorship: z.array(z.object({
                title: z.string(),
                description: z.string(),
                date: z.string().optional(),
            })).optional(),
            languages: z.array(z.object({
                name: z.string(),
                proficiency: z.string().optional(),
            })).optional(),
        }),
    }),
    emits: []
}

export const handler = async (req: any) => {
    await connectDB();

    const { userId, title, templateKey, data, thumbnail } = req.body;

    if (!userId || !title || !templateKey || !data) {
        return {
            status: 400,
            body: { error: "Missing required fields" },
        };
    }

    try {
        const newResume = new Resume({
            userId,
            title,
            templateKey,
            data,
        });

        const savedResume = await newResume.save();

        return {
            status: 200,
            body: {
                message: "Resume saved successfully",
                resume: savedResume,
            },
        };
    } catch (error: any) {
        console.error(error);
        return {
            status: 500,
            body: { error: "Failed to save resume" },
        };
    }
};
