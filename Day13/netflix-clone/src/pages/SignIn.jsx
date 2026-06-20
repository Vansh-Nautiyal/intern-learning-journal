import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign In Clicked");
  };

  return (
    <div className="hero-bg min-h-screen">
      <div className="min-h-screen bg-black/35">
        <header className="px-[6%] py-6">
          <Link to="/" className="text-[2.8rem] font-bold text-[red] no-underline">
            NETFLIX
          </Link>
        </header>

        <main className="flex justify-center px-4 pb-20">
          <section className="w-full max-w-[480px] bg-black/75 px-16 py-14">
            <h1 className="mb-8 text-4xl font-bold text-white">Sign In</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email or phone number"
                className="mb-4 h-[54px] w-full rounded bg-[rgb(51,51,51)] px-5 text-white placeholder:text-[rgb(180,180,180)] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="mb-10 h-[54px] w-full rounded bg-[rgb(51,51,51)] px-5 text-white placeholder:text-[rgb(180,180,180)] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="mb-4 h-[50px] w-full rounded bg-[rgb(229,9,20)] font-bold text-white">
                Sign In
              </button>

              <div className="mb-14 flex items-center justify-between text-sm text-[rgb(180,180,180)]">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[rgb(180,180,180)]" />
                  Remember me
                </label>
                <a href="#" className="text-[rgb(180,180,180)] no-underline">
                  Need help?
                </a>
              </div>
            </form>

            <p className="mb-4 text-[rgb(115,115,115)]">
              New to Netflix?{" "}
              <Link to="/" className="font-bold text-white no-underline">
                Sign up now.
              </Link>
            </p>

            <p className="text-sm text-[rgb(140,140,140)]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-[#0071eb] no-underline">
                Learn more.
              </a>
            </p>
          </section>
        </main>

        <footer className="bg-black/65 px-[24%] py-8 text-[rgb(140,140,140)]">
          <p className="mb-8">Questions? Call 1-844-505-2993</p>
          <div className="mb-8 grid grid-cols-4 gap-4 text-sm">
            <span>FAQ</span>
            <span>Help Center</span>
            <span>Terms of Use</span>
            <span>Privacy</span>
            <span>Cookie Preferences</span>
            <span>Corporate Information</span>
          </div>
          <button className="border border-[rgb(80,80,80)] bg-black/30 px-3 py-2 text-sm text-[rgb(180,180,180)]">
            English
          </button>
        </footer>
      </div>
    </div>
  );
}

export default SignIn;
