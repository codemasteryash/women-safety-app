import EmergencyContacts from "./EmergencyContacts"
import AlertHistory from "./AlertHistory"

function AdultDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Adult Dashboard</h2>
      <EmergencyContacts />
      <div className="mt-6">
        <AlertHistory />
      </div>
    </div>
  )
}

export default AdultDashboard
