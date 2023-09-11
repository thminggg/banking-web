"use client";
import React, { useState, useRef } from "react";

function Resizable({
  width = "100%", // Fixed width
  initialHeight = "50vh",
  children,
}: {
  width?: string;
  initialHeight?: string;
  children?: React.ReactNode;
}) {
  const [height, setHeight] = useState(initialHeight); // Initial height
  const draggingRef = useRef<HTMLDivElement>(null);
  const lastYRef = useRef(0);

  const handleMouseMove = (event: MouseEvent) => {
    if (draggingRef.current) {
      const delta = lastYRef.current - event.clientY;
      const componentCurrentHeight = draggingRef.current.clientHeight;
      const newHeight = componentCurrentHeight + delta;
      setHeight(`${newHeight}px`);
      lastYRef.current = event.clientY;
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Record mouse pointer current Y position
    lastYRef.current = event.clientY;

    // Add listeners to window so the event applies to the whole page
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // Clean up listeners
  const handleMouseUp = (event: MouseEvent) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={draggingRef}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: height,
        width: width,
        background: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "20px",
          cursor: "ns-resize",
          background: "#333",
          color: "white",
          textAlign: "center",
        }}
        onMouseDown={handleMouseDown}
      />
      {children}
    </div>
  );
}

export default Resizable;
