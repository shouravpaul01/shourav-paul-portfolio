"use client";

import { Navbar } from "@/src/components/navbar";
import LeftSideContent from "@/src/components/ui/LeftSideContent";
import { ReactNode, useEffect, useState } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  

  return (
    <div className="h-screen relative overflow-y-scroll">
      <Navbar />

      <main className="container mx-auto max-w-7xl relative flex">
        {/* Left Sidebar */}
        <div className="w-[30%] h-screen sticky top-[76px]">
          <LeftSideContent />
        </div>

        {/* Main Content Area */}
        <div className="w-[70%] flex-grow">{children}</div>
      </main>
    </div>
  );
}
