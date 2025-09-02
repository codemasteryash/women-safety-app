import SOSButton from "./SOSButton"
import LocationCard from "./LocationCard"

function ChildDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Child Dashboard</h2>
      <LocationCard />
      <div className="mt-6">
        <SOSButton />
      </div>
    </div>
  )
}

export default ChildDashboard
