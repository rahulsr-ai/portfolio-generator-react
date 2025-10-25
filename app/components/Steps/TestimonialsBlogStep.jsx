"use client";
import React from "react";

const TestimonialsBlogStep = ({ formData, updateFormData }) => {
  // Update testimonial
  const updateTestimonial = (index, field, value) => {
    const updatedTestimonials = [...formData.testimonials];
    updatedTestimonials[index] = {
      ...updatedTestimonials[index],
      [field]: value,
    };
    updateFormData({ testimonials: updatedTestimonials });
  };

  // Update blog
  const updateBlog = (index, field, value) => {
    const updatedBlogs = [...formData.blogs];
    updatedBlogs[index] = {
      ...updatedBlogs[index],
      [field]: value,
    };
    updateFormData({ blogs: updatedBlogs });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
    
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Testimonials</h2>
          <p className="text-sm text-gray-600">Client feedback & reviews (1-3)</p>
        </div>

        <div className="space-y-4">
          {formData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 border-2 border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  Testimonial {index + 1}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client Name *
                </label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quote *
                </label>
                <textarea
                  value={testimonial.quote}
                  onChange={(e) => updateTestimonial(index, "quote", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Amazing work! Highly recommend..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Blog Posts */}
      <div className="space-y-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Blog Posts</h2>
          <p className="text-sm text-gray-600">Recent articles or thoughts (1-3)</p>
        </div>

        <div className="space-y-4">
          {formData.blogs.map((blog, index) => (
            <div
              key={index}
              className="p-4 border-2 border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  Blog {index + 1}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Title *
                </label>
                <input
                  type="text"
                  value={blog.title}
                  onChange={(e) => updateBlog(index, "title", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Getting Started with React"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary *
                </label>
                <textarea
                  value={blog.summary}
                  onChange={(e) => updateBlog(index, "summary", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="A comprehensive guide to getting started with React..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlogStep;
