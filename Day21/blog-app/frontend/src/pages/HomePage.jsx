import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
function HomePage(){
    return (
        <div className="app-shell">
            <Navbar/>
            <HeroSection/>
        </div>
    );
}

export default HomePage;
