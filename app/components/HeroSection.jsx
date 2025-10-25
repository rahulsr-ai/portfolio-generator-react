export default function HeroSection() {
  return (
    <section className=" bg-[#050CDD]  min-h-[80vh] flex items-center justify-center relative overflow-hidden">
    
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Personite.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
            Build a stunning portfolio in minutes with beautiful templates and
            <span className="font-semibold text-white">
              {" "}
              stand out effortlessly.
            </span>
          </p>

      
          <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10K+
              </div>
              <div className="text-blue-200">Portfolios Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-blue-200">Premium Themes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                99%
              </div>
              <div className="text-blue-200">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
