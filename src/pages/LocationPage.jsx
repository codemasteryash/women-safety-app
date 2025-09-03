import { useNavigate } from "react-router-dom";
// remove this line 👇 if you’re not using shadcn/ui
// import { Button } from "@/components/ui/button"; 

import LocationCard from "../components/child/LocationCard";

function LocationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-6"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6 text-pink-800">📍 My Location</h1>

      <LocationCard />
    </div>
  );
}

export default LocationPage;

