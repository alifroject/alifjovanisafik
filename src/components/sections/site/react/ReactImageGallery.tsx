"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FiZap } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";


// Dynamically import the image sliding component
const ImagesSliding = dynamic(() => import("./ReactImagesSliding"), { ssr: false });

export const ReactImageGallery: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedGallery, setSelectedGallery] = React.useState<string>("");

    const handleOpen = (galleryName: string) => {
        setSelectedGallery(galleryName);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedGallery("");
    };

    return (
        <section className="flex flex-col justify-center items-center p-6 w-full bg-zinc-300 min-h-screen">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
                This is what I have experienced
            </h2>

            {/* Button Layout: Two lines */}
            <div className="flex flex-col gap-6 w-full max-w-4xl text-black">

                {/* First Row: React and Next.js */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <button
                        onClick={() => handleOpen("React")}
                        className="flex-1 bg-white p-6 rounded-xl shadow-md hover:bg-zinc-200 transition"
                    >
                        React
                    </button>

                    <button
                        onClick={() => handleOpen("Next.js")}
                        className="flex-1 bg-white p-6 rounded-xl shadow-md hover:bg-zinc-200 transition"
                    >
                        Next.js
                    </button>
                </div>

                {/* Second Row: Tailwind Animations (full width with hover preview) */}
                <div className="relative group w-full">
                    <Link href="https://anak-gundar.firebaseapp.com/">
                        <button className="w-full bg-white p-6 rounded-xl shadow-md hover:bg-zinc-200 transition flex items-center justify-center gap-3 relative z-10">
                            <FiZap className="text-blue-500 text-2xl" />
                            <span className="text-center">School Project</span>
                        </button>
                    </Link>
                    <div className="relative group w-full">


                        {/* Hover Preview Box */}
                        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-72 bg-white border border-gray-200 shadow-2xl rounded-xl p-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20 pointer-events-none">
                            <div className="pt-1">
                                <svg
                                    className="w-6 h-6 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                </svg>
                            </div>

                            <div>
                                <Image
                                    src="/next5.png"
                                    alt="Preview"
                                    className="w-full h-36 object-cover rounded-md mb-3"
                                />

                                <div className="text-yellow-800 font-bold text-base mb-1">
                                    ⚠️ Caution
                                </div>

                                <p className="text-sm text-yellow-700">
                                    This project was created solely for a school assignment and is not intended for real business use.
                                </p>
                            </div>
                        </div>

                        {/* ⚠️ Always-visible Red Caution Text Below */}
                        <div className="mt-2 m-5 p-3 bg-red-100  text-red-800 text-sm text-center">
                            ⚠️ This is a school project only. Not suitable for commercial use.
                        </div>

                    </div>
                </div>
            </div>


            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white rounded-xl p-6 max-w-3xl w-full shadow-2xl animate-fadeIn min-h-[500px] flex flex-col">

                        {/* Stylish Left Arrow Back Button */}
                        <div className="mb-4">
                            <button
                                onClick={handleClose}
                                className="flex items-center gap-2  text-blue-800 hover:bg-blue-200 hover:text-blue-900 transition-colors px-4 py-2 rounded-full shadow-sm"
                            >
                                <FiArrowLeft className="text-2xl" />
                                <span className="font-semibold"></span>
                            </button>
                        </div>

                        {/* Fixed-size container for images */}
                        <div className="flex-grow flex justify-center items-center min-h-[400px]">
                            <ImagesSliding galleryName={selectedGallery} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
