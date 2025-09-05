"use client";
import { useState } from "react";

export default function SOSButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Outer bezel / frame */}
      <div
        className="absolute w-3/4 h-3/4 rounded-full"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
          boxShadow:
            "inset 0 4px 8px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.7)",
          padding: "12px",
        }}
      />

      {/* Button face */}
      <button
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={`
          relative w-28 h-28 rounded-full font-bold text-white text-2xl
          flex items-center justify-center transition-all duration-150 ease-in-out
          ${isPressed ? "shadow-inner" : "shadow-md"}
          ${!isPressed ? "animate-pulse-glow" : ""}
        `}
        style={{
          background: isPressed
            ? "radial-gradient(circle at 30% 30%, #cc0000, #660000)"
            : "radial-gradient(circle at 30% 30%, #ff4d4d, #990000)",
          border: "3px solid #4d0000",
          transform: isPressed
            ? "translateY(2px) scale(0.97)"
            : "translateY(0) scale(1)",
        }}
      >
        SOS
        {/* Glossy reflection */}
        <span
          className="absolute top-2 left-4 w-20 h-6 rounded-full"
          style={{
            background: "rgba(255,255,255,0.25)", // dimmer shine
            filter: "blur(4px)",
          }}
        />
      </button>
    </div>
  );
}
