// src/pages/ChildDashboard.jsx
import { useNavigate } from "react-router-dom";
import LocationCard from "../components/child/LocationCard";
import SOSButton from "../components/child/SOSButton";
import VoiceHelpButton from "../components/child/VoiceHelpButton";

function ChildDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold mb-6 text-pink-800">Child Mode</h1>

      <div className="flex flex-col gap-6">
        {/* SOS Emergency Button */}
        <SOSButton />

        {/* Voice Help
        <VoiceHelpButton /> */}

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => navigate("/location")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            📍 Location
          </button>

          <button
            onClick={() => navigate("/voice-help")}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
          >
            🎤 Voice Help
          </button>

          <button
            onClick={() => navigate("/family")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            👨‍👩‍👧 My Family
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChildDashboard;

