import { Link } from "react-router-dom";
import heroLight from "../assets/hero-light.png";
import heroDark from "../assets/hero-dark.png";
export default function HeroSection() {
  return (
    <div className="bg-base-200 text-base-content">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl border border-violet-300 bg-base-100 px-6 pt-14 shadow-2xl shadow-neutral/10 sm:px-12 md:pt-20 lg:flex lg:gap-x-16 lg:px-16 lg:pt-0">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
            <span className="badge badge-primary badge-outline mb-5">
              Premium writing workspace
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              BlogPost.in
            </h1>

            <p className="mt-6 text-lg leading-8 text-base-content/70 text-pretty">
              A simple yet powerful blog management app. Create, read and
              maintain your blogs - all in one place.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/login"
                className="btn btn-primary rounded-xl shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
              <Link
                to="/feed"
                className="btn bg-white border-violet-700 text-violet-600 rounded-xl shadow-lg shadow-primary/20 "
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              src={heroLight}
              alt="App screenshot"
              className="theme-img-light absolute top-15 left-0 w-160 max-w-none rounded-md ring-1 ring-white/10"
            />
            <img
              src={heroDark}
              alt="App screenshot"
              className="theme-img-dark absolute  top-15 left-0 w-160 max-w-none rounded-md ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
