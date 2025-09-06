import { useState } from "react";

function VoiceHelp() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  let recognition;

  // ✅ Setup browser speech recognition
  if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setTranscript(speech);
      setListening(false);
      handleCommand(speech.toLowerCase());
    };

    recognition.onerror = () => {
      setListening(false);
    };
  }

  const startListening = () => {
    if (recognition) {
      setListening(true);
      recognition.start();
    } else {
      alert("Your browser does not support speech recognition.");
    }
  };

  
 const handleCommand = (command) => {
  window.location.href = `http://localhost:5000/api/voice-help?command=${encodeURIComponent(command)}`;
};

  

  const handleTextSubmit = () => {
    if (transcript.trim()) {
      handleCommand(transcript.toLowerCase());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c2230] text-white p-6">
      <button
        onClick={() => window.history.back()}
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-4"
      >
        ← Back
      </button>

      {/* Mic icon */}
      <div
        className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-6 cursor-pointer"
        onClick={startListening}
      >
        🎤
      </div>

      <p className="mb-4 text-lg">
        {listening ? "Listening..." : 'Say "Help me" or type below'}
      </p>

      {/* Text input */}
      <input
        type="text"
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Type what you would say..."
        className="w-80 p-2 rounded text-black mb-3"
      />

      <button
        onClick={handleTextSubmit}
        className="bg-blue-500 px-6 py-2 rounded"
      >
        Send Voice Command
      </button>

      {/* Quick commands */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <p className="mb-2 text-gray-300">Magic words that work:</p>
        <div className="flex gap-3 flex-wrap">
          {["help me", "emergency", "danger", "call mom"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="bg-teal-600 px-3 py-1 rounded"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoiceHelp;

