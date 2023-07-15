import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import FooterNav from "../components/FooterNav"
const LandingPage = () => {
  return (
    <main id="Home">
     <div className="top-section">
      <Navbar />
      <HeroSection />
      <Features />
      <AboutUs />
      <Footer/>
      <FooterNav />
     </div>
    </main>
  )
}

export default LandingPage