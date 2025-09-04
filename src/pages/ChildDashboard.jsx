// src/pages/ChildDashboard.jsx
import { useNavigate } from "react-router-dom";
import LocationCard from "../components/child/LocationCard";
import SOSButton from "../components/child/SOSButton";
import VoiceHelpButton from "../components/child/VoiceHelpButton";

function ChildDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-pink-800 drop-shadow mb-10">
        👧 Child Dashboard
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-6">
        {/* SOS Emergency */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🚨 SOS Emergency</h2>
          <SOSButton />
          <p className="mt-3 text-gray-600 text-sm">
            Instantly send an emergency alert to your guardians.
          </p>
        </div>

        {/* Voice Help */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🎤 Voice Help</h2>
          <VoiceHelpButton />
          <button
            onClick={() => navigate("/voice-help")}
            className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow"
          >
            Open Voice Commands
          </button>
          <p className="mt-3 text-gray-600 text-sm">
            Use your voice to trigger safety alerts and commands.
          </p>
        </div>

        {/* Location */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-green-600 mb-4">📍 My Location</h2>
          <LocationCard />
          <button
            onClick={() => navigate("/location")}
            className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
          >
            Open Location
          </button>
          <p className="mt-3 text-gray-600 text-sm">
            Track and share your real-time location securely.
          </p>
        </div>

        {/* My Family */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">👨‍👩‍👧 My Family</h2>
          <button
            onClick={() => navigate("/family")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
          >
            Open Family Contacts
          </button>
          <p className="mt-3 text-gray-600 text-sm">
            Quickly reach your trusted family members in need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChildDashboard;

