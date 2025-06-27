// components/sections/contact/ContactPage.tsx
'use client';
import React from "react";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
        <div className="lg:col-span-2">
          <ContactLeft />
        </div>
        <div className="lg:col-span-3">
          <ContactRight />
        </div>
      </div>

    </div>
  );
};
