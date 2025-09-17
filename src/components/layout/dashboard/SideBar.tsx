import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiMail,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const Links = [
    { to: "/", label: "Resumes", icon: <FiFileText /> },
    { to: "/templates", label: "Templates", icon: <FiFileText /> },
    { to: "/cover-letter", label: "Cover Letters", icon: <FiMail /> },
    { to: "/ats-checker", label: "ATS Checker", icon: <FiBarChart2 /> },
    { to: "/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 300 : 70 }}
      className="bg-[#0f2017] fixed text-white  h-screen flex flex-col transition-all"
    >
      {/* Links */}
      <nav className="flex flex-col gap-2 mt-4">
        {Links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 text-sm p-3 rounded-full transition ${
                isActive ? "bg-[#1c2e24]" : "hover:bg-[#1c2e24]"
              }`
            }
          >
            {link.icon} {isOpen && link.label}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
