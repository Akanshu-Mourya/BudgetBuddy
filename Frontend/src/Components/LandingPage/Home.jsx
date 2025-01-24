import Navbar from "../Shared/Navbar";
import AboutSection from "./AboutSection";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "../Shared/Footer";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div className="mt-5" id="home">

            <Navbar />
            <HeroSection />
            <Features />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    )
}
export default Home;