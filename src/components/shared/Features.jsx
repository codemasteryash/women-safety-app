// src/components/shared/Features.jsx
export default function Features() {
  const features = [
    {
      title: "One-Tap SOS",
      desc: "Send emergency alerts to your trusted contacts instantly.",
    },
    {
      title: "Live Location Tracking",
      desc: "Share your real-time location during emergencies.",
    },
    {
      title: "Trusted Contacts",
      desc: "Add family and friends who can receive your alerts.",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-pink-600">{f.title}</h4>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
