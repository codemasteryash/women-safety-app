import { useNavigate } from "react-router-dom";

function VoiceHelpButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/voice-help"); // navigates to the voice help page
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg"
    >
      🎤 Voice Help
    </button>
  );
}

export default VoiceHelpButton;
