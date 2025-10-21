// ...existing code...
import React from "react";

const HeroSection = () => {
  const handleGetStarted = () => {
    const el = document.getElementById("features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: navigate to /#features
      window.location.hash = "features";
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">MyApp</span>
        </h2>
        <p className="text-lg mb-6">Build, learn, and grow — all in one place.</p>
        <button
          onClick={handleGetStarted}
          type="button"
          aria-label="Get started - scroll to features"
          className="cursor-pointer bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 hover:shadow-lg transform transition duration-150 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
// ...existing code...