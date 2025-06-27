'use client';
import React from "react";
import Image from "next/image";

export const ContactLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-10 px-6 py-10 sm:p-12 w-full bg-white/80 backdrop-blur-md shadow-xl rounded-2xl text-gray-800 border border-gray-200 h-full">


      {/* Profile Photo */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 relative overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
        <Image
          src="/me2.jpg"
          alt="Your Name"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Title & Intro */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">Let’s Get in Touch</h2>
        <p className="text-base sm:text-lg text-gray-600">
          I’m available for collaboration, freelance, or professional opportunities.
        </p>
      </div>

      {/* Contact Details */}
      <div className="w-full space-y-4">
        <ContactItem icon="📞" label="Phone" value="+62 857-7694-8726" />
        <ContactItem icon="📧" label="Email" value="alifnewjovanisafik@gmail.com" />
        <ContactItem icon="📍" label="Location" value="Bekasi, Indonesia" />

      </div>

      {/* Social Links */}
      <div className="w-full space-y-4">
        <SocialItem icon="🔗" label="LinkedIn" url="https://www.linkedin.com/in/alif-jovani-safik-a38118257/" />
        <SocialItem icon="🐙" label="GitHub" url="https://github.com/alifroject" />
        <SocialItem icon="📸" label="Instagram" url="https://www.instagram.com/alifkelly_lively" />
      </div>
    </div>
  );
};

// Reusable Components
const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg transition">
    <span className="text-xl">{icon}</span>
    <div className="flex flex-col">
      <span className="font-semibold">{label}</span>
      <span className="text-gray-700 text-sm">{value}</span>
    </div>
  </div>
);

const SocialItem = ({
  icon,
  label,
  url,
}: {
  icon: string;
  label: string;
  url: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg transition group"
  >
    <span className="text-xl">{icon}</span>
    <span className="font-semibold group-hover:underline">{label}</span>
  </a>
);
