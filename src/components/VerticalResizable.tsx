"use client";
import React, { useState, useRef } from "react";
import { clamp } from "@/utils/utils";

function DragBar({
  handleMouseDown,
}: {
  handleMouseDown: { (event: React.MouseEvent<HTMLDivElement>): void };
}) {
  return (
    <div
      style={{
        height: "0.5em",
        width: "10em",
        cursor: "ns-resize",
        background: "#aaaaaa",
        margin: "1em auto",
        borderRadius: "1em",
      }}
      onMouseDown={handleMouseDown}
    />
  );
}

function VerticalResizable({
  width = "100%", // Fixed width
  initialHeight = "50vh",
  children,
}: {
  width?: string;
  initialHeight?: string;
  children?: React.ReactNode;
}) {
  const MAX_HEIGHT = screen.height - 200;
  const MIN_HEIGHT = 300;
  const [height, setHeight] = useState(initialHeight); // Initial height
  const draggingRef = useRef<HTMLDivElement>(null);
  const lastYRef = useRef(0);

  const handleMouseMove = (event: MouseEvent) => {
    if (draggingRef.current) {
      const delta = lastYRef.current - event.clientY;
      const componentCurrentHeight = draggingRef.current.clientHeight;
      const newHeight = componentCurrentHeight + delta;
      lastYRef.current = event.clientY;

      setHeight(`${clamp(newHeight, MIN_HEIGHT, MAX_HEIGHT)}px`);
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
      <DragBar handleMouseDown={handleMouseDown} />
      {children}
    </div>
  );
}

export default VerticalResizable;
