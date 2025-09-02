// src/components/shared/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Women Safety App</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Features</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}