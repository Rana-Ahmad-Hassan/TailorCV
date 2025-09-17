import ResumeCard from "../../components/ui/ResumeCard";
import { Link } from "react-router-dom";
import { useResumeStore } from "../../store/resume-store";
import { useEffect } from "react";
import ResumeCardSkeleton from "../../components/loaders/resume-skeleton";
const Dashboard = () => {
  const { resumes, loading, fetchResumes } = useResumeStore();
  const data: any = localStorage.getItem("user");
  const user = JSON.parse(data);
  useEffect(() => {
    if (resumes.length === 0) {
      fetchResumes(user._id);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Welcome back, Ahmad
        </h2>
        <Link to={"/resume-builder"}>
          <button className="bg-green-800 text-sm text-white px-4 py-1 rounded-xl cursor-pointer hover:bg-green-800">
            Create New Resume
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {loading && <ResumeCardSkeleton />}
        {resumes?.resumes?.map((resume, i) => (
          <div>
            <ResumeCard key={resume._id} {...resume} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
