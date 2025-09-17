import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SkillsForm from "./elements/Skills";
import ExperienceForm from "./elements/Experience";
import EducationForm from "./elements/Education";
import ProjectsForm from "./elements/Projects";
import CertificationsForm from "./elements/Certifications";
import MentorshipForm from "./elements/Voluntering";
import LanguagesForm from "./elements/Languages";
import ProfessionalSummary from "./elements/Summary";
import PersonalInformationForm from "./elements/Personal";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { resumeDataType } from "../../types/templates";
import ResumePreview from "./preview/Preview";
import { steps } from "../../constants/Stepper-Steps";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface ResumeStepperProps {
  data?: resumeDataType; // make it optional for "new" resumes
}

export default function ResumeStepper({ data }: ResumeStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState<resumeDataType>({
    personal: {
      fullName: data?.personal?.fullName || "",
      title: data?.personal?.title || "",
      email: data?.personal?.email || "",
      phone: data?.personal?.phone || "",
      website: data?.personal?.website || "",
      github: data?.personal?.github || "",
      linkedin: data?.personal?.linkedin || "",
      location: data?.personal?.location || "",
      image: data?.personal?.image || "",
    },
    summary: data?.summary || "",
    skills: data?.skills || [],
    experience: data?.experience || [],
    education: data?.education || [],
    projects: data?.projects || [],
    certifications: data?.certifications || [],
    mentorship: data?.mentorship || [],
    languages: data?.languages || [],
  });

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection("right");
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setDirection("left");
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  // Save Resume function
  const saveResume = async (templateKey: any) => {
    setLoading(true);
    try {
      const data: any = localStorage.getItem("user");
      const user = JSON.parse(data);
      const response = await fetch("http://localhost:3000/save/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?._id,
          title: resumeData.personal.title || "Untitled Resume",
          templateKey,
          data: resumeData,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Your resume is saved");
        navigate("/");
      } else {
        toast.error(`Error saving resume: ${result.error || result.message}`);
      }
    } catch (err: any) {
      console.error(err);
      alert("Failed to save resume. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Step Components Map
  const stepComponents: any = {
    personal: (
      <PersonalInformationForm
        personalData={resumeData.personal}
        onChange={(data: any) =>
          setResumeData((prev) => ({ ...prev, personal: data }))
        }
      />
    ),
    summary: (
      <ProfessionalSummary
        summary={resumeData.summary ?? ""}
        setSummary={(summary) =>
          setResumeData((prev) => ({ ...prev, summary }))
        }
      />
    ),
    skills: (
      <SkillsForm
        skills={resumeData.skills || []}
        setSkills={(skills) => setResumeData((prev) => ({ ...prev, skills }))}
      />
    ),
    experience: (
      <ExperienceForm
        experiences={resumeData?.experience || []}
        setExperiences={(experiences) =>
          setResumeData((prev) => ({ ...prev, experience: experiences }))
        }
      />
    ),
    education: (
      <EducationForm
        educationList={resumeData.education || []}
        setEducationList={(education) =>
          setResumeData((prev) => ({ ...prev, education }))
        }
      />
    ),
    projects: (
      <ProjectsForm
        projects={resumeData.projects || []}
        setProjects={(projects) =>
          setResumeData((prev) => ({ ...prev, projects }))
        }
      />
    ),
    certifications: (
      <CertificationsForm
        certifications={resumeData.certifications || []}
        setCertifications={(certifications) =>
          setResumeData((prev) => ({ ...prev, certifications }))
        }
      />
    ),
    mentorship: (
      <MentorshipForm
        entries={resumeData.mentorship || []}
        setEntries={(entries) =>
          setResumeData((prev) => ({ ...prev, mentorship: entries }))
        }
      />
    ),
    languages: (
      <LanguagesForm
        languages={resumeData.languages || []}
        setLanguages={(languages) =>
          setResumeData((prev) => ({ ...prev, languages }))
        }
      />
    ),
    review: (
      <ResumePreview
        resumeData={resumeData}
        saveResume={saveResume}
        loading={loading}
      />
    ),
  };

  return (
    <div className="w-full mx-auto p-2 md:p-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-400 h-2 rounded-full overflow-hidden">
        <div
          className="h-2 bg-green-800 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 text-right">
        {Math.round(progress)}% Completed
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-1">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Step Content with Animation */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={steps[currentStep].id}
            custom={direction}
            initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full"
          >
            {stepComponents[steps[currentStep].id]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
