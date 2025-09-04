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
// }import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] mb-4">
          SafeX
        </h1>
        <p className="text-xl text-gray-300 max-w-xl">
          Your trusted companion for safety & support
        </p>

        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] p-8 max-w-lg w-full border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to SafeX
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Choose your mode to get started:
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/child"
              className="px-8 py-4 bg-pink-600 text-white text-lg rounded-xl shadow-lg hover:bg-pink-700 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition text-center"
            >
              Child Mode
            </a>
            <a
              href="/adult"
              className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)] transition text-center"
            >
              Adult Mode
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-400 text-sm relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-4">
          © {new Date().getFullYear()} <span className="text-white font-semibold">SafeX</span> · Crafted with care for your safety
        </p>
      </footer>
    </div>
  );
}
