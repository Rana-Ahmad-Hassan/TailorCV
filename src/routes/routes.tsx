import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/main";
import DashboardLayout from "../layouts/dashboard/Layout";
import ResumeBuilder from "../pages/dashboard/Resume-Builder";
import CoverLetterPage from "../pages/dashboard/Cover-Letter";
import TemplatesPage from "../pages/dashboard/Templates";
import SignInPage from "../components/auth/Sign-In";
import SignUpPage from "../components/auth/Sign-Up";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />

        {/* Dashboard routes (protected) */}
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/cover-letter"
          element={
            <DashboardLayout>
              <CoverLetterPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/templates"
          element={
            <DashboardLayout>
              <TemplatesPage />
            </DashboardLayout>
          }
        />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
