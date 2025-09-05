
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./pages/Home";
import ChildDashboard from "./pages/ChildDashboard";
import AdultPage from "./pages/AdultPage";
import VoiceHelp from "./pages/VoiceHelp";
import FamilyPage from "./pages/FamilyPage";
import LocationPage from "./pages/LocationPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path:"/", element: <Home /> }, // ✅ "/" route
      { path: "child", element: <ChildDashboard /> }, // child route 
      { path: "voice-help", element: <VoiceHelp /> }, // voicehelp  route 
      { path: "family", element: <FamilyPage /> },
      { path: "location", element: <LocationPage /> },
      { path: "adult", element: <AdultPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
