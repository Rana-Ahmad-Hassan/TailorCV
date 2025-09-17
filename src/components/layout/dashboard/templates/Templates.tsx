import { useState } from "react";
import { templates } from "../../../../constants/templates";
import { BsEye } from "react-icons/bs";

export default function TemplateGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("professional");

  // Filtered list based on selected category
  const filteredTemplates: any[] = templates[selectedCategory] || [];

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-white mb-6">
          Choose a Template
        </h2>

        <select
          id="resumeCategory"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="text-white bg-green-700  rounded text-sm focus:outline-none px-3 py-2"
        >
          <option value="professional">Professional</option>
          <option value="colorful">Colorful</option>
          <option value="withImage">With Image</option>
          <option value="modern">Modern</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>

      {/* ✅ Now using filteredTemplates */}
      <div className="grid grid-cols-1 px-3 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {filteredTemplates.map((tpl: any) => (
          <div
            key={tpl.id}
            className={`overflow-hidden relative rounded-lg p-6 cursor-pointer transition ${
              selected === tpl.id ? "" : ""
            }`}
            onClick={() => setSelected(tpl.id)}
            style={{ backgroundColor: tpl.bg }}
          >
            <img
              src={tpl.img}
              alt={tpl.name}
              className="w-[150px] mx-auto h-[200px]  object-fit"
              onClick={() => setPreview(tpl.img)}
            />
            <h1 className="text-sm text-gray-700 text-center">{tpl.name}</h1>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 py-10 bg-black bg-opacity-70/10 bg-black overflow-y-auto flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
            <img
              src={preview}
              alt="Preview"
              className="w-[550px] mx-auto h-[700px] rounded-lg"
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={() => setPreview(null)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => {
                  setSelected(
                    filteredTemplates.find((tpl: any) => tpl.img === preview)
                      ?.id || null
                  );
                  setPreview(null);
                }}
              >
                Use this template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
