'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowLeft } from 'react-icons/fi'; // place at top with other imports


interface Certificate {
  title: string;
  image: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    image: "/cert1.png",
    link: "https://www.credly.com/badges/a597d590-cbe6-4f55-b18c-d12f2e55a36a/public_url",
  },
  {
    title: "Amazon Aurora PostgreSQL and Amazon RDS PostgreSQL",
    image: "/cert2.png",
    link: "https://www.linkedin.com/in/alif-jovani-safik-a38118257/details/certifications/",
  },
  {
    title: "Introduction to Programming Using Python",
    image: "/cert3.png",
    link: "https://www.kaggle.com/learn/certification/alifjovanisafik/python",
  },
  {
    title: "Node (Basic)",
    image: "/cert4.png",
    link: "https://www.hackerrank.com/certificates/iframe/827cbf03f1cd",
  },
  {
    title: "React",
    image: "/cert5.png",
    link: "https://www.hackerrank.com/certificates/iframe/4c6b9ed449800",
  },
  {
    title: "Rest API (Intermediate)",
    image: "/cert6.png",
    link: "https://www.hackerrank.com/certificates/iframe/5ee088c766e6",
  },
  {
    title: "SQL (Basic)",
    image: "/cert7.png",
    link: "https://www.hackerrank.com/certificates/iframe/023deaaf5d1d",
  },
  {
    title: "SQL (Intermediate)",
    image: "/cert8.png",
    link: "https://www.hackerrank.com/certificates/iframe/1a55138b50d4",
  },
];

export const DocumentationContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-4 text-center text-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md hover:shadow-lg transition-shadow rounded-xl p-4 bg-white w-full max-w-[200px]"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            />
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              {cert.title}
            </a>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg p-4 max-w-3xl w-[90%] relative">
            <div className="absolute top-3 left-3 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md">
              <button
                onClick={() => setSelectedImage(null)}
                className="text-black hover:text-blue-600 transition-all duration-300 group"
                aria-label="Go back"
              >
                <FiArrowLeft className="text-3xl group-hover:-translate-x-1 transform transition-all duration-300" />
              </button>
            </div>


            <img
              src={selectedImage}
              alt="Certificate preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
