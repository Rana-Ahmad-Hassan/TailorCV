import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";

const Professional1: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data ? data : defaultData;

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-10 shadow-lg leading-relaxed">
      {/* Header */}
      <header className="text-center border-b border-gray-300 pb-4">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {resume.personal.fullName}
        </h1>
        {resume.personal.title && (
          <p className="text-lg text-gray-600">{resume.personal.title}</p>
        )}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mt-3">
          {resume.personal.email && (
            <a
              href={`mailto:${resume.personal.email}`}
              className="hover:text-blue-700 transition-colors"
            >
              {resume.personal.email}
            </a>
          )}
          {resume.personal.phone && <span>{resume.personal.phone}</span>}
          {resume.personal.location && <span>{resume.personal.location}</span>}
          {resume.personal.linkedin && (
            <a
              href={resume.personal.linkedin}
              className="hover:text-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {resume.personal.github && (
            <a
              href={resume.personal.github}
              className="hover:text-blue-700 transition-colors"
            >
              GitHub
            </a>
          )}
          {resume.personal.website && (
            <a
              href={resume.personal.website}
              className="hover:text-blue-700 transition-colors"
            >
              {resume.personal.website}
            </a>
          )}
        </div>
      </header>

      {/* Summary */}
      {resume.summary && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Profile
          </h2>
          <p className="text-sm text-gray-800">{resume.summary}</p>
        </section>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <p className="text-sm text-gray-800">
            {resume.skills.map((s) => s.name).join(" • ")}
          </p>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Experience
          </h2>
          {resume.experience.map((exp) => (
            <div key={exp.id} className="mt-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>{exp.jobTitle}</span>
                <span className="text-gray-600 italic">
                  {exp.startDate} – {exp.endDate || "Present"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 font-semibold">
                  {exp.company}
                </span>
                {exp.location && (
                  <span className="text-gray-600">{exp.location}</span>
                )}
              </div>
              {exp.details && (
                <p className="text-sm text-gray-700 mt-1">{exp.details}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {resume.education.map((edu) => (
            <div key={edu.id} className="mt-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>{edu.degree}</span>
                <span className="text-gray-600 italic">
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700 font-semibold">{edu.school}</span>
                {edu.location && (
                  <span className="text-gray-600">{edu.location}</span>
                )}
              </div>
              {edu.details && (
                <p className="text-sm text-gray-700 mt-1">{edu.details}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          {resume.projects.map((proj) => (
            <div key={proj.id} className="mt-3">
              <span className="font-semibold">{proj.title}</span>{" "}
              {proj.date && <span className="text-sm italic">{proj.date}</span>}
              <p className="text-sm text-gray-700">{proj.description}</p>
              {proj.technologies && (
                <p className="text-xs text-gray-500">
                  Tech: {proj.technologies.join(", ")}
                </p>
              )}
              {proj.link && (
                <a
                  className="text-blue-700 text-sm hover:underline"
                  href={proj.link}
                >
                  {proj.link}
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          {resume.certifications.map((c) => (
            <div key={c.id} className="mt-2 text-sm text-gray-800">
              <span className="font-semibold">{c.name}</span> — {c.issuer} (
              {c.dateEarned})
            </div>
          ))}
        </section>
      )}

      {/* Mentorship */}
      {resume.mentorship && resume.mentorship.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Mentorship
          </h2>
          {resume.mentorship.map((m) => (
            <div key={m.id} className="mt-2 text-sm text-gray-800">
              <span className="font-semibold">{m.title}</span> — {m.description}{" "}
              ({m.date})
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resume.languages && resume.languages.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-900 border-b border-gray-300 pb-1 mb-2">
            Languages
          </h2>
          <ul className="text-sm text-gray-800 list-disc list-inside">
            {resume.languages.map((lang) => (
              <li key={lang.id}>
                {lang.name} — {lang.proficiency}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Professional1;
