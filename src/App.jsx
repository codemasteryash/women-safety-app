// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChildPage from "./pages/ChildPage"
import AdultPage from "./pages/AdultPage"
import Navbar from "./components/shared/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/child" element={<ChildPage />} />
        <Route path="/adult" element={<AdultPage />} />
      </Routes>
    </div>
  )
}

export default App
