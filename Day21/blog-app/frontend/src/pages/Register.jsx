import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/api/auth/register", {
         username: form.username,
         email: form.email,
         password: form.password,
       });

      // User must log in to receive a JWT
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Couldn't create your account. Try again."
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
              Create your account
            </h1>

            <p className="mb-8 text-center text-sm text-base-content/60">
              Start writing and managing your blogs in one place.
            </p>

            {error && (
              <div className="alert alert-error text-sm mb-6 py-2">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text mb-1">Username</span>
                </label>

                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  className="input premium-input w-full rounded-xl"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>

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
                  placeholder="At least 8 characters"
                  className="input premium-input w-full rounded-xl"
                  value={form.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text mb-1">
                    Confirm Password
                  </span>
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className="input premium-input w-full rounded-xl"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary mt-2 w-full rounded-xl shadow-lg shadow-primary/20 transition disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
