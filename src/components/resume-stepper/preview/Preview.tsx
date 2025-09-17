import { useState } from "react";
import {
  FaUser as User,
  FaBriefcase as Briefcase,
  FaGraduationCap as GraduationCap,
  FaLightbulb as Lightbulb,
  FaCode as Code,
  FaDownload as Download,
  FaPalette as Palette,
  FaEdit as Edit,
} from "react-icons/fa";
import Professional1 from "../../../templates/professional/Professional1";
import type { resumeDataType } from "../../../types/templates";
import { templates as TemplatesType } from "../../../constants/templates";
import Loader from "../../loaders/Spinner";

interface Props {
  resumeData: resumeDataType;
  saveResume: (templateKey: string) => void;
  loading: boolean;
}

const templates = {
  professionals: [],
};

const ResumePreview: React.FC<Props> = ({
  resumeData,
  saveResume,
  loading,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState(
    TemplatesType.professional[0]
  );
  const [showTemplatePicker, setShowTemplatePicker] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof TemplatesType>("professional");

  const TemplateComponent = selectedTemplate.component;
  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 border-r border-gray-700 xl:col-span-3">
            <div className=" text-white rounded-lg">
              <h1 className="text-2xl lg:text-2xl font-bold mb-8 lg:mb-12">
                Your Resume is Ready
              </h1>

              <nav className="space-y-6 lg:space-y-8">
                <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
                  <User size={20} />
                  <span className="text-base lg:text-lg">
                    Contact Information
                  </span>
                </div>

                <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
                  <Briefcase size={20} />
                  <span className="text-base lg:text-lg">Work Experience</span>
                </div>

                <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
                  <GraduationCap size={20} />
                  <span className="text-base lg:text-lg">Education</span>
                </div>

                <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
                  <Lightbulb size={20} />
                  <span className="text-base lg:text-lg">Skills</span>
                </div>

                <div className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-pointer">
                  <Code size={20} />
                  <span className="lg:text-lg">Projects</span>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="mb-4 flex flex-wrap justify-between items-center">
              <span className="text-white text-sm lg:text-base">
                Live Preview
              </span>

              <div className="flex  gap-4">
                <button className="flex items-center justify-center gap-3 border border-white cursor-pointer text-white px-4  rounded-lg hover:bg-green-950 transition-colors">
                  <Download size={10} />
                  <span className="text-xs">Download PDF</span>
                </button>

                <button
                  className="flex items-center justify-center gap-3 border border-white cursor-pointer text-white px-4  rounded-lg hover:bg-green-950 transition-colors"
                  onClick={() => setShowTemplatePicker(true)}
                >
                  <Palette size={10} />
                  <span className="text-xs">Change Template</span>
                </button>

                <button
                  onClick={() => saveResume(String(selectedTemplate.id))}
                  className="flex items-center py-2 justify-center gap-3 border border-white cursor-pointer text-white px-4  rounded-lg hover:bg-green-950 transition-colors"
                >
                  <Edit size={10} />
                  <span className="text-xs">
                    {loading ? <Loader /> : "Save the Resume"}
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-[#E6C6AE] p-4 lg:p-8 rounded-lg">
              {/* Resume Preview */}
              <div>
                {TemplateComponent && <TemplateComponent data={resumeData} />}
              </div>
            </div>

            {/* Bottom Action Buttons */}
          </div>
          {showTemplatePicker && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#111C11] shadow-2xl rounded-lg w-[90%] max-w-6xl h-[80%] flex overflow-hidden">
                {/* Sidebar Categories */}
                <div className="w-1/4 border-r bg-green-950 p-4 space-y-4 overflow-y-auto">
                  {Object.keys(TemplatesType).map((category) => (
                    <div
                      key={category}
                      onClick={() =>
                        setActiveCategory(
                          category as keyof typeof TemplatesType
                        )
                      }
                      className={`cursor-pointer px-3 py-2 rounded-md font-medium capitalize
              ${
                activeCategory === category
                  ? "bg-green-900 text-white"
                  : "hover:bg-green-900 text-white"
              }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>

                {/* Templates Grid */}
                <div className="w-3/4 p-6 overflow-y-auto">
                  <h2 className="text-lg text-white font-bold mb-4 capitalize">
                    {activeCategory} Templates
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {TemplatesType[activeCategory]?.map((tpl) => (
                      <div
                        key={tpl.id}
                        className="cursor-pointer p-5 bg-[#ECCCB6] border rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition"
                        onClick={() => {
                          setSelectedTemplate(tpl);
                          setShowTemplatePicker(false);
                        }}
                      >
                        <img
                          src={tpl.img}
                          alt={tpl.name}
                          className="w-full h-52 object-center"
                        />
                        <div className="p-2 bg-green-900 text-xs rounded-b-lg  text-center text-white">
                          {tpl.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
