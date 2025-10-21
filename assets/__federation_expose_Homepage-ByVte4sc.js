import { importShared } from './__federation_fn_import-DGqoIcQK.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

await importShared('react');

const HeroSection = () => {
  const handleGetStarted = () => {
    const el = document.getElementById("features");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "features";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto text-center px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold mb-4", children: [
      "Welcome to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "MyApp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-6", children: "Build, learn, and grow — all in one place." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleGetStarted,
        type: "button",
        "aria-label": "Get started - scroll to features",
        className: "cursor-pointer bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 hover:shadow-lg transform transition duration-150 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200",
        children: "Get Started"
      }
    )
  ] }) });
};

await importShared('react');

const features = [
  { title: "Fast", desc: "Lightning-fast performance and optimization." },
  { title: "Secure", desc: "Built with best-in-class security practices." },
  { title: "Scalable", desc: "Grows with your team and business." }
];
const FeaturesSection = () => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold mb-8", children: "Features" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-2 text-blue-600", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: f.desc })
      ]
    },
    i
  )) })
] }) });

await importShared('react');

const Footer = () => /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-900 text-gray-400 text-center py-6 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
  "© ",
  (/* @__PURE__ */ new Date()).getFullYear(),
  " MyApp. All rights reserved."
] }) });

await importShared('react');
const Homepage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex flex-col min-h-screen bg-gray-50 text-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 items-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "col-span-6 md:col-span-3 text-2xl font-bold text-blue-600", children: "MyApp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "col-span-6 md:col-span-6 md:col-start-6 lg:col-start-8 flex justify-end items-center space-x-6 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-blue-600", children: "Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimonials", className: "hover:text-blue-600", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-blue-600", children: "Contact" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "col-span-12 lg:col-span-8 lg:col-start-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "col-span-12 lg:col-span-8 lg:col-start-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};

export { Homepage as default };
