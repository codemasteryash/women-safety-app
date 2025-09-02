function AlertHistory() {
  // Example data
  const alerts = [
    { id: 1, time: "2025-09-02 10:30 AM", status: "Resolved" },
    { id: 2, time: "2025-08-28 06:45 PM", status: "Pending" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Alert History</h3>
      <ul>
        {alerts.map((a) => (
          <li key={a.id} className="flex justify-between border-b py-2">
            <span>{a.time}</span>
            <span className={a.status === "Resolved" ? "text-green-500" : "text-red-500"}>
              {a.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlertHistory
