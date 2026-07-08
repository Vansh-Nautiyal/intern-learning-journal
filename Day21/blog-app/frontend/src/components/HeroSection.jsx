import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-base-200 text-base-content">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative isolate overflow-hidden bg-base-100 px-6 pt-16 shadow-xl after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-base-content/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              BlogPost.in
            </h1>

            <p className="mt-6 text-lg/8 text-base-content/70 text-pretty">
              A simple yet powerful blog management app. Create,
              read and maintain your blogs - all in one place.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

              {/* Get Started Button */}
              <Link
                to="/login"
                className="btn btn-primary"
              >
                Get Started
              </Link>

              
            </div>
          </div>

          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
