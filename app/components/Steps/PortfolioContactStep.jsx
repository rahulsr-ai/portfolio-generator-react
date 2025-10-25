"use client";
import React from "react";

const PortfolioContactStep = ({ formData, updateFormData }) => {
  const updateProject = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    updateFormData({ projects: updatedProjects });
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files?.[0] || null;
    console.log(`Project ${index + 1} image selected:`, file);
    updateProject(index, "image", file);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Column - Portfolio */}
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Portfolio</h2>
          <p className="text-sm text-gray-600">Your best projects (3 max)</p>
        </div>

        <div className="space-y-4">
          {formData.projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-3 space-y-3"
            >
              <h3 className="font-medium text-gray-900 mb-2 text-sm">
                Project {index + 1}
              </h3>

              <div className="space-y-2">
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    updateProject(index, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project title"
                />

                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {project.image && (
                    <div className="text-xs text-green-600 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Image selected: {project.image.name}</span>
                    </div>
                  )}
                </div>

                <textarea
                  value={project.description}
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project description..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Contact */}
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Contact</h2>
          <p className="text-sm text-gray-600">Contact section details</p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Message *
            </label>
            <textarea
              value={formData.contactMessage}
              onChange={(e) =>
                updateFormData({ contactMessage: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Invite visitors to get in touch..."
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) =>
                  updateFormData({ contactEmail: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="contact@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) =>
                  updateFormData({ contactPhone: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default PortfolioContactStep;
