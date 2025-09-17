import React from "react";
import {
  FaPlus as Plus,
  FaGraduationCap as GraduationCap,
  FaEdit as Edit2,
  FaTrash as Trash2,
} from "react-icons/fa";

interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
}

type Props = {
  educationList: Education[];
  setEducationList: (education: Education[]) => void;
};

export default function EducationComponent({
  educationList,
  setEducationList,
}: Props) {
  const [currentEducation, setCurrentEducation] = React.useState<
    Omit<Education, "id">
  >({
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
    details: "",
  });

  const handleInputChange = (
    field: keyof Omit<Education, "id">,
    value: string
  ) => {
    setCurrentEducation((prev) => ({ ...prev, [field]: value }));
  };

  const addEducation = () => {
    if (currentEducation.degree.trim() && currentEducation.school.trim()) {
      const newEducation: Education = {
        id: Date.now().toString(),
        ...currentEducation,
      };
      setEducationList([newEducation, ...educationList]);

      // Reset form
      setCurrentEducation({
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        details: "",
      });
    }
  };

  const deleteEducation = (id: string) => {
    setEducationList(educationList.filter((edu) => edu.id !== id));
  };

  const editEducation = (id: string) => {
    const education = educationList.find((edu) => edu.id === id);
    if (education) {
      setCurrentEducation({
        degree: education.degree,
        school: education.school,
        location: education.location,
        startDate: education.startDate,
        endDate: education.endDate,
        details: education.details,
      });
      deleteEducation(id);
    }
  };

  return (
    <div className="min-h-screen md:p-6">
      <div className="mb-8 flex flex-col items-center justify-center ">
        <h1 className=" text-2xl md:text-4xl font-bold text-white mb-4">
          Add your education
        </h1>
        <p className="text-gray-400 text-sm md:text-lg">
          List your degrees and academic achievements.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Form */}
        <div className="bg-[#1c3a2a] rounded-2xl p-8 mb-8">
          {/* Degree + School */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Degree
              </label>
              <input
                type="text"
                value={currentEducation.degree}
                onChange={(e) => handleInputChange("degree", e.target.value)}
                placeholder="e.g., Bachelor of Science"
                className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                School
              </label>
              <input
                type="text"
                value={currentEducation.school}
                onChange={(e) => handleInputChange("school", e.target.value)}
                placeholder="e.g., University of Technology"
                className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white"
              />
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-3">
              Location
            </label>
            <input
              type="text"
              value={currentEducation.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="e.g., San Francisco, CA"
              className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white"
            />
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Start Date
              </label>
              <input
                type="text"
                value={currentEducation.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                placeholder="e.g., 09/2018"
                className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                End Date
              </label>
              <input
                type="text"
                value={currentEducation.endDate}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
                placeholder="e.g., 05/2022"
                className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white"
              />
            </div>
          </div>

          {/* Details */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-3">
              Details
            </label>
            <textarea
              value={currentEducation.details}
              onChange={(e) => handleInputChange("details", e.target.value)}
              placeholder="e.g., Major in Computer Engineering"
              rows={4}
              className="w-full bg-green-800/30 border border-green-700/50 rounded-xl px-4 py-4 text-white resize-none"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
          >
            <Plus size={20} /> Add Education
          </button>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {educationList.map((education) => (
            <div key={education.id} className="bg-[#1c3a2a] rounded-2xl p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-gray-300 mb-1">
                      {education.school} | {education.location}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {education.startDate} - {education.endDate}
                    </p>
                    {education.details && (
                      <p className="text-gray-300">{education.details}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => editEducation(education.id)}
                    className="p-2 text-green-700 hover:text-green-800 rounded-lg"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => deleteEducation(education.id)}
                    className="p-2 text-green-700 hover:text-green-800 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
