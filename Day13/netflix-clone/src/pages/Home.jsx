import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoBox from "../components/InfoBox";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import netflixOnTv from "../assets/ntflix-on-tv.jpg";
import download from "../assets/downloading-netflix.jpg";
import multiplatform from "../assets/watch-anywhere.png";
import kids from "../assets/netflix-kids.jpg";

function Home() {
  const info = [
    {
      title: "Enjoy on your TV",
      content:
        "Watch on SmartTVs, PlayStation, Xbox, ChromeCast, Apple TV, Blu-ray players, and more.",
      image: netflixOnTv,
      flip: 0,
    },
    {
      title: "Download your shows to watch offline",
      content: "Save your favorites easily and always have something to watch.",
      image: download,
      flip: 1,
    },
    {
      title: "Watch Everywhere",
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      image: multiplatform,
      flip: 0,
    },
    {
      title: "Create profiles for kids",
      content:
        "Send kids on adventure with their favorite characters in a space made just for them - free with your membership.",
      image: kids,
      flip: 1,
    },
  ];

  return (
    <>
      <div className="hero-bg">
        <Navbar />
        <HeroSection />
      </div>
      {info.map((element) => (
        <InfoBox
          key={element.title}
          title={element.title}
          content={element.content}
          flip={element.flip}
          image={element.image}
        />
      ))}
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
