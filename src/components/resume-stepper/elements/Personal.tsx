import React from "react";
import {
  FaUser as User,
  FaEnvelope as Mail,
  FaPhone as Phone,
  FaGlobe as Globe,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaMapMarkerAlt as MapPin,
  FaBriefcase as Briefcase,
  FaCamera as Camera,
} from "react-icons/fa";
import type { PersonalInfo } from "../../../types/templates";

interface Props {
  personalData: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export default function PersonalInformationForm({ personalData, onChange }: Props) {
  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...personalData, [field]: value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange({ ...personalData, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
          Personal Information
        </h1>
        <p className="text-green-200 text-sm md:text-xl">
          This information will be displayed at the top of your resume.
        </p>
      </div>
      
      <div className="mx-auto text-white bg-[#1c2e24] p-6 md:p-10 rounded-2xl shadow-xl">
        <div className="flex flex-col xl:flex-row gap-8 py-10">
          {/* Form Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={personalData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* Title */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Briefcase size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Title (e.g. Frontend Developer)"
                  value={personalData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={personalData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={personalData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* Website */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Globe size={20} />
                </div>
                <input
                  type="url"
                  placeholder="Website"
                  value={personalData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* GitHub */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Github size={20} />
                </div>
                <input
                  type="url"
                  placeholder="GitHub Profile"
                  value={personalData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* LinkedIn */}
              <div className="relative md:col-span-2">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <Linkedin size={20} />
                </div>
                <input
                  type="url"
                  placeholder="LinkedIn Profile"
                  value={personalData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>

              {/* Location */}
              <div className="relative md:col-span-2">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Location (e.g. City, Country)"
                  value={personalData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="w-full bg-green-800/30 border border-green-700/50 rounded-lg px-12 py-4 text-white placeholder-green-300 focus:outline-none focus:border-green-400 focus:bg-green-800/40 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="xl:w-80 flex justify-center xl:justify-start">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <label htmlFor="profile-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors">
                      <Camera size={24} className="text-gray-200" />
                    </div>
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white/20">
                  {personalData.image ? (
                    <img
                      src={personalData.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                <div className="text-center px-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {personalData.fullName || "Alex Doe"}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {personalData.title || "Senior Product Designer"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
