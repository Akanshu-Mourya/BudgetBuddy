import Navbar from "../Shared/Navbar";
import AboutSection from "./AboutSection";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "../Shared/Footer";
import HeroSection from "./HeroSection";
import{ darkThemeColor} from '../DarkLiteMood/ThemeProvider'



const Home = () => {
    return (
        <div className={`${darkThemeColor} `} id="home">

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