// src/pages/Home.jsx
// import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col">
      {/* Navbar
      <Navbar /> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* App Name */}
        <h1 className="text-7xl font-extrabold text-pink-700 drop-shadow-lg">
          SafeSteps
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-xl">
          Your trusted companion for safety & support
        </p>

        {/* Welcome + Buttons */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to SafeX
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Choose your mode to get started:
          </p>

          <div className="flex gap-6 justify-center">
            <a
              href="/child"
              className="px-8 py-4 bg-pink-600 text-white text-lg rounded-xl shadow-lg hover:bg-pink-700 transition"
            >
              Child Mode
            </a>
            <a
              href="/adult"
              className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Adult Mode
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-600 text-sm border-t border-gray-300">
        © {new Date().getFullYear()} SafeX. All rights reserved.
      </footer>
    </div>
  )
}
