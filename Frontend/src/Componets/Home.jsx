import HeroSection from "./HeroSection";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Home = () => {
    return (
        <div className="mt-5">
            <Navbar />
            <HeroSection/>
            {/* <Footer /> */}
        </div>
    )
}
export default Home;
