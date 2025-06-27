import * as React from "react";
import { NavigationHeader } from "./NavigationHeader";
import { NavigationLinks } from "./NavigationLinks";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Navigation = ({ onClose }: { onClose: () => void }) => {
    return (
        <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0   right-0 z-40 w-full md:w-[30%] h-full bg-neutral-800 px-5 py-20 max-md:px-5 max-sm:px-5"
        >
            <motion.button
                onClick={onClose}
                className="relative  absolute top-6  w-12 h-8 rounded-full overflow-hidden"
                whileHover="hover"
                initial="rest"
            >
                {/* Static blue background */}
                <div className="absolute inset-0 bg-blue-500 rounded-full" />

                {/* Animated fill layer */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full bg-red-500"
                    variants={{
                        rest: {
                            height: 0,
                            backgroundColor: "#3B82F6" // blue
                        },
                        hover: {
                            height: "100%",
                            backgroundColor: "#EF4444" // red
                        }
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                />

                {/* Close symbol */}
                <motion.div
                    variants={{
                        rest: { rotate: 0 },
                        hover: { rotate: 180 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                >
                    <ArrowLeft className="text-white w-6 h-6 mx-auto" />
                </motion.div>

            </motion.button>

            <NavigationHeader />
            <NavigationLinks onClose={onClose} />
        </motion.nav>
    );
};

export default Navigation;