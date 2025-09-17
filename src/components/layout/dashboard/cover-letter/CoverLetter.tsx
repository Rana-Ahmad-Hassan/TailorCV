import { useState } from "react";

export default function CoverLetterGenerator() {
  const [selectedResume, setSelectedResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-400 mb-4">
            <span>Cover Letters</span>
            <span className="mx-2">/</span>
            <span>New Cover Letter</span>
          </div>
          <h1 className="text-4xl font-bold mb-8">Generate a Cover Letter</h1>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="text-white mb-4">Step 1 of 3</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-8">
          {/* Select Resume */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select a Resume</h2>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-4 text-left text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <div className="flex justify-between items-center">
                  <span className={selectedResume ? "text-white" : "text-gray-400"}>
                    {selectedResume || "Select a resume..."}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setSelectedResume("Resume 1");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                    >
                      Resume 1
                    </button>
                    <button
                      onClick={() => {
                        setSelectedResume("Resume 2");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                    >
                      Resume 2
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Paste a Job Description</h2>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description here"
              className="w-full h-40 bg-gray-800 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            Generate Cover Letter
          </button>
        </div>
      </div>
    </div>
  );
}