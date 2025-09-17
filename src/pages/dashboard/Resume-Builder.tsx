import ResumeStepper from "../../components/resume-stepper/Stepper";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { resumeDataType } from "../../types/templates";

interface ResumeDataProps {
  data?: resumeDataType; // optional
}

const ResumeBuilder: React.FC<ResumeDataProps> = ({ data }) => {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2 mb-4 text-white">
        <button className="m-4 bg-green-800 text-sm text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-900">
          <FaArrowLeft className="inline mr-2" /> Back to Dashboard
        </button>
      </Link>
      <ResumeStepper data={data} />
    </div>
  );
};

export default ResumeBuilder;
