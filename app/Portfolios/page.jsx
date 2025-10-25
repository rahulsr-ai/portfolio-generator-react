"use client";
import React, { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard"; // Update path as needed

const PortfolioShowcase = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/portfolio`, 
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
      }

      if (result.success && result.data) {
        const transformedData = result.data.map((portfolio) => ({
          id: portfolio._id?.toString?.() || portfolio._id || "unknown",
          name: portfolio.name || "Anonymous Developer",
          profilePhoto:
            portfolio.profileImageUrl ||
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          professionalTitle: portfolio.title || "Developer",
          shortDescription: portfolio.bio || "No description available.",
          location: portfolio.location || "Location not specified",
          skills: Array.isArray(portfolio.skills) ? portfolio.skills : [],
          category: portfolio.category || "Development",
          portfolioUrl: `#`,
          createdAt: portfolio.createdAt,
          featured: false,
          tagline: portfolio.tagline || "",
          email: portfolio.email || "",
          phone: portfolio.phone || "",
          socialMedia: Array.isArray(portfolio.socialMedia)
            ? portfolio.socialMedia
            : [],
          services: Array.isArray(portfolio.services)
            ? portfolio.services
            : [],
          projects: Array.isArray(portfolio.projects)
            ? portfolio.projects
            : [],
        }));

        setPortfolios(transformedData);
        setFilteredPortfolios(transformedData);
      } else {
        setPortfolios([]);
        setFilteredPortfolios([]);
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      setError(error.message);
      setPortfolios([]);
      setFilteredPortfolios([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  // Generate categories from portfolios
  const portfolioCategories = ["all", ...new Set(portfolios.map((p) => p.category || "Development"))];


  // Filter and search functionality
  useEffect(() => {
    let filtered = portfolios;

    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (portfolio) =>
          (portfolio.category || "Development").toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search functionality
    if (searchTerm) {
      filtered = filtered.filter(
        (portfolio) =>
          portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.professionalTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          (portfolio.tagline && portfolio.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPortfolios(filtered);
  }, [portfolios, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
     
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Developer <span className="text-blue-600">Showcase</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover talented developers and designers from around the world
            </p>
          </div>


         
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 lg:p-6">
            <div className="row g-4 mb-4">

              
              <div className="col-12 col-md-8">
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Search by name, title, location, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control form-control-lg border-2 rounded-lg bg-white/80 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 ps-5"
                    style={{ paddingLeft: "3rem" }}
                  />
                  <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

        
              <div className="col-12 col-md-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select form-select-lg border-2 rounded-lg bg-white/80 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                >
                  {portfolioCategories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
              <p className="mb-0 text-muted fw-medium">
                Showing{" "}
                <span className="fw-bold text-dark">{filteredPortfolios.length}</span> of{" "}
                <span className="fw-bold text-dark">{portfolios.length}</span> portfolios
                {searchTerm && (
                  <span className="ms-2 text-primary fw-semibold">
                    for &quot;{searchTerm}&quot;
                  </span>
                )}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="btn btn-link btn-sm text-muted text-decoration-none p-0 d-flex align-items-center"
                >
                  <svg className="w-4 h-4 me-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Clear Filters
                </button>
              )}
            </div>
            <div className="mt-3">
              <button
                onClick={fetchPortfolios}
                disabled={loading}
                className="btn btn-outline-primary btn-sm"
              >
                {loading ? "Refreshing..." : "Refresh Data"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
      
        {error && (
          <div className="text-center py-8">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Error!</h4>
              <p>{error}</p>
              <button className="btn btn-outline-danger" onClick={fetchPortfolios}>
                Try Again
              </button>
            </div>
          </div>
        )}

       
        {loading && !error && (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "20rem" }}>
            <div className="d-flex align-items-center">
              <div className="spinner-border text-primary me-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="fs-5 text-muted">Loading portfolios...</span>
            </div>
          </div>
        )}

     
        {!loading && !error && (
          <>
            {filteredPortfolios.length > 0 ? (
              <div className="row g-4">
                {filteredPortfolios.map((portfolio) => (
                  <div key={portfolio.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <PortfolioCard portfolio={portfolio} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="fs-1 mb-4">👨‍💻</div>
                <h3 className="fs-4 fw-semibold text-muted mb-2">No Portfolios Found</h3>
                <p className="text-muted mb-4">
                  {searchTerm || selectedCategory !== "all"
                    ? "Try adjusting your search or filter criteria"
                    : "No portfolios available at the moment"}
                </p>
                {(searchTerm || selectedCategory !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="btn btn-primary"
                  >
                    Clear Filters
                  </button>
                )}
                <div className="mt-3">
                  <button onClick={fetchPortfolios} className="btn btn-outline-primary">
                    Refresh Data
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
