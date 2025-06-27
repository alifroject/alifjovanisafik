"use client";
import * as React from "react";
import { HeroSection } from "../Javascript/HeroSection";


import { ImageGallery } from "../Javascript/ImageGallery";

import { CertificateFrame } from "../Javascript/secctionSec";
export const JavascriptSection: React.FC = () => {
  return (
    <main className="rounded-none">
      <div className="flex flex-col pt-20 w-full bg-stone-50 max-md:pt-24 max-md:max-w-full">
        <HeroSection />
        <CertificateFrame />
       
   
        <ImageGallery />
      
      </div>
    </main>
  );
};

export default JavascriptSection;
