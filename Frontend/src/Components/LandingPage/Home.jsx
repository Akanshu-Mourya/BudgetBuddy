import Navbar from "../Shared/Navbar";
import AboutSection from "./AboutSection";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "../Shared/Footer";
import HeroSection from "./HeroSection";
import { darkThemeColor } from '../DarkLiteMood/ThemeProvider';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <div className={`${darkThemeColor} `} id="home">
            <Navbar />
            <HeroSection />
            <Features />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
