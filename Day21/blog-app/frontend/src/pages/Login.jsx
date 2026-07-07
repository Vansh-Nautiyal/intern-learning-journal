import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      form
    );

    // Store JWT
    localStorage.setItem("token", response.data.token);

    // Store logged-in user
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    navigate("/dashboard");
  } catch (err) {
    setError(
      err.response?.data?.message ||
        "Couldn't log you in. Check your details and try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-6">
        <div className="card blog-card w-full max-w-md rounded-2xl shadow-2xl shadow-black/20">
          <div className="card-body p-8">
            <h1 className="text-2xl font-bold text-center mb-1">Welcome back</h1>
            <p className="text-sm opacity-60 text-center mb-8">
              Log in to keep writing where you left off.
            </p>

            {error && (
              <div className="alert alert-error text-sm mb-6 py-2">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text mb-1">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text mb-1">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full mt-2 shadow-lg shadow-primary/20 transition disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <p className="text-sm opacity-60 text-center mt-6">
              New here?{" "}
              <Link to="/register" className="link link-primary font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;