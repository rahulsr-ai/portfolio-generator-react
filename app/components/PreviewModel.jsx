"use client";
import React, { useEffect } from "react";
import Image from "next/image";



const PreviewModal = ({
  isOpen,
  template,
  onClose,
  onSelect,
}) => {

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      <div 
        className="fixed inset-0 bg-opacity-20 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />


      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden transform transition-all duration-300">
        

        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">
            {template.name}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <div className="p-4">
        
          <div className="relative w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden">
            <Image
              src={template.previewImage}
              alt={`${template.name} Preview`}
              fill
              className="object-cover"
              priority
            />
          </div>

       
          <div className="text-center">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {template.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

       
        <div className="flex items-center justify-end gap-2 p-3 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm"
          >
            Close
          </button>
          <button
            onClick={() => onSelect(template.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
