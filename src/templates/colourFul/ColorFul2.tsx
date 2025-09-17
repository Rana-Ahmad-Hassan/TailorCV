import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";
import {
  FaUser as User,
  FaEnvelope as Mail,
  FaPhone as Phone,
  FaGlobe as Globe,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaMapMarkerAlt as MapPin,
  FaCalendarAlt as Calendar,
  FaExternalLinkAlt as ExternalLink,
} from "react-icons/fa";


const short = (text = "", len = 120) =>
  text.length > len ? text.slice(0, len).trim() + "…" : text;

const Colorful2: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data || defaultData;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-emerald-600 to-teal-700 text-white p-6">
        <div className="text-center mb-6">
          {resume.personal.image && (
            <img
              src={resume.personal.image}
              alt={resume.personal.fullName}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
          )}
          <h1 className="text-2xl font-bold mb-1">{resume.personal.fullName}</h1>
          <h2 className="text-emerald-200">{resume.personal.title}</h2>
        </div>

        {/* Contact Info */}
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3 border-b border-emerald-400 pb-1">
            Contact
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span className="break-all">{resume.personal.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{resume.personal.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Github size={14} />
              <span>{resume.personal.github}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin size={14} />
              <span>{resume.personal.linkedin}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{resume.personal.location}</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3 border-b border-emerald-400 pb-1">
            Skills
          </h3>
          <div className="space-y-2">
            {resume.skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-emerald-500 bg-opacity-50 px-2 py-1 rounded text-sm"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        {resume.languages && resume.languages.length > 0 && (
          <section className="mb-6">
            <h3 className="text-lg font-bold mb-3 border-b border-emerald-400 pb-1">
              Languages
            </h3>
            <div className="space-y-1 text-sm">
              {resume.languages.map((lang) => (
                <div key={lang.id}>
                  <div className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-emerald-200">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        {/* Summary */}
        {resume.summary && (
          <section className="mb-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-2 uppercase tracking-wide">
              Professional Summary
            </h3>
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-3"></div>
            <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
          </section>
        )}

        {/* Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-emerald-700 mb-2 uppercase tracking-wide">
            Experience
          </h3>
          <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-4"></div>
          <div className="space-y-4">
            {resume.experience.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-4 border-l-2 border-emerald-200"
              >
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-2 top-1"></div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-800">{exp.jobTitle}</h4>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-emerald-600 font-medium mb-1">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-gray-700 text-sm">{exp.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-emerald-700 mb-2 uppercase tracking-wide">
            Education
          </h3>
          <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-4"></div>
          <div className="space-y-3">
            {resume.education.map((edu) => (
              <div
                key={edu.id}
                className="relative pl-4 border-l-2 border-emerald-200"
              >
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-2 top-1"></div>
                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                <p className="text-emerald-600">
                  {edu.school} • {edu.location}
                </p>
                <p className="text-gray-600 text-sm">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-emerald-700 mb-2 uppercase tracking-wide">
            Projects
          </h3>
          <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-4"></div>
          <div className="space-y-3">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <h4 className="font-bold text-gray-800 mb-1">
                  {project.title}
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Colorful2;
