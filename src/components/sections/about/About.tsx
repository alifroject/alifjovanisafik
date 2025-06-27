'use client';

import * as React from 'react';
import { HeaderAbout } from './HeaderAbout';
import AboutGallery from './AboutGallery';
import ImagesSection from './ImagesSection';
import TopicToga from './TopicToga';

export const AboutSection: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full bg-white">

            <div className="relative w-full z-30">
                <div className="sticky top-0 md:h-[55vh] h-[45vh] flex items-end px-6 bg-white border-b border-gray-300 animate-slideUp">
                    <HeaderAbout />
                </div>
            </div>

            <div className="relative w-full bg-gray-900 -mt-[20vh] z-10 pt-[20vh]">
                <ImagesSection />
            </div>
            <div className="relative w-full">
                <TopicToga />
            </div>



            {/* More Sections (optional) */}
            <div className="w-full px-6 pt-24">
                <AboutGallery />
                <div className="h-12" />
            </div>
        </div>
    );
};

export default AboutSection;
