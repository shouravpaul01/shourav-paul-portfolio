"use client";

import { Navbar } from "@/src/components/ui/navbar";
import LeftSideContent from "@/src/components/ui/LeftSideContent";
import { ReactNode, useEffect, useState } from "react";
import Footer from "@/src/components/ui/Footer";
import {motion, AnimatePresence } from "framer-motion";

export default function MainLayout({ children }: { children: ReactNode }) {
  
  const [isSticky, setIsSticky] = useState<boolean | null>(null); 

  useEffect(() => {
    // Set initial state immediately
    setIsSticky(window.scrollY > 100);
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-3 md:px-4 h-screen relative">
      {/* Navbar */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 "
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

        {/* Regular Navbar (before sticky activates) */}
      <AnimatePresence>
        {!isSticky && (
          <motion.div
            key="regular-navbar"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:pt-3"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      
      <main className=" relative flex flex-col lg:flex-row gap-6 ">
       
        {/* Left Sidebar */}
        <div className="w-full lg:w-[350px] lg:h-screen lg:sticky lg:top-[90px] mt-6">
          <LeftSideContent />
        </div>

        {/* Main Content Area */}
        <div className="w-full  flex-grow ">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
