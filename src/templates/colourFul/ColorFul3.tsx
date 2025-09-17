import React from "react";
import { defaultData } from "../../constants/Resume-Boilerplate";
import type { resumeDataType } from "../../types/templates";

const Colorful3: React.FC<{ data?: resumeDataType }> = ({ data }) => {
  const resume = data || defaultData;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Top row: name + contact strip */}
      <div className="bg-gradient-to-r from-pink-300 to-yellow-200 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold">{resume.personal.fullName}</h1>
        {resume.personal.title && <p className="text-sm text-gray-700">{resume.personal.title}</p>}
        <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          {resume.personal.email && <a href={`mailto:${resume.personal.email}`}>{resume.personal.email}</a>}
          {resume.personal.phone && <span>{resume.personal.phone}</span>}
          {resume.personal.location && <span>{resume.personal.location}</span>}
          {resume.personal.website && <a href={resume.personal.website} target="_blank" rel="noreferrer">Website</a>}
        </div>
      </div>

      {/* Blocks grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Profile block */}
        {resume.summary && (
          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-indigo-700">Profile</h3>
            <p className="text-sm text-gray-700 mt-2">{resume.summary}</p>
          </div>
        )}

        {/* Skills block */}
        {resume.skills && resume.skills.length > 0 && (
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-700">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {resume.skills.map((s) => (
                <span key={s.id} className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-800">{s.name}</span>
              ))}
            </div>
          </div>
        )}

        {/* Experience block (wide) */}
        {resume.experience && resume.experience.length > 0 && (
          <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700">Experience</h3>
            <div className="mt-2 space-y-3">
              {resume.experience.map((exp) => (
                <div key={exp.id} className="p-2 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{exp.jobTitle} <span className="text-sm text-gray-600">— {exp.company}</span></div>
                      {exp.location && <div className="text-xs italic text-gray-600">{exp.location}</div>}
                    </div>
                    <div className="text-xs text-gray-600">{exp.startDate} — {exp.isCurrent || !exp.endDate ? "Present" : exp.endDate}</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{exp.isExpanded ? exp.details : (exp.details ? exp.details.slice(0, 160) + (exp.details.length > 160 ? "…" : "") : "")}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education block */}
        {resume.education && resume.education.length > 0 && (
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-yellow-700">Education</h3>
            <div className="mt-2 space-y-2">
              {resume.education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-sm text-gray-700">{edu.school} {edu.location && `, ${edu.location}`}</div>
                  <div className="text-xs text-gray-600">{edu.startDate} — {edu.endDate}</div>
                  {edu.details && <div className="text-sm mt-1 text-gray-700">{edu.details}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects block */}
        {resume.projects && resume.projects.length > 0 && (
          <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-pink-700">Projects</h3>
            <div className="mt-2 space-y-2">
              {resume.projects.map((p) => (
                <div key={p.id}>
                  <div className="font-medium">{p.title} {p.date && <span className="text-xs text-gray-600">({p.date})</span>}</div>
                  <div className="text-sm text-gray-700">{p.description}</div>
                  {p.technologies && <div className="text-xs text-gray-600 mt-1">Tech: {p.technologies.join(", ")}</div>}
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-pink-700 underline text-sm">{p.link}</a>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications & Mentorship (split) */}
        <div className="bg-lime-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lime-700">Certifications</h3>
          <ul className="mt-2 text-sm space-y-1">
            {resume.certifications && resume.certifications.length > 0 ? (
              resume.certifications.map((c) => (
                <li key={c.id}><span className="font-medium">{c.name}</span> — {c.issuer} <span className="text-gray-600">({c.dateEarned})</span></li>
              ))
            ) : (
              <li className="text-gray-600">—</li>
            )}
          </ul>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-cyan-700">Mentorship</h3>
          <div className="mt-2 text-sm space-y-2">
            {resume.mentorship && resume.mentorship.length > 0 ? (
              resume.mentorship.map((m) => (
                <div key={m.id}>
                  <div className="font-medium">{m.title} <span className="text-gray-600">({m.date})</span></div>
                  <div className="text-gray-700">{m.description}</div>
                </div>
              ))
            ) : (
              <div className="text-gray-600">—</div>
            )}
          </div>
        </div>

        {/* Languages block (full-width) */}
        {resume.languages && resume.languages.length > 0 && (
          <div className="md:col-span-2 bg-violet-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-violet-700">Languages</h3>
            <div className="mt-2 text-sm">
              {resume.languages.map((l) => (
                <div key={l.id} className="inline-block mr-4">
                  <span className="font-medium">{l.name}</span> — <span className="text-gray-600">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colorful3;
