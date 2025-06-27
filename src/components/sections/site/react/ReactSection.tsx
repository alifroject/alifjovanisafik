"use client";
import * as React from "react";
import { ReactHeroSection } from "../react/ReactHero";
import { ReactImageGallery } from "../react/ReactImageGallery";
import {CertificateFrame} from "../react/secctionSec";

export const ReactSection: React.FC = () => {
  return (
    <main className="rounded-none">
      <div className="flex flex-col pt-20 w-full bg-stone-50 max-md:pt-24 max-md:max-w-full">
        <ReactHeroSection />
        <CertificateFrame/>
        <ReactImageGallery />
      </div>
    </main>
  );
};

export default ReactSection;
