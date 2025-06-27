"use client";

import * as React from "react";
import { HeroSection } from "../Python/HeroSection";
import { ImageSection } from "../Python/ImageSection";
import ImageClassificationPage from "../Python/ImageClassification"

export function InputDesign() {
  return (
    <>

      <div className="w-full bg-white">
        <HeroSection />
        <ImageSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/02debe515f705cd9ea0128e248dff9388c9ffc35"
          altText="Laptop"
          className="mt-[55px]"
        />
        <ImageClassificationPage />

      </div>
    </>
  );
}

export default InputDesign;
