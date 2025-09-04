// // src/App.jsx
// import { Routes, Route } from "react-router-dom";

// // ✅ Pages
// import Home from "./pages/Home";
// import ChildDashboard from "./pages/ChildDashboard";
// import AdultPage from "./pages/AdultPage";
// import VoiceHelp from "./pages/VoiceHelp";
// import FamilyPage from "./pages/FamilyPage";
// import LocationPage from "./pages/LocationPage";

// function App() {
//   return (
//     <Routes>
//       {/* Home Page */}
//       <Route path="/" element={<Home />} />

//       {/* Child Dashboard & Features */}
//       <Route path="/child" element={<ChildDashboard />} />
//       <Route path="/voice-help" element={<VoiceHelp />} />
//       <Route path="/family" element={<FamilyPage />} />
//       <Route path="/location" element={<LocationPage />} />

//       {/* Adult Dashboard */}
//       <Route path="/adult" element={<AdultPage />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route, Link } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home";
import ChildDashboard from "./pages/ChildDashboard";
import AdultPage from "./pages/AdultPage";
import VoiceHelp from "./pages/VoiceHelp";
import FamilyPage from "./pages/FamilyPage";
import LocationPage from "./pages/LocationPage";

function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/child"
              className="text-blue-600 hover:text-blue-800"
            >
              Child Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/voice-help"
              className="text-blue-600 hover:text-blue-800"
            >
              Voice Help
            </Link>
          </li>
          <li>
            <Link
              to="/family"
              className="text-blue-600 hover:text-blue-800"
            >
              My Family
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className="text-blue-600 hover:text-blue-800"
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/adult"
              className="text-blue-600 hover:text-blue-800"
            >
              Adult Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
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
    </div>
  );
}

export default App;

