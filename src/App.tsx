import BannerSection from "./components/BannerSection"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureSection from "./components/FeatureSection"
import FeatureSectionBreadfast from "./components/FeatureSectionBreadfast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"


const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Category/>
    <FeatureSectionFruits/>
    <FeatureSectionBreadfast/>
    <BannerSection/>
    <BlogSection/>
    <NewsLetter/>
    <FeatureSection/>
   </main>
  )
}

export default App
