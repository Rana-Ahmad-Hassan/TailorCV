import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";

const Professional3: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data || defaultData;

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-12 leading-relaxed">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wide">{resume.personal.fullName}</h1>
        {resume.personal.title && <p className="text-lg text-gray-600">{resume.personal.title}</p>}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-3">
          {resume.personal.email && <a href={`mailto:${resume.personal.email}`}>{resume.personal.email}</a>}
          {resume.personal.phone && <span>{resume.personal.phone}</span>}
          {resume.personal.website && <a href={resume.personal.website}>{resume.personal.website}</a>}
          {resume.personal.github && <a href={resume.personal.github}>GitHub</a>}
          {resume.personal.linkedin && <a href={resume.personal.linkedin}>LinkedIn</a>}
          {resume.personal.location && <span>{resume.personal.location}</span>}
        </div>
      </header>

      {/* Profile */}
      {resume.summary && (
        <section className="mb-8">
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-2">Profile</h2>
          <p className="text-sm">{resume.summary}</p>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-2">Experience</h2>
          {resume.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">{exp.jobTitle} — {exp.company}</span>
                <span className="text-gray-600">{exp.startDate} - {exp.endDate || "Present"}</span>
              </div>
              <p className="text-xs italic text-gray-500">{exp.location}</p>
              <p className="text-sm mt-1">{exp.details}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="mb-8">
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-2">Education</h2>
          {resume.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.school}, {edu.location}</p>
              <p className="text-xs italic">{edu.startDate} - {edu.endDate}</p>
              {edu.details && <p className="text-sm">{edu.details}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-2">Projects</h2>
          {resume.projects.map((proj) => (
            <div key={proj.id} className="mb-4">
              <p className="font-semibold">{proj.title}</p>
              <p className="text-sm">{proj.description}</p>
              {proj.technologies && (
                <p className="text-xs text-gray-500">Tech: {proj.technologies.join(", ")}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills + Languages inline */}
      <footer className="flex flex-wrap justify-between border-t pt-4 text-sm text-gray-600">
        {resume.skills.length > 0 && (
          <div>
            <span className="font-semibold">Skills: </span>
            {resume.skills.map((s) => s.name).join(", ")}
          </div>
        )}
        {resume.languages && resume.languages.length > 0 && (
          <div>
            <span className="font-semibold">Languages: </span>
            {resume.languages.map((l) => l.name).join(", ")}
          </div>
        )}
      </footer>
    </div>
  );
};

export default Professional3;
