import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import modernSite from "../assets/modern-site.png";
import beginner from "../assets/beginner-friendly.png";
import community from "../assets/community.png";

function HomePage() {
  const cards = [
    {
      img: modernSite,
      alt: "modern website",
      title: "Modern Blogging Site",
      desc: "BlogPost.in is a modern blogging website that makes blogging engaging for modern users",
    },
    {
      img: beginner,
      alt: "Beginner Friendly",
      title: "Beginner Friendly",
      desc: "Easy to use and understand for complete beginners.",
    },
    {
      img: community,
      alt: "Community",
      title: "Explore Community Feed",
      desc: "Post your blogs and read blogs in a vast community of users",
    },
  ];

  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />

      <div className="mx-auto my-2">
        <h1 className="text-center text-4xl font-bold">
          Getting Started with BlogPost.in
        </h1>
      </div>

      <div className="page-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 my-10 pb-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
          >
            <figure>
              <img
                className="aspect-[4/3] w-full object-cover"
                src={card.img}
                alt={card.alt}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p className="text-base-content/70">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mb-8">
        <h1 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <FAQ />
      <div className="mt-10 text-center text-lg py-6 bg-base-100">
        <p>© 2026 BlogPost.in. All rights reserved</p>
      </div>
    </div>
  );
}

export default HomePage;