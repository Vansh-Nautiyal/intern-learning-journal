import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useAuth } from "../context/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
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
      const response = await api.post("/api/auth/login",form)
      login(response.data.user);
      
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Couldn't log you in. Check your details and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
        <div className="card premium-card w-full max-w-md rounded-2xl">
          <div className="card-body p-8">
            <h1 className="mb-1 text-center text-3xl font-bold tracking-tight">
              Welcome back
            </h1>
            <p className="mb-8 text-center text-sm text-base-content/60">
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
                  className="input premium-input w-full rounded-xl"
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
                  className="input premium-input w-full rounded-xl"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary mt-2 w-full rounded-xl shadow-lg shadow-primary/20 transition disabled:opacity-60"
              >
                {loading ? <Loader size="sm" /> : "Log In"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-base-content/60">
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
