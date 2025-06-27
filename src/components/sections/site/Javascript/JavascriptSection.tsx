"use client";
import * as React from "react";
import { HeroSection } from "../Javascript/HeroSection";
import { ContentBlock } from "../Javascript/ContentBlock";
import { ImageGallerySection } from "../Javascript/ImageGallerySection";
import { ImageGallery } from "../Javascript/ImageGallery";
import { FooterSection } from "../Javascript/FooterSection";
import { CertificateFrame } from "../Javascript/secctionSec";
export const JavascriptSection: React.FC = () => {
  return (
    <main className="rounded-none">
      <div className="flex flex-col pt-20 w-full bg-stone-50 max-md:pt-24 max-md:max-w-full">
        <HeroSection />
        <CertificateFrame />
        <ContentBlock
          height="h-[1126px]"
          width="w-[1880px]"
          className="self-center mt-44 ml-16 max-md:mt-10"
        />
   
        <ImageGallery />
      
      </div>
    </main>
  );
};

export default JavascriptSection;
