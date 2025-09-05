import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()



  return (
    <div className="relative w-screen h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden overflow-y-auto ">
    <div className="relative h-[100%]  flex flex-col items-center justify-between bg-gradient-to-br from-black via-gray-900 to-black text-white w-[100%]">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 bg-transparent">
        <div className="relative flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3 relative z-10">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
              SafeSteps
            </h1>
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 bg-pink-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
              style={{
                WebkitMask: "url('/safestepslogo.png') no-repeat center / contain",
                mask: "url('/safestepslogo.png') no-repeat center / contain",
              }}
            />
          </div>

          {/* Shiny sweep overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"></div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
          Your trusted companion for safety & support
        </p>

        {/* Mode Selection Card */}
        <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.15)] p-10 max-w-2xl w-full border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-4">
            Welcome to SafeSteps
          </h2>
          <p className="text-gray-300 mb-10 text-base sm:text-lg">
            Choose your preferred mode to begin your safe journey ✨
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Child Mode */}
            <a
              onClick={() =>navigate("/child")}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-lg border border-pink-300/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition transform duration-300"
            >
              <div className="h-20 w-20 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <div
                  className="w-16 h-16 bg-yellow-200"
                  style={{
                    WebkitMask: "url('/childsafe.png') no-repeat center / contain",
                    mask: "url('/childsafe.png') no-repeat center / contain",
                  }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Child Mode</h3>
            </a>

            {/* Adult Mode */}
            <a
              onClick={() => navigate("/adult")}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg border border-blue-300/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition transform duration-300"
            >
              <img
                src="/adultsafe.jpg"
                alt="Adult Safety"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold">Adult Mode</h3>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-gray-400 text-sm bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">SafeSteps</span> · Crafted
          with care for your safety
        </p>
      </footer>
    </div>
  );
}
