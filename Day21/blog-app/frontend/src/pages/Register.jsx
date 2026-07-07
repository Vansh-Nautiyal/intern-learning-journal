import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
      await axios.post("http://localhost:3000/api/auth/register", {
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
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-6 py-10">
        <div className="card blog-card w-full max-w-md rounded-2xl shadow-2xl shadow-black/20">
          <div className="card-body p-8">
            <h1 className="text-2xl font-bold text-center mb-1">
              Create your account
            </h1>

            <p className="text-sm opacity-60 text-center mb-8">
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
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                  placeholder="At least 8 characters"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full mt-2 shadow-lg shadow-primary/20 transition disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="text-sm opacity-60 text-center mt-6">
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