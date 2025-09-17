import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";

const Professional2: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data || defaultData;

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-900 p-10">
      {/* Header */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">{resume.personal.fullName}</h1>
        {resume.personal.title && (
          <p className="text-lg text-gray-600">{resume.personal.title}</p>
        )}
        <div className="flex flex-wrap gap-4 text-sm text-blue-700 mt-2">
          {resume.personal.email && <a href={`mailto:${resume.personal.email}`}>{resume.personal.email}</a>}
          {resume.personal.phone && <span>{resume.personal.phone}</span>}
          {resume.personal.website && <a href={resume.personal.website}>{resume.personal.website}</a>}
          {resume.personal.github && <a href={resume.personal.github}>GitHub</a>}
          {resume.personal.linkedin && <a href={resume.personal.linkedin}>LinkedIn</a>}
          {resume.personal.location && <span>{resume.personal.location}</span>}
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-6 text-sm">
          {resume.summary && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-1">Profile</h2>
              <p>{resume.summary}</p>
            </section>
          )}

          {resume.skills.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-1">Skills</h2>
              <ul className="list-disc list-inside">
                {resume.skills.map((s) => (
                  <li key={s.id}>{s.name}</li>
                ))}
              </ul>
            </section>
          )}

          {resume.education.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-1">Education</h2>
              {resume.education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                  <p className="text-xs italic">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </section>
          )}

          {resume.languages && resume.languages.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-1">Languages</h2>
              <ul className="list-disc list-inside">
                {resume.languages.map((lang) => (
                  <li key={lang.id}>{lang.name} — {lang.proficiency}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          {resume.experience.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-2">Experience</h2>
              {resume.experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{exp.jobTitle}</span>
                    <span>{exp.startDate} - {exp.endDate || "Present"}</span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.company} — {exp.location}</p>
                  <p className="text-sm mt-1">{exp.details}</p>
                </div>
              ))}
            </section>
          )}

          {resume.projects.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-2">Projects</h2>
              {resume.projects.map((proj) => (
                <div key={proj.id} className="mb-3">
                  <p className="font-semibold">{proj.title} {proj.date && <span className="text-xs">({proj.date})</span>}</p>
                  <p className="text-sm">{proj.description}</p>
                  {proj.technologies && (
                    <p className="text-xs text-gray-500">Tech: {proj.technologies.join(", ")}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {resume.certifications && resume.certifications.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-2">Certifications</h2>
              {resume.certifications.map((c) => (
                <p key={c.id} className="text-sm">
                  {c.name} — {c.issuer} ({c.dateEarned})
                </p>
              ))}
            </section>
          )}

          {resume.mentorship && resume.mentorship.length > 0 && (
            <section>
              <h2 className="font-bold text-blue-700 border-b border-gray-300 mb-2">Mentorship</h2>
              {resume.mentorship.map((m) => (
                <p key={m.id} className="text-sm">{m.title} — {m.description} ({m.date})</p>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional2;
