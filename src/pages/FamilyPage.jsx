// src/pages/FamilyPage.jsx
import { Phone } from "lucide-react";

function FamilyPage() {
  const familyMembers = [
    { name: "Mom", emoji: "👩‍🦱", phone: "tel:+911234567890" },
    { name: "Dad", emoji: "👨‍🦱", phone: "tel:+919876543210" },
    { name: "Grandma", emoji: "👵", phone: "tel:+911112223334" },
  ];

  return (
    <div className="min-h-screen bg-[#1c2230] text-white p-6 flex flex-col items-center">
      <button
        onClick={() => window.history.back()}
        className="self-start bg-gray-700 text-white px-4 py-2 rounded mb-6"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-8">👨‍👩‍👧 My Family</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {familyMembers.map((member) => (
          <div
            key={member.name}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <span className="text-5xl mb-4">{member.emoji}</span>
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <a
              href={member.phone}
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              <Phone className="w-5 h-5" /> Call
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamilyPage;

