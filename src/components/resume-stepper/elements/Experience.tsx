import {
  FaChevronUp as ChevronUp,
  FaChevronDown as ChevronDown,
  FaPlus as Plus,
  FaCalendarAlt as Calendar,
  FaBriefcase as Briefcase,
  FaTrash as Trash,
} from "react-icons/fa";
import type { WorkExperience } from "../../../types/templates";

interface Props {
  experiences: WorkExperience[];
  setExperiences: (experiences: WorkExperience[]) => void;
}

export default function ExperienceForm({ experiences, setExperiences }: Props) {
  const suggestions = [
    "Developed and maintained web applications using React and Node.js.",
    "Collaborated with cross-functional teams to deliver high-quality software.",
    "Improved application performance by 20% through code optimization.",
  ];

  const updateExperience = (
    id: string,
    field: keyof WorkExperience,
    value: any
  ) => {
    const updated = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
  };

  const toggleExpanded = (id: string) => {
    const updated = experiences.map((exp) =>
      exp.id === id ? { ...exp, isExpanded: !exp.isExpanded } : exp
    );
    setExperiences(updated);
  };

  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      details: "",
      isExpanded: true,
      isCurrent: false,
    };
    setExperiences([...experiences, newExperience]);
  };

  const addSuggestionToDetails = (experienceId: string, suggestion: string) => {
    const experience = experiences.find((exp) => exp.id === experienceId);
    if (experience) {
      const currentDetails = experience.details;
      const newDetails = currentDetails
        ? `${currentDetails}\n• ${suggestion}`
        : `• ${suggestion}`;
      updateExperience(experienceId, "details", newDetails);
    }
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div className="md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Section - Work Experience Form */}
          <div className="flex-1 max-w-4xl">
            <div className="mb-8">
              <h1 className=" text-2xl md:text-4xl font-bold text-white mb-4">
                Add your work experience
              </h1>
              <p className="text-gray-400 text-sm md:text-lg">
                Start with your most recent job. You can add more later.
              </p>
            </div>

            {/* Experience Items */}
            <div className="space-y-4 mb-8">
              {(experiences || []).map((experience) => (
                <div
                  key={experience.id}
                  className="bg-[#1c3a2a] border border-green-700 rounded-2xl overflow-hidden"
                >
                  {/* Header - Always Visible */}
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-750 transition-colors"
                    onClick={() => toggleExpanded(experience.id)}
                  >
                    <div className="flex items-center gap-4">
                      <button onClick={() => removeExperience(experience.id)}>
                        <Trash
                          size={16}
                          className="text-green-700 cursor-pointer hover:text-green-800 transition-colors ml-2"
                        />
                      </button>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <Briefcase size={20} className="text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {experience.jobTitle || "Job Title"}
                        </h3>
                        <p className="text-gray-400">
                          {experience.company || "Company Name"}
                        </p>
                      </div>
                    </div>

                    <button className="text-gray-400 hover:text-white transition-colors">
                      {experience.isExpanded ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {experience.isExpanded && (
                    <div className="px-6 pb-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={experience.jobTitle}
                            onChange={(e) =>
                              updateExperience(
                                experience.id,
                                "jobTitle",
                                e.target.value
                              )
                            }
                            className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors"
                            placeholder="Software Engineer"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={experience.company}
                            onChange={(e) =>
                              updateExperience(
                                experience.id,
                                "company",
                                e.target.value
                              )
                            }
                            className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors"
                            placeholder="Tech Innovations Inc."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={experience.location}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "location",
                              e.target.value
                            )
                          }
                          className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors"
                          placeholder="e.g. San Francisco, CA"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Start Date
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={experience.startDate}
                              onChange={(e) =>
                                updateExperience(
                                  experience.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-gray-500 transition-colors"
                              placeholder="YYYY-MM"
                            />
                            <Calendar
                              size={20}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            End Date
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={experience.endDate}
                              onChange={(e) =>
                                updateExperience(
                                  experience.id,
                                  "endDate",
                                  e.target.value
                                )
                              }
                              className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-gray-500 transition-colors"
                              placeholder="YYYY-MM"
                            />
                            <Calendar
                              size={20}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Details
                        </label>
                        <textarea
                          value={experience.details}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "details",
                              e.target.value
                            )
                          }
                          className="w-full h-32 bg-green-800/30 border border-green-700/50 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:border-gray-500 transition-colors"
                          placeholder="Describe your responsibilities and achievements"
                        />
                      </div>

                      <div>
                        <h4 className="text-gray-300 text-sm font-medium mb-3">
                          Suggestions:
                        </h4>
                        <div className="space-y-2">
                          {suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                addSuggestionToDetails(
                                  experience.id,
                                  suggestion
                                )
                              }
                              className="flex items-start gap-3 w-full text-left p-3 bg-gray-750 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors group"
                            >
                              <div className="w-5 h-5 rounded-full border-2 border-gray-500 flex-shrink-0 mt-0.5 group-hover:border-green-400 transition-colors">
                                <Plus
                                  size={12}
                                  className="text-gray-500 group-hover:text-green-400 transition-colors"
                                />
                              </div>
                              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                {suggestion}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={addExperience}
              className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full font-medium hover:bg-green-500 hover:text-white transition-all"
            >
              <Plus size={20} />
              Add Experience
            </button>
          </div>

          {/* Right Section - Timeline Preview */}
          <div className="xl:w-80 md:p-6">
            <div className="mb-6">
              <h2 className=" text-xl md:text-2xl font-bold text-white">
                Timeline Preview
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        experience.isCurrent ? "bg-green-500" : "bg-gray-600"
                      }`}
                    />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-700 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h3 className="text-white font-semibold">
                      {experience.company || "Company Name"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {experience.isCurrent
                        ? "Current"
                        : experience.startDate && experience.endDate
                        ? `${experience.startDate} - ${experience.endDate}`
                        : "Date Range"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
