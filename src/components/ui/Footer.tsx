import React from "react";

export default function Footer() {
  return (
    <footer className="text-center bg-background  text-slate-500 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Shourav Paul
        </p>
      </aside>
    </footer>
  );
}
