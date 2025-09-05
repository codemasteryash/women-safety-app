import { useNavigate } from "react-router-dom";
import { useState } from "react";

function VoiceHelpButton() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    navigate("/voice-help");
  };

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Outer bezel / frame */}
      <div
        className="absolute w-3/4 h-3/4 rounded-full"
        // style={{
        //   background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
        //   boxShadow:
        //     "inset 0 4px 8px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.7)",
        //   padding: "12px",
        // }}
      />

      {/* Mic Button Face */}
      <button
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={` 
          relative w-28 h-28 rounded-full 
          flex items-center justify-center transition-all duration-150 ease-in-out
          ${isPressed ? "shadow-inner" : "shadow-md"}
        `}
        style={{
          background: isPressed
            ? "radial-gradient(circle at 30% 30%, #6b21a8, #3b0764)"
            : "radial-gradient(circle at 30% 30%, #a855f7, #6b21a8)",
          border: "3px solid #4c1d95",
          transform: isPressed
            ? "translateY(2px) scale(0.97)"
            : "translateY(0) scale(1)",
        }}
      >
        {/* Mic Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z" />
          <path
            d="M12 17v4m-4 0h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Glossy reflection */}
        <span
          className="absolute top-2 left-4 w-16 h-5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.25)",
            filter: "blur(4px)",
          }}
        />
      </button>
    </div>
  );
}

export default VoiceHelpButton;
