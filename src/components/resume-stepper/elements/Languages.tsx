import React, { useState } from "react";
import { FaTimes as X, FaChevronDown as ChevronDown, FaGlobe as Globe } from "react-icons/fa";

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

interface LanguagesFormProps {
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
}

const LanguagesForm: React.FC<LanguagesFormProps> = ({ languages, setLanguages }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [newLanguage, setNewLanguage] = useState("");
  const [selectedProficiency, setSelectedProficiency] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const proficiencyLevels = ["Native", "Fluent", "Intermediate", "Beginner"];

  const removeSelectedLanguage = (languageToRemove: string) => {
    setSelectedLanguages(prev => prev.filter(lang => lang !== languageToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newLanguage.trim()) {
      e.preventDefault();
      if (!selectedLanguages.includes(newLanguage.trim())) {
        setSelectedLanguages(prev => [...prev, newLanguage.trim()]);
      }
      setNewLanguage("");
    }
  };

  const addLanguage = () => {
    if (selectedLanguages.length > 0 && selectedProficiency) {
      const lastLanguage = selectedLanguages[selectedLanguages.length - 1];

      // Avoid duplicates in parent state
      const exists = languages.find(lang => lang.name === lastLanguage);
      if (!exists) {
        const newLangEntry: Language = {
          id: Date.now().toString(),
          name: lastLanguage,
          proficiency: selectedProficiency,
        };
        setLanguages([...languages, newLangEntry]);
      }

      // Reset form
      setSelectedLanguages([]);
      setSelectedProficiency("");
      setNewLanguage("");
    }
  };

  const removeLanguage = (languageId: string) => {
    setLanguages(languages.filter(lang => lang.id !== languageId));
  };

  return (
    <div className="min-h-screen  md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className=" p-4 md:p-8 bg-[#192b21] col-span-2 rounded-2xl shadow-r-2xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Add Languages</h1>
          </div>

          <div className="space-y-8">
            {/* Language Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-4">Language</label>
              <div className="relative">
                <div className="flex flex-wrap gap-2 bg-green-800/50 border border-green-700/50 rounded-lg p-3 min-h-[60px] items-center">
                  {selectedLanguages.map(lang => (
                    <span key={lang} className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700/60 text-white rounded-md text-sm">
                      {lang}
                      <button onClick={() => removeSelectedLanguage(lang)} className="hover:text-red-300 transition-colors">
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={newLanguage}
                    onChange={e => setNewLanguage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={selectedLanguages.length === 0 ? "Add a language..." : ""}
                    className="flex-1 text-white placeholder:text-gray-400 outline-none min-w-[200px] py-2"
                  />
                </div>
              </div>
            </div>

            {/* Proficiency Dropdown */}
            <div>
              <label className="block text-sm font-medium text-white mb-4">Proficiency</label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-4 bg-green-900 border border-green-700/50 text-white text-left rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all flex items-center justify-between"
                >
                  <span className={selectedProficiency ? "text-white" : "text-gray-400"}>
                    {selectedProficiency || "Select proficiency"}
                  </span>
                  <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-green-800 border border-green-700 rounded-lg shadow-lg">
                    {proficiencyLevels.map(level => (
                      <button
                        key={level}
                        onClick={() => { setSelectedProficiency(level); setIsDropdownOpen(false); }}
                        className="w-full px-4 py-3 text-white text-left hover:bg-green-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add Language Button */}
            <button
              onClick={addLanguage}
              disabled={selectedLanguages.length === 0 || !selectedProficiency}
              className="bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Add Language
            </button>
          </div>
        </div>

        {/* Languages List */}
        <div className=" p-4 md:p-8 bg-[#192b21] rounded-2xl h-[250px] overflow-y-auto shadow-r-2xl">
          <div className="mb-8 flex items-center gap-3">
            <Globe className="text-green-400" size={24} />
            <h2 className="text-xl md:text-2xl font-bold text-green-400">Languages</h2>
          </div>

          <div className="space-y-6">
            {!languages.length && <p className="text-gray-400">No languages added yet.</p>}
            {languages.map(lang => (
              <div key={lang.id} className="group flex items-center justify-between py-2">
                <div className="flex-1 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{lang.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">{lang.proficiency}</span>
                    <button
                      onClick={() => removeLanguage(lang.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesForm;
