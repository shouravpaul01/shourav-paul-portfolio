"use client";

import { Navbar } from "@/src/components/ui/navbar";
import LeftSideContent from "@/src/components/ui/LeftSideContent";
import { ReactNode } from "react";
import Footer from "@/src/components/ui/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  

  return (
    <div className=" mx-auto max-w-7xl px-3 md:px-4   h-screen relative">
      <Navbar />
      
      <main className=" relative flex flex-col lg:flex-row gap-6 mt-6">
       
        {/* Left Sidebar */}
        <div className="w-full lg:w-[350px] lg:h-screen lg:sticky md:top-[100px]">
          <LeftSideContent />
        </div>

        {/* Main Content Area */}
        <div className="w-full  flex-grow">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
