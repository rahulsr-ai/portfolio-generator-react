"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PreviewModal from "./PreviewModel";



const TemplateSelection = () => {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Template 1",
      description: "Clean and professional portfolio template perfect for showcasing your work elegantly.",
      image: "/template1.png",
      previewImage: "/template1.png",
      features: [
        "Clean minimal layout",
        "Hero banner section",
        "Skills showcase",
        "Portfolio grid",
        "Contact form"
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      category: "Professional"
    },
    {
      id: 2,
      name: "Template 2",
      description: "Vibrant and contemporary design with bold colors for creative professionals.",
      image: "/template2.png",
      previewImage: "/template2.png",
      features: [
        "Modern vibrant design",
        "Animated sections",
        "Service showcase",
        "Client testimonials",
        "Social integration"
      ],
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "Creative"
    }
  ];

  const handlePreview = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const handleSelect = (id )  => {
    router.push(`/form?template=${id}`);
  };

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Choose Your <span className="text-blue-600">Template</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a professional template and customize it to your needs.
            </p>
          </div>

       
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
               
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {template.category}
                    </span>
                  </div>
                </div>

              
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {template.description}
                    </p>
                  </div>

                 
                  <div className="mb-3">
                    <ul className="text-gray-600 text-xs space-y-1">
                      {template.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

               
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {template.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(template)}
                      className="flex-1 bg-gray-100 text-gray-800 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleSelect(template.id)}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

    
      <PreviewModal 
        isOpen={isModalOpen}
        template={selectedTemplate}
        onClose={closeModal}
        onSelect={handleSelect}
      />
    </>
  );
};

export default TemplateSelection;
