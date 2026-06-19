import { Link } from "react-router-dom";

function HeroSection(){
    return (
        <div className="p-[5%] text-center">
            <h1 className="text-2xl">Unlimited movies, TV shows and more.</h1>
            <p className="text-xl">Watch Anywhere. Cancel Anytime</p>
            <p className="text-xl mb-[20px]">Ready to watch? Enter your email to create or restart our membership</p>
            <div className="mx-auto flex w-full max-w-[650px] items-stretch gap-0">
                <input
                    className="h-12 min-w-0 flex-1 rounded-none border border-gray-300 bg-white px-4 text-black placeholder:text-gray-500 focus:outline-none"
                    type="text"
                    placeholder="Email Address"
                />
                <Link
                    to="/signin"
                    className="flex h-12 shrink-0 items-center rounded-none bg-[red] px-4 text-white no-underline"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
