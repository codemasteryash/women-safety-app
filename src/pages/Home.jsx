
// export default function Home() {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-black via-gray-900 to-black text-white">

//       {/* Background Glow Orbs */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[200px]" />
//         <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[200px]" />
//         <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]" />
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
// <div className="flex items-center justify-center gap-3 mb-6 relative group">
//   {/* Wrapper with shine effect */}
//   <div className="flex items-center gap-2 bg-clip-text relative">
//     {/* Text */}
//     <h1 className="text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
//       SafeSteps
//     </h1>

//     {/* Logo */}
//     <div
//       className="w-32 h-32 bg-pink-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
//       style={{
//         WebkitMask: "url('/safestepslogo.png') no-repeat center / contain",
//         mask: "url('/safestepslogo.png') no-repeat center / contain"
//       }}
//     ></div>
//   </div>

//   {/* Shiny overlay */}
//   <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
//     <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-shine"></div>
//   </div>
// </div>



//         <p className="text-xl text-gray-300 max-w-xl">
//           Your trusted companion for safety & support
//         </p>

//         <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] p-8 max-w-lg w-full border border-white/20">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Welcome to SafeSteps
//           </h2>
//           <p className="text-gray-400 mb-8 text-lg">
//             Choose your mode to get started:
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a
//               href="/child"
//               className="px-8 py-4 bg-pink-600 text-white text-lg rounded-xl shadow-lg hover:bg-pink-700 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition text-center"
//             >
//               Child Mode
//             </a>
//             <a
//               href="/adult"
//               className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.8)] transition text-center"
//             >
//               Adult Mode
//             </a>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="w-full py-6 text-center text-gray-400 text-sm relative">
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//         <p className="mt-4">
//           © {new Date().getFullYear()} <span className="text-white font-semibold">SafeSteps</span> · Crafted with care for your safety
//         </p>
//       </footer>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="relative min-h-full  flex flex-col items-center justify-between bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        
        <div className="relative flex items-center gap-4 mb-8">
        
          <div className="flex items-center gap-3 relative z-10">
            <h1 className="text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">
              SafeSteps
            </h1>

            <div
              className="w-32 h-32 bg-pink-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
              style={{
                WebkitMask: "url('/safestepslogo.png') no-repeat center / contain",
                mask: "url('/safestepslogo.png') no-repeat center / contain"
              }}
            ></div>
          </div>

          {/* Shiny sweep overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"></div>
          </div>
        </div>

        <p className="text-xl text-gray-300 max-w-xl">
          Your trusted companion for safety & support
        </p>

        {/* <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] p-8 max-w-lg w-full border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to SafeSteps
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
        </div> */}
        <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.15)] p-10 max-w-2xl w-full border border-white/10">
  <h2 className="text-4xl font-extrabold text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-4">
    Welcome to SafeSteps
  </h2>
  <p className="text-gray-300 mb-10 text-lg">
    Choose your preferred mode to begin your safe journey ✨
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Child Mode */}
    <a
      href="/child"
      className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-lg border border-pink-300/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition transform duration-300"
    >
      <div className=" h-26 w-26 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
         <div
              className=" w-64  h-64     bg-yellow-200 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
              style={{
                WebkitMask: "url('/childsafe.png') no-repeat center / contain",
                mask: "url('/childsafe.png') no-repeat center / contain"
              }}
            ></div>
      </div>
      <h3 className="text-2xl font-bold">Child Mode</h3>
    

      
    </a>

    {/* Adult Mode */}
    <a
      href="/adult"
      className="group relative flex flex-col items-center justify-center  p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg border border-blue-300/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition transform duration-300"
    >
              <img src="/adultsafe.jpg" alt="Adult Safety" className="w-2/3 h-2/3 rounded-full  object-contain"/>
    
      <h3 className="text-2xl font-bold">Adult Mode</h3>
 

      {/* Hover shine */}
    </a>
  </div>
</div>

      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-400 text-sm relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">SafeSteps</span> · Crafted
          with care for your safety
        </p>
      </footer>
    </div>
  );
}
