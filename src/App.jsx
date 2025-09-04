// src/App.jsx
import { Routes, Route } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home";
import ChildDashboard from "./pages/ChildDashboard";
import AdultPage from "./pages/AdultPage";
import VoiceHelp from "./pages/VoiceHelp";
import FamilyPage from "./pages/FamilyPage";
import LocationPage from "./pages/LocationPage";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Child Dashboard & Features */}
      <Route path="/child" element={<ChildDashboard />} />
      <Route path="/voice-help" element={<VoiceHelp />} />
      <Route path="/family" element={<FamilyPage />} />
      <Route path="/location" element={<LocationPage />} />

      {/* Adult Dashboard */}
      <Route path="/adult" element={<AdultPage />} />
    </Routes>
  );
}

export default App;

