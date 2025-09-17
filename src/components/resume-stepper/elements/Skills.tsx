import React, { useState, useRef } from "react";
import { FaTimes as X } from "react-icons/fa";
import type { Skill } from "../../../types/templates";

interface Props {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

export default function SkillsForm({ skills, setSkills }: Props) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedSkills = [
    "JavaScript",
    "React",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
    "Agile",
    "Scrum",
    "Project Management",
    "Communication",
    "Problem Solving",
    "Teamwork",
    "TypeScript",
    "Vue.js",
    "Angular",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Data Analysis",
    "UI/UX Design",
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
  ];

  const handleAddSkill = (skillName: string) => {
    const trimmedSkill = skillName.trim();
    if (
      trimmedSkill &&
      !skills.some(
        (skill) => skill.name.toLowerCase() === trimmedSkill.toLowerCase()
      )
    ) {
      const newSkill: Skill = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: trimmedSkill,
      };
      setSkills([...skills, newSkill]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddSkill(inputValue);
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleSuggestedSkillClick = (skillName: string) => {
    handleAddSkill(skillName);
  };

  return (
    <div className="min-h-screen md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            What skills are you proud of?
          </h1>
          <p className="text-gray-400 text-sm md:text-xl">
            Add your top skills to show recruiters what you can do. Drag to
            reorder.
          </p>
        </div>

        <div className="mb-12 ">
          <div className="bg-[#1c3a2a] border border-green-700 rounded-2xl p-6 min-h-[90px] flex flex-wrap items-start gap-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`inline-flex items-center gap-2 bg-green-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium cursor-move transition-all hover:bg-green-400 select-none `}
              >
                <span>{skill.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveSkill(skill.id);
                  }}
                  className="text-gray-700 hover:text-gray-900 transition-colors flex-shrink-0"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <div className="flex-1 min-w-[200px]">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a skill and press Enter"
                className="w-full bg-transparent text-white placeholder-gray-500 text-base outline-none border-none py-2"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Suggested Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {suggestedSkills
              .filter(
                (skill) =>
                  !skills.some(
                    (selected) =>
                      selected.name.toLowerCase() === skill.toLowerCase()
                  )
              )
              .map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedSkillClick(skill)}
                  className="px-4 py-3 border border-green-800 text-green-500 rounded-full text-sm font-medium hover:bg-green-950 hover:border-gray-500 transition-all"
                >
                  {skill}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
