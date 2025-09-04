// src/pages/Home.jsx
// import Navbar from "../components/Navbar"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col">
//       {/* Navbar
//       <Navbar /> */}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col items-center justify-center text-center">
//         {/* App Name */}
//         <h1 className="text-7xl font-extrabold text-pink-700 drop-shadow-lg">
//           SafeX
//         </h1>
//         <p className="mt-4 text-xl text-gray-700 max-w-xl">
//           Your trusted companion for safety & support
//         </p>

//         {/* Welcome + Buttons */}
//         <div className="mt-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Welcome to SafeX
//           </h2>
//           <p className="text-gray-600 mb-8 text-lg">
//             Choose your mode to get started:
//           </p>

//           <div className="flex gap-6 justify-center">
//             <a
//               href="/child"
//               className="px-8 py-4 bg-pink-600 text-white text-lg rounded-xl shadow-lg hover:bg-pink-700 transition"
//             >
//               Child Mode
//             </a>
//             <a
//               href="/adult"
//               className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
//             >
//               Adult Mode
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-4 text-center text-gray-600 text-sm border-t border-gray-300">
//         © {new Date().getFullYear()} SafeX. All rights reserved.
//       </footer>
//     </div>
//   )
// }
import React, { useEffect } from "react";

export default function SafeSteps() {
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((b, i) => {
      b.style.opacity = 0;
      b.style.transform = "translateY(10px)";
      setTimeout(() => {
        b.style.transition = "all 420ms cubic-bezier(.2,.9,.3,1)";
        b.style.opacity = 1;
        b.style.transform = "";
      }, 120 + i * 80);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 text-slate-800 relative">
      <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-[radial-gradient(ellipse_at_10%_10%,rgba(255,255,255,0.06)_0%,transparent_30%),radial-gradient(ellipse_at_90%_90%,rgba(255,255,255,0.04)_0%,transparent_20%)]">
        <div className="w-full max-w-2xl text-center">
          {/* Logo + tagline */}
          <div className="relative inline-block mb-8 animate-[floaty_4s_ease-in-out_infinite]">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-rose-600 drop-shadow-[0_6px_0_rgba(183,28,28,0.06)]">
              SafeSteps
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Your trusted companion for safety &amp; support
            </p>

            <div className="absolute -right-6 -top-6 hidden sm:block">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 px-3 py-2 text-xs shadow-sm">
                Trusted • 24/7
              </div>
            </div>
          </div>

          {/* Welcome */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Welcome to SafeX
          </h2>
          <p className="text-slate-600 mb-8">Choose your mode to get started:</p>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {/* Child Mode */}
            <button
              aria-label="Child Mode"
              className="w-full p-6 rounded-2xl text-left bg-white/5 backdrop-blur-md border border-white/20 shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-transform duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-rose-500/10 flex items-center justify-center text-2xl">
                    👶
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-semibold text-rose-600">
                      Child Mode
                    </span>
                    <span className="text-xs text-slate-500">Safe &amp; playful</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    Designed for kids: guided help, friendly content, simple interface.
                  </p>
                </div>
              </div>
            </button>

            {/* Adult Mode */}
            <button
              aria-label="Adult Mode"
              className="w-full p-6 rounded-2xl text-left bg-white/5 backdrop-blur-md border border-white/20 shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-transform duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-semibold text-slate-900">
                      Adult Mode
                    </span>
                    <span className="text-xs text-slate-500">
                      Advanced controls
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    For guardians: monitoring tools, alerts, and privacy controls.
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/40 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2025 SafeX. All rights reserved.</div>
            <div className="flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-2">🔒 Secure</span>
              <span className="inline-flex items-center gap-2">🌍 Global</span>
              <span className="inline-flex items-center gap-2">❤️ Child-friendly</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Extra animation keyframes for logo */
const style = document.createElement("style");
style.innerHTML = `
  @keyframes floaty {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
  }
`;
document.head.appendChild(style);
