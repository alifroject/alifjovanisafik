"use client";
import * as React from "react";
import { FlutterHeroSection } from "../flutter/FlutterHero"
import { SlidingPhoneShowcase } from "../flutter/SlidingFlutter"
import PageWithCenteredSidebar from "../flutter/Definition"

export const ReactSection: React.FC = () => {
    return (
        <main className="rounded-none">
            <div className="flex flex-col pt-20 w-full bg-stone-50 max-md:pt-24 max-md:max-w-full">
                <FlutterHeroSection />
                <PageWithCenteredSidebar/>
                <SlidingPhoneShowcase/>
                {/*I will add in here*/}
            </div>
        </main>
    );
};

export default ReactSection;
