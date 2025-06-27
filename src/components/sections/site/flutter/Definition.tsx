"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sidebarItems = [
  {
    title: "Flutter",
    description:
      "Flutter is an open-source UI toolkit developed by Google for building cross-platform applications from a single codebase. In the context of a café app, Flutter enables smooth and responsive interfaces for browsing menus, placing orders, and tracking deliveries on both Android and iOS devices.",
  },
  {
    title: "Firebase",
    description:
      "Firebase is a backend-as-a-service platform by Google that provides tools such as real-time databases, authentication, and cloud functions. For a café application, Firebase can handle user login, order processing, live location tracking, and payment status updates with minimal backend setup.",
  },
  {
    title: "Overview",
    description:
      "This section outlines how Flutter and Firebase can be combined to build a full-stack café ordering system. Flutter powers the frontend interface, while Firebase manages real-time data synchronization, user authentication, and cloud-based services to streamline café operations.",
  },

];

const PageWithCenteredSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">

        {/* Sidebar - Left */}
        <motion.aside
          className="w-full md:w-1/2 px-2 md:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {sidebarItems.map((item, idx) => (
            <div key={idx} className="mb-6">
              <button
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left px-4 py-2 font-medium text-gray-800 hover:bg-gray-200 rounded transition-all duration-200 ${activeIndex === idx ? "bg-gray-300" : "bg-gray-100"
                  }`}
              >
                {item.title}
              </button>
              {idx < sidebarItems.length - 1 && (
                <hr className="border-t border-gray-300 mt-3" />
              )}
            </div>
          ))}
        </motion.aside>

        {/* Definition Panel - Right */}
        <motion.section
          className="w-full md:w-1/2 px-2 md:px-8 border-t md:border-t-0 md:border-l border-gray-300 pt-8 md:pt-0"
          key={activeIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {sidebarItems[activeIndex].title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {sidebarItems[activeIndex].description}
          </p>
        </motion.section>

      </div>
    </main>
  );
};

export default PageWithCenteredSidebar;
