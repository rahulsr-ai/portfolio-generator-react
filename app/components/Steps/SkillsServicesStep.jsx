"use client";
import React, { useState } from "react";


const SkillsServicesStep  = ({ formData, updateFormData }) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      updateFormData({
        skills: [...formData.skills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    updateFormData({
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const updateService = (index, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value,
    };
    updateFormData({ services: updatedServices });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const suggestedSkills = [
    "JavaScript", "React", "Node.js", "Python", "HTML/CSS", 
    "TypeScript", "MongoDB", "UI/UX Design"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Column - Skills */}
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Skills</h2>
          <p className="text-sm text-gray-600">Your technical skills</p>
        </div>

        <div className="space-y-3">
          {/* Add Skill */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Add a skill"
            />
            <button
              onClick={addSkill}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Add
            </button>
          </div>

          {/* Current Skills */}
          {formData.skills.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Skills ({formData.skills.length})
              </label>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quick Add
            </label>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills
                .filter((skill) => !formData.skills.includes(skill))
                .map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      updateFormData({
                        skills: [...formData.skills, skill],
                      });
                    }}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 transition-colors"
                  >
                    + {skill}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Services */}
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Services</h2>
          <p className="text-sm text-gray-600">What you offer (3 services)</p>
        </div>

        <div className="space-y-4">
          {formData.services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <h3 className="font-medium text-gray-900 mb-2 text-sm">
                Service {index + 1}
              </h3>
              
              <div className="space-y-2">
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(index, "title", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Service title"
                />
                
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(index, "description", e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Service description..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsServicesStep;
