import React from "react";

const features = [
  { title: "Fast", desc: "Lightning-fast performance and optimization." },
  { title: "Secure", desc: "Built with best-in-class security practices." },
  { title: "Scalable", desc: "Grows with your team and business." },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-8">Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold mb-2 text-blue-600">
              {f.title}
            </h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
