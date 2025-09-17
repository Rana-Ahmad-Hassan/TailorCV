import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";

const truncate = (text = "", len = 140) =>
  text.length > len ? text.slice(0, len).trim() + "…" : text;

const Colorful1: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data || defaultData;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          {resume.personal.image && (
            <img
              src={resume.personal.image}
              alt={resume.personal.fullName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
          )}

          <div>
            <h1 className="text-3xl font-semibold">{resume.personal.fullName}</h1>
            {resume.personal.title && (
              <p className="text-lg opacity-90">{resume.personal.title}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm opacity-90">
            {resume.personal.email && (
              <a
                href={`mailto:${resume.personal.email}`}
                className="underline"
              >
                {resume.personal.email}
              </a>
            )}
            {resume.personal.phone && <span>{resume.personal.phone}</span>}
            {resume.personal.location && <span>{resume.personal.location}</span>}
            {resume.personal.website && (
              <a href={resume.personal.website} target="_blank" rel="noreferrer" className="underline">
                Website
              </a>
            )}
            {resume.personal.github && (
              <a href={resume.personal.github} target="_blank" rel="noreferrer" className="underline">
                GitHub
              </a>
            )}
            {resume.personal.linkedin && (
              <a href={resume.personal.linkedin} target="_blank" rel="noreferrer" className="underline">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        {/* Summary */}
        {resume.summary && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Profile</h2>
            <p className="mt-2 text-sm text-gray-700">{resume.summary}</p>
          </section>
        )}

        {/* Skills */}
        {resume.skills && resume.skills.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.skills.map((s) => (
                <span
                  key={s.id}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-800"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Experience</h2>
            <div className="mt-3 space-y-4">
              {resume.experience.map((exp) => {
                const stillHere = !!exp.isCurrent || !exp.endDate;
                return (
                  <div key={exp.id} className="p-3 rounded-md bg-indigo-50">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="text-sm font-semibold">{exp.jobTitle}</div>
                        <div className="text-xs text-indigo-700 font-medium">{exp.company}</div>
                        {exp.location && <div className="text-xs italic text-gray-600">{exp.location}</div>}
                      </div>
                      <div className="text-xs text-gray-600 whitespace-nowrap">
                        {exp.startDate} — {stillHere ? "Present" : exp.endDate}
                      </div>
                    </div>

                    {/* details respecting isExpanded */}
                    <div className="mt-2 text-sm text-gray-700">
                      {exp.details && (exp.isExpanded ? exp.details : truncate(exp.details, 160))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Projects</h2>
            <div className="mt-3 space-y-3">
              {resume.projects.map((p) => (
                <div key={p.id} className="p-3 rounded-md bg-pink-50">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{p.title}</div>
                    {p.date && <div className="text-xs text-gray-600">{p.date}</div>}
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{p.description}</p>
                  {p.technologies && p.technologies.length > 0 && (
                    <div className="text-xs text-gray-500 mt-2">Tech: {p.technologies.join(", ")}</div>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-indigo-600 underline mt-1 inline-block"
                    >
                      {p.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {resume.education && resume.education.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Education</h2>
            <div className="mt-3 space-y-3">
              {resume.education.map((edu) => (
                <div key={edu.id} className="p-3 rounded-md bg-yellow-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{edu.degree}</div>
                      <div className="text-xs text-indigo-700">{edu.school}</div>
                    </div>
                    <div className="text-xs text-gray-600">{edu.startDate} — {edu.endDate}</div>
                  </div>
                  {edu.location && <div className="text-xs italic text-gray-600 mt-1">{edu.location}</div>}
                  {edu.details && <div className="text-sm mt-2 text-gray-700">{edu.details}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {resume.certifications && resume.certifications.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Certifications</h2>
            <ul className="mt-3 space-y-2">
              {resume.certifications.map((c) => (
                <li key={c.id} className="text-sm">
                  <span className="font-medium">{c.name}</span> — {c.issuer} <span className="text-gray-600">({c.dateEarned})</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Mentorship / Volunteer */}
        {resume.mentorship && resume.mentorship.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Mentorship & Volunteer</h2>
            <div className="mt-3 space-y-2">
              {resume.mentorship.map((m) => (
                <div key={m.id} className="text-sm">
                  <div className="font-semibold">{m.title} <span className="text-gray-600">({m.date})</span></div>
                  <div className="text-gray-700">{m.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {resume.languages && resume.languages.length > 0 && (
          <section>
            <h2 className="text-indigo-600 font-semibold border-b pb-1 inline-block">Languages</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {resume.languages.map((l) => (
                <div key={l.id} className="text-sm rounded-md px-3 py-1 bg-indigo-50 text-indigo-800">
                  {l.name} — <span className="text-gray-600">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Colorful1;
