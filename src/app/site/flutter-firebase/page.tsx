"use client";
import FlutterHeroSection from "../../../components/sections/site/flutter/FlutterSection"; // ✅ with curly braces
import { useTransitionStore } from '../../../components/store/transitionStore';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function FluterFirebase() {
    const show = useTransitionStore((s) => s.show);
    const hide = useTransitionStore((s) => s.hide);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        show("FLUTTER & FIREBASE");

        const timeout = setTimeout(() => {
            hide();
            setShowContent(true);
        }, 1200); // Wait longer for message animation

        return () => clearTimeout(timeout);
    }, [show, hide]);
    return (
        <>


            <div className="relative bg-white min-h-screen overflow-hidden">

                {showContent && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <FlutterHeroSection />
                    </motion.div>
                )}
            </div>
        </>
    );
}
