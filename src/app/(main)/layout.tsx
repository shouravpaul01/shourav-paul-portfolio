"use client";

import { Navbar } from "@/src/components/navbar";
import LeftSideContent from "@/src/components/ui/LeftSideContent";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  

  return (
    <div className="h-screen relative ">
      <Navbar />

      <main className="container mx-auto max-w-7xl relative flex gap-5 mt-5">
        {/* Left Sidebar */}
        <div className="w-[30%] h-screen sticky top-[90px]">
          <LeftSideContent />
        </div>

        {/* Main Content Area */}
        <div className="w-[70%] flex-grow">{children}</div>
      </main>
    </div>
  );
}
