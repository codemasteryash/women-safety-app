// src/components/shared/Hero.jsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-pink-500 to-red-500 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Stay Safe, Stay Connected</h2>
      <p className="max-w-2xl text-lg mb-8">
        Our app ensures women’s safety by sending alerts and sharing live location with trusted contacts.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Get Started
        </button>
        <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-pink-700">
          Learn More
        </button>
      </div>
    </section>
  )
}
