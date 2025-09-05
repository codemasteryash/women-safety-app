// src/components/shared/Navbar.jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">SafetySteps</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-pink-400">Home</Link>
        <Link to="/child" className="hover:text-pink-400">Child</Link>
        <Link to="/adult" className="hover:text-pink-400">Adult</Link>
      </div>
    </nav>
  )
}

export default Navbar
