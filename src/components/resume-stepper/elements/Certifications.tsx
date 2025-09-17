import { div } from "framer-motion/client";
import React, { useState } from "react";
import { FaTimes as X, FaAward as Award } from "react-icons/fa";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateEarned: string;
}

interface Props {
  certifications: Certification[];
  setCertifications: (certs: Certification[]) => void;
}

const Certifications: React.FC<Props> = ({
  certifications,
  setCertifications,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    issuer: "",
    dateEarned: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addCertification = () => {
    if (!formData.name || !formData.issuer || !formData.dateEarned) return;

    const newCert: Certification = {
      id: Date.now().toString(),
      name: formData.name,
      issuer: formData.issuer,
      dateEarned: formData.dateEarned,
    };

    setCertifications([...certifications, newCert]);

    // reset form
    setFormData({ name: "", issuer: "", dateEarned: "" });
  };

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  return (
    <div className="min-h-screen md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Side - Form */}
        <div className=" p-4 md:p-8 bg-[#192b21] col-span-2 rounded-2xl shadow-r-2xl">
          <div className="mb-12">
            <p className="text-gray-300 text-2xl md:text-4xl mb-8">
              Showcase your qualifications and expertise.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-white mb-4">
                Certification Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Certified Cloud Practitioner"
                className="w-full px-5 py-4 bg-green-800/30 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-4">
                Issuer
              </label>
              <input
                type="text"
                name="issuer"
                value={formData.issuer}
                onChange={handleInputChange}
                placeholder="e.g., Coursera, AWS"
                className="w-full px-5 py-4 bg-green-800/30 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-4">
                Date Earned
              </label>
              <input
                type="text"
                name="dateEarned"
                value={formData.dateEarned}
                onChange={handleInputChange}
                placeholder="MM/YYYY"
                className="w-full px-5 py-4 bg-green-800/30 border border-green-700/50 text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={addCertification}
                disabled={
                  !formData.name || !formData.issuer || !formData.dateEarned
                }
                className="bg-green-600 hover:bg-green-500 disabled:bg-green-800/50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Add Certification
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Certifications Grid */}
        <div className="p-5 bg-[#192b21] h-[350px] overflow-y-auto rounded-2xl shadow-r-2xl">
          {certifications.length === 0 && (
            <div className="flex items-center justify-center h-[300px]">
              <h1 className="text-white">No Certifications</h1>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {(certifications || []).map((cert) => (
              <div key={cert.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center hover:bg-white/15 transition-all duration-200">
                  <button
                    onClick={() => removeCertification(cert.id)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-green-400 hover:text-green-600 transition-all duration-200"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Award className="text-blue-400" size={30} />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  <h3 className="text-white text-sm font-medium text-base mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.dateEarned}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
