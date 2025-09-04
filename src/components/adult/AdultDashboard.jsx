import { useState } from "react";

function AdultDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-md">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">Adult SafeGuard</h1>
        <button
          onClick={() => alert("🚨 Emergency SOS Triggered!")}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          🚨 Emergency
        </button>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-around bg-white shadow p-2">
        {["dashboard", "contacts", "tracking", "community", "settings"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded capitalize ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Dashboard Section */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-bold text-blue-700">
                Emergency Status
              </h2>
              <p className="text-gray-700 mt-2">
                ✅ All safe. No active alerts.
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-bold text-blue-700">
                Safety Statistics
              </h2>
              <ul className="mt-2 text-gray-700">
                <li>🚨 SOS triggered: 2 times this month</li>
                <li>📍 Locations tracked: 15</li>
                <li>📢 Community alerts viewed: 5</li>
              </ul>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-bold text-blue-700">
                Current Location
              </h2>
              <p className="text-gray-700 mt-2">
                📍 New Delhi, Connaught Place
              </p>
            </div>

            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-bold text-blue-700">
                Recent Activity
              </h2>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                <li>Checked in at 9:00 PM</li>
                <li>Viewed 2 community alerts</li>
                <li>Last SOS test: 3 days ago</li>
              </ul>
            </div>
          </div>
        )}

        {/* Contacts Section */}
        {activeTab === "contacts" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-700">My Contacts</h2>
            {["Mom", "Dad", "Brother", "Police"].map((name, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <span className="text-gray-800">{name}</span>
                <button
                  onClick={() => alert(`📞 Calling ${name}...`)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Call
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tracking Section */}
        {activeTab === "tracking" && (
          <div className="p-4 bg-white shadow rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-700">Live Tracking</h2>
            <p className="mt-2 text-gray-700">
              📍 Tracking your live location...
            </p>
            <div className="mt-4 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              [ Map Placeholder ]
            </div>
          </div>
        )}

        {/* Community Section */}
        {activeTab === "community" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-700">Community Alerts</h2>
            {[
              "Suspicious activity near Central Park",
              "Safety workshop tomorrow at 5 PM",
              "New helpline number launched: 1091",
            ].map((msg, i) => (
              <div key={i} className="p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                {msg}
              </div>
            ))}
          </div>
        )}

        {/* Settings Section */}
        {activeTab === "settings" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-700">Settings</h2>
            {[
              { label: "Enable Notifications", default: true },
              { label: "Silent Mode", default: false },
              { label: "Share Location", default: true },
            ].map((setting, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <span className="text-gray-800">{setting.label}</span>
                <input type="checkbox" defaultChecked={setting.default} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdultDashboard;

