"use client";

import { Navbar } from "@/src/components/ui/navbar";
import LeftSideContent from "@/src/components/ui/LeftSideContent";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  

  return (
    <div className="container mx-auto max-w-7xl px-3 md:px-0 h-screen relative ">
      <Navbar />

      <main className=" relative flex flex-col md:flex-row gap-6 mt-6 ">
        {/* Left Sidebar */}
        <div className="w-full md:w-[30%] md:h-screen md:sticky md:top-[90px]">
          <LeftSideContent />
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-[70%] flex-grow">{children}</div>
      </main>
    </div>
  );
}
