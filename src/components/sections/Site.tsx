"use client";
import * as React from "react";
import { HeaderSection } from "../sections/site/Header";
import { SkillCategories } from "../sections/site/SkillBottons";


export const LanguageShowcase: React.FC = () => {
    return (
        <main className="flex flex-col mb-20 items-center w-full bg-white min-h-[screen]">
            <div className="px-6 pt-24 w-full max-w-[1209px]">
                <HeaderSection />
                <SkillCategories />
                
                
            </div>
        </main>
    );
};

export default LanguageShowcase;
