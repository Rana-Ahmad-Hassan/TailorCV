import React from "react";

interface Props {
  summary : string;
  setSummary: (summary: string) => void;
}

export default function ProfessionalSummary({ summary, setSummary }: Props) {
  const maxLength = 500;

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setSummary(value);
    }
  };

  const exampleSummary = `Highly motivated and results-oriented professional with 5+ years of experience in project management and team leadership. Proven ability to deliver projects on time and within budget, while maintaining high standards of quality. Seeking a challenging role where I can leverage my skills and experience to contribute to the success of a dynamic organization.`;

  return (
    <div className="min-h-screen  md:p-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Section - Professional Summary Form */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8">
              <h1 className="md:text-4xl text-2xl font-bold text-white mb-4">
                Professional Summary
              </h1>
              <p className="text-gray-400 text-sm md:text-lg">
                Write a short summary about your skills, experience, and career
                goals.
              </p>
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                value={summary}
                onChange={handleSummaryChange}
                placeholder="Write a short summary about your skills, experience, and career goals..."
                className="w-full bg-green-800/30 border border-green-700/50 h-64 bg-[#1c3a2a]  rounded-2xl p-6 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-gray-500 transition-colors text-base leading-relaxed"
              />

              {/* Character Counter */}
              <div className="absolute bottom-4 right-6 text-gray-400 text-sm">
                {summary.length} / {maxLength}
              </div>
            </div>
          </div>

          {/* Right Section - Resume Preview */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8">
              <h2 className=" text-2xl md:text-4xl font-bold text-white">Resume Preview</h2>
            </div>

            {/* Preview Card */}
            <div className="bg-[#1c3a2a]   rounded-2xl p-8">
              <div className="text-gray-300 bg-[#192b21] mt-5 p-5 rounded-sm border border-[#192b21] leading-relaxed text-base">
                <h3 className="text-xl font-semibold text-green-400 mb-6">
                  Professional Summary
                </h3>
                {summary || exampleSummary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
