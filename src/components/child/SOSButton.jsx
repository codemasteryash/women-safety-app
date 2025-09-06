function SOSButton() {
  const handleClick = () => {
    // redirect to backend (Express)
    window.location.href = "http://localhost:5000/sos";
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md w-full flex justify-center items-center"
    >
      🚨 SOS
    </button>
  );
}

export default SOSButton;

