function LocationCard() {
  // Dummy data (you can replace with real location API later)
  const location = "Delhi, India";

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-gray-700">Current Location</h3>
      <p className="text-gray-500">{location}</p>
    </div>
  )
}

export default LocationCard
