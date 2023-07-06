import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
const LandingPage = () => {
  return (
    <main>
     <div className="top-section">
      <Navbar />
      <HeroSection />
      <Features />
      <AboutUs />
      <Footer/>
     </div>
    </main>
  )
}

export default LandingPage