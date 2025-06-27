import * as React from "react";
import { LanguageCard } from "./LanguageCards";

export const LanguageGrid: React.FC = () => {
  return (
    <section className="mt-40 max-sm:mt-20 px-4">
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto max-sm:grid-cols-1">
        <LanguageCard
          name="JavaScript + TypeScript"
          image1="/javascript-logo.png"
          image2="/typescript.png"
        />
        <LanguageCard
          name="React + Next.js"
          image1="/react.png"
          image2="/next.png"
        />
        <LanguageCard
          name="Python + TensorFlow"
          image1="/python.png"
          image2="/tensorflow.png"
        />
        <LanguageCard
          name="Flutter + Firebase"
          image1="/flutter.png"
          image2="/firebase.png"
        />
      </div>
    </section>
  );
};
