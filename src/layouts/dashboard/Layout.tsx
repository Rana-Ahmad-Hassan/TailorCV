import { useState } from "react";
import Sidebar from "../../components/layout/dashboard/SideBar";
import Navbar from "../../components/layout/dashboard/Navbar";
import ResumePreview from "../../components/resume-stepper/preview/Preview";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f2017] px-7">
      {/* Navbar on top */}
      <Navbar />

      {/* Sidebar + Main below */}
      <div className="flex flex-1 mt-5 transition-all duration-300">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 mr-5 ${
            sidebarOpen
              ? "w-[260px] md:w-[280px] lg:w-[300px]" // fixed widths
              : "w-[70px]"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 transition-all duration-300">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
