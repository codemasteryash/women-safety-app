/* eslint-disable no-unused-vars */
// // src/pages/ChildDashboard.jsx
// import { useNavigate } from "react-router-dom";
// import LocationCard from "../components/child/LocationCard";
// // import SOSButton from "../components/child/SOSButton";
// import VoiceHelpButton from "../components/child/VoiceHelpButton";
// import SOSButton from "../components/sosbutton";

// function ChildDashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center py-10">
//       {/* Title */}
//       <div className="flex items-center justify-center ">
//             <div className=" h-26 w-26 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
//          <div
//               className=" w-64  h-64     bg-yellow-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"

//               style={{
//                 WebkitMask: "url('/childsafe.png') no-repeat center / contain",
//                 mask: "url('/childsafe.png') no-repeat center / contain"
//               }}
//               ></div>
//       </div>
//       <h1 className="text-5xl font-extrabold text-pink-800 drop-shadow ">
//          Child Dashboard
//       </h1>
//               </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-6">
//         {/* SOS Emergency */}
//         {/* <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <h2 className="text-2xl font-bold text-red-600 mb-4">🚨 SOS Emergency</h2>
//           <SOSButton />
//           <p className="mt-3 text-gray-600 text-sm">
//             Instantly send an emergency alert to your guardians.
//           </p>
//         </div> */}
// <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
//   <h2 className="text-2xl font-bold text-red-600 mb-6"> SOS Emergency</h2>

//   {/* Circular SOS Button */}
// <SOSButton />

//   <p className="mt-5 text-gray-600 text-sm">
//     Instantly send an emergency alert to your guardians.
//   </p>
// </div>



//         {/* Voice Help */}
//         {/* <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <h2 className="text-2xl font-bold text-purple-600 mb-4">🎤 Voice Help</h2>
//           <VoiceHelpButton />
//           <button
//             onClick={() => navigate("/voice-help")}
//             className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow"
//           >
//             Open Voice Commands
//           </button>
//           <p className="mt-3 text-gray-600 text-sm">
//             Use your voice to trigger safety alerts and commands.
//           </p>
//         </div> */}
//         <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
//   {/* Title */}
//   <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
//     🎤 Voice Help
//   </h2>

//   {/* Voice Button */}
//   <VoiceHelpButton />

//   {/* Action Button */}
//   <button
//     onClick={() => navigate("/voice-help")}
//     className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
//   >
//     Open Voice Commands
//   </button>

//   {/* Description */}
//   <p className="mt-4 text-gray-300 text-sm max-w-xs">
//     Trigger safety alerts and commands <br /> using just your voice.
//   </p>

//   {/* Subtle Glow Accent */}
//   <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-purple-500/10 via-transparent to-purple-600/10" />
// </div>


//         {/* Location */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <h2 className="text-2xl font-bold text-green-600 mb-4">📍 My Location</h2>
//           <LocationCard />
//           <button
//             onClick={() => navigate("/location")}
//             className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
//           >
//             Open Location
//           </button>
//           <p className="mt-3 text-gray-600 text-sm">
//             Track and share your real-time location securely.
//           </p>
//         </div>

//         {/* My Family */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <h2 className="text-2xl font-bold text-blue-600 mb-4">👨‍👩‍👧 My Family</h2>
//           <button
//             onClick={() => navigate("/family")}
//             className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
//           >
//             Open Family Contacts
//           </button>
//           <p className="mt-3 text-gray-600 text-sm">
//             Quickly reach your trusted family members in need.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChildDashboard;



// src/pages/ChildDashboard.jsx
"use client";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import VoiceHelpButton from "../components/child/VoiceHelpButton";
import SOSButton from "../components/sosbutton";

function ChildDashboard() {
  const navigate = useNavigate();
  const [showSOSPopup, setShowSOSPopup] = useState(false);

  // Variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center py-10">
      {/* Title */}
      <div className="flex items-center justify-center ">
        <div className=" h-26 w-26 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <div
            className=" w-64  h-64 bg-yellow-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
            style={{
              WebkitMask: "url('/childsafe.png') no-repeat center / contain",
              mask: "url('/childsafe.png') no-repeat center / contain",
            }}
          ></div>
        </div>
        <h1 className="text-5xl font-extrabold text-pink-800 drop-shadow ">
          Child Dashboard
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl px-6">
        {/* SOS Emergency */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(255,0,0,0.25)",
          }}
          className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            SOS Emergency
          </h2>

          {/* SOS Button with popup */}
          <div onClick={() => setShowSOSPopup(true)}>
            <SOSButton />
          </div>

          <p className="mt-5 text-gray-600 text-sm">
            Instantly send an emergency alert to your guardians.
          </p>
        </motion.div>

        {/* Voice Help */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(128,0,255,0.25)",
          }}
          className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all"
        >
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            🎤 Voice Help
          </h2>
          <VoiceHelpButton />
          <p className="mt-4 text-gray-500 text-sm max-w-xs">
            Trigger safety alerts and commands <br /> using just your voice.
          </p>
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-purple-500/10 via-transparent to-purple-600/10" />
        </motion.div>

        {/* My Location */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(0,255,0,0.25)",
          }}
          className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            My Location
          </h2>

          <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
            <span className="absolute w-24 h-24 rounded-full border-2 border-green-400/40 animate-ping" />
            <span className="absolute w-16 h-16 rounded-full border border-green-400/50 animate-pulse" />
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-b from-green-500 to-green-700 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
          </div>

          <button
            onClick={() => navigate("/location")}
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            Open Location
          </button>

          <p className="mt-3 text-gray-600 text-sm">
            Track and share your real-time location securely.
          </p>
        </motion.div>

        {/* My Family */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(0,128,255,0.25)",
          }}
          className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center transition-all"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Family</h2>

          <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
            <span className="absolute w-24 h-24 rounded-full border-2 border-blue-400/40 animate-pulse" />
            <span className="absolute w-16 h-16 rounded-full border border-blue-400/50 animate-ping" />
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C18 14.17 13.33 13 11 13zm8 0c-.29 0-.62.02-.97.05A6.97 6.97 0 0 1 20 17v3h4v-3.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
          </div>

          <button
            onClick={() => navigate("/family")}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Open Family Contacts
          </button>

          <p className="mt-3 text-gray-600 text-sm">
            Quickly reach your trusted family members in need.
          </p>

          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-600/10" />
        </motion.div>
      </div>

      {/* Fancy SOS Popup */}
      <AnimatePresence>
        {showSOSPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                🚨 SOS Activated!
              </h2>
              <p className="text-gray-700 mb-6">
                Your guardians have been alerted. Help is on the way!
              </p>
              <button
                onClick={() => setShowSOSPopup(false)}
                className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChildDashboard;


