function SOSButton() {
  const handleSOS = () => {
    alert("🚨 SOS Alert Sent to Guardians!");
  };

  return (
    <button
      onClick={handleSOS}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md w-full"
    >
      Send SOS
    </button>
  )
}

export default SOSButton
