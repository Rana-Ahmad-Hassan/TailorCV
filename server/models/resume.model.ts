import mongoose, { Schema, Document } from "mongoose";

export interface IResume extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  templateKey: string;
  data: {
    personal: {
      fullName: string;
      title: string;
      email: string;
      phone: string;
      website?: string;
      github?: string;
      linkedin?: string;
      location: string;
      image?: string;
    };
    summary?: string;
    skills: { name: string, id?: string }[];
    experience: {
      jobTitle: string;
      company: string;
      location?: string;
      startDate: string;
      endDate: string;
      details: string;
      isCurrent?: boolean;
      id?: string
    }[];
    education: {
      degree: string;
      school: string;
      location?: string;
      startDate: string;
      endDate: string;
      details?: string;
      id?: string
    }[];
    projects?: {
      title: string;
      description: string;
      technologies?: string[];
      link?: string;
      date?: string;
      id?: string
    }[];
    certifications?: {
      name: string;
      issuer?: string;
      dateEarned?: string;
      id?: string;
    }[];
    mentorship?: {
      title: string;
      description: string;
      date?: string;
      id?: string
    }[];
    languages?: {
      name: string;
      proficiency?: string;
      id?: string
    }[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema: Schema<IResume> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    templateKey: { type: String, required: true },
    data: {
      personal: {
        fullName: { type: String, required: true },
        title: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        website: { type: String, required: false },
        github: { type: String, required: false },
        linkedin: { type: String, required: false },
        location: { type: String, required: true },
        image: { type: String, default: null },
      },
      summary: { type: String, default: "" },
      skills: [
        {
          name: { type: String, required: true },
          id: { type: String }
        },
      ],
      experience: [
        {
          jobTitle: { type: String, required: true },
          company: { type: String, required: true },
          location: { type: String, required: false },
          startDate: { type: String, required: true },
          endDate: { type: String, required: true },
          details: { type: String, required: true },
          isCurrent: { type: Boolean, default: false },
          id: { type: String }

        },
      ],
      education: [
        {
          degree: { type: String, required: true },
          school: { type: String, required: true },
          location: { type: String, required: false },
          startDate: { type: String, required: true },
          endDate: { type: String, required: true },
          details: { type: String, required: false },
          id: { type: String }

        },
      ],
      projects: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
          technologies: [{ type: String }],
          link: { type: String },
          date: { type: String },
          id: { type: String }

        },
      ],
      certifications: [
        {
          name: { type: String },
          issuer: { type: String },
          dateEarned: { type: String },
          id: { type: String }

        },
      ],
      mentorship: [
        {
          title: { type: String },
          description: { type: String },
          date: { type: String },
          id: { type: String }

        },
      ],
      languages: [
        {
          name: { type: String },
          proficiency: { type: String },
          id: { type: String }

        },
      ],
    },
  },
  { timestamps: true }
);

export const Resume = mongoose.model<IResume>("Resume", ResumeSchema);
