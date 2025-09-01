import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/Feature/FeatureSection"
import FAQSection from "./components/FAQ/FAQSection"
import NewsletterSection from "./components/NewsletterSection"
import FooterSection from "./components/Footer/FooterSection"
import Blog from "./components/Blog"
function App() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <FeatureSection />
    <FAQSection />
    <NewsletterSection />
    <Blog />
    <FooterSection />
    </>
  )
}

export default App
