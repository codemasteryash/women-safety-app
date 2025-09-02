// src/pages/Home.jsx
import Navbar from "../components/shared/Navbar"
import Hero from "../components/shared/Hero"
import Features from "../components/shared/Features"
import Footer from "../components/shared/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}