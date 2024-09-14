import React from "react";

export function GridBackgroundDemo({ children }) {
  return (
    <div className="relative h-[50rem] w-full bg-black dark:bg-black flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] bg-repeat"></div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-30"></div>
      {/* Wrapping children */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
