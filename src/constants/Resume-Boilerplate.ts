import type { resumeDataType } from "../types/templates";
import { v4 as uuidv4 } from "uuid"; // You can use uuid for unique IDs

export const defaultData: resumeDataType = {
  personal: {
    fullName: "JOHN DOE",
    title: "Software Engineer",
    email: "pirateking@gmail.com",
    phone: "123-456-7890",
    website: "piratekingdom.com",
    github: "https://github.com/pirateking",
    linkedin: "https://linkedin.com/in/pirateking",
    location: "Tokyo, Japan",
  },
  summary:
    "Software engineer with 5+ years of experience in full-stack development, microservices, and distributed systems.",
  skills: [
    "C#", ".NET", "Java", "JavaScript", "TypeScript", "React", "Node.js", "Azure",
    "Git", "CI/CD", "Unit Testing", "Game Development"
  ].map((skill) => ({
    id: uuidv4(),
    name: skill,
  })),
  experience: [
    {
      id: uuidv4(),
      jobTitle: "Software Engineer",
      company: "Microsoft",
      location: "Redmond, WA",
      startDate: "05/2018",
      endDate: "04/2022",
      details: "Led design and development of enterprise microservices",
      isExpanded: false,
      isCurrent: false,
    },
    {
      id: uuidv4(),
      jobTitle: "Software Development Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      startDate: "04/2017",
      endDate: "04/2018",
      details: "Implemented enterprise apps",
      isExpanded: false,
      isCurrent: false,
    },
  ],
  education: [
    {
      id: uuidv4(),
      degree: "Bachelor of Science",
      school: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      startDate: "2007",
      endDate: "2010",
      details: "Major: Electrical and Computer Engineering",
    },
  ],
  projects: [
    {
      id: uuidv4(),
      title: "COLORMAN",
      description: "2D mobile strategy puzzle game.",
      technologies: ["Unity 2D", "C#"],
      link: "https://youtube.com/demo",
      date: "2020",
    },
  ],
  certifications: [
    {
      id: uuidv4(),
      name: "Japanese Language Proficiency N1",
      issuer: "JLPT",
      dateEarned: "2014",
    },
  ],
  mentorship: [
    {
      id: uuidv4(),
      title: "Springboard Mentor",
      description: "Guided students in coding and career advice",
      date: "2021 - 2022",
    },
  ],
  languages: [
    { id: uuidv4(), name: "English", proficiency: "Native" },
    { id: uuidv4(), name: "Japanese", proficiency: "Fluent" },
    { id: uuidv4(), name: "Korean", proficiency: "Intermediate" },
  ],
};
