import { h1 } from "framer-motion/client";
import React, { useState } from "react";
import {
  FaTimes as X,
  FaLink as Link,
  FaCalendarAlt as Calendar,
} from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  date?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  setProjects,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    date: "",
  });

  const [technologies, setTechnologies] = useState<string[]>([]);
  const [newTechnology, setNewTechnology] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTechnology = () => {
    if (newTechnology.trim() && !technologies.includes(newTechnology.trim())) {
      setTechnologies((prev) => [...prev, newTechnology.trim()]);
      setNewTechnology("");
    }
  };

  const removeTechnology = (tech: string) => {
    setTechnologies((prev) => prev.filter((t) => t !== tech));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  const handleAddProject = () => {
    if (!formData.title || !formData.description) return;

    const newProject: Project = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      technologies,
      link: formData.link,
      date: formData.date,
    };

    setProjects([...projects, newProject]);

    // reset form
    setFormData({ title: "", description: "", link: "", date: "" });
    setTechnologies([]);
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="md:p-6 shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <div className="rounded-lg md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Showcase Your Projects
            </h1>
            <p className="text-gray-200">
              Highlight your most impressive projects to demonstrate your skills
              and experience.
            </p>
          </div>

          <div className="space-y-6">
            {/* Project Title */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., E-commerce Platform"
                className="w-full px-4 py-3 bg-green-800/30 border border-green-700/50 
                           focus:ring-2 focus:ring-green-500 focus:border-transparent 
                           outline-none transition-all text-white placeholder:text-white rounded-lg"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your role, responsibilities, and the impact of the project."
                rows={4}
                className="w-full bg-green-800/30 border border-green-700/50 px-4 
                           focus:ring-2 focus:ring-green-500 focus:border-transparent 
                           outline-none transition-all py-3 text-white placeholder:text-white rounded-lg"
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Technologies
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-800 text-white rounded-full text-sm"
                  >
                    {tech}
                    <button
                      onClick={() => removeTechnology(tech)}
                      className="hover:text-green-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                onKeyPress={handleKeyPress}
                onBlur={addTechnology}
                placeholder="Add a technology..."
                className="w-full bg-green-800/30 border border-green-700/50 px-4 
                           focus:ring-2 focus:ring-green-500 focus:border-transparent 
                           outline-none transition-all py-3 placeholder:text-white text-white rounded-lg"
              />
            </div>

            {/* Link and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Link (GitHub/Website)
                </label>
                <div className="relative">
                  <Link
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="e.g., github.com/your-repo"
                    className="w-full bg-green-800/30 border border-green-700/50 
                               focus:ring-2 focus:ring-green-500 focus:border-transparent 
                               outline-none transition-all text-white pl-10 pr-4 py-3 
                               placeholder:text-white rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                    size={18}
                  />
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="YYYY-MM"
                    className="w-full bg-green-800/30 border border-green-700/50 
                               focus:ring-2 focus:ring-green-500 focus:border-transparent 
                               outline-none transition-all text-white pl-10 pr-4 py-3 
                               placeholder:text-white rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Add Project Button */}
            <button
              onClick={handleAddProject}
              className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span className="text-lg">+</span>
              Add Project
            </button>
          </div>
        </div>

        {/* Right Side - Project List */}
        <div className="rounded-lg md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Your Projects</h2>
          {projects.length === 0 && (
            <h1 className="text-white">No Projects..........</h1>
          )}

          <div className="space-y-6">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => handleRemoveProject(project.id)}
                    className="text-green-400 hover:text-green-600 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="text-sm text-gray-400 mb-3">
                  {project.technologies.join(", ")}
                </div>

                <p className="text-white text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
