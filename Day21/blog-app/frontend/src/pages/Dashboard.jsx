import { useEffect, useState } from "react";
import api from "../utils/api";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import Blogs from "../components/Blogs";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { useAuth } from "../context/useAuth";

function Dashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/api/blogs/my");
        setBlogs(res.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Could not load blogs.",
        );
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await api.delete(`/api/blogs/${id}`);

      setBlogs((currentBlogs) =>
        currentBlogs.filter((blog) => blog._id !== id),
      );
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Could not delete this blog.",
      );
    }
  };

  const handleLogout = async () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      logout();
    }, 1);
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-container">
        <div className="my-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Hey, {user?.username || "Writer"}
            </h1>
          </div>
          <div>
            <Link
              to="/create"
              className="btn mx-2 btn-primary rounded-xl shadow-lg shadow-primary/20 transition"
            >
              <IoMdAdd />
              New Blog
            </Link>
            <button
              type="button"
              className="btn mx-2 btn-primary rounded-xl shadow-lg shadow-primary/20 transition"
              onClick={handleLogout}
            >
              <RiLogoutBoxLine />
              Logout
            </button>
          </div>
        </div>
        <div className="mx-auto my-10 flex justify-center">
          <Stats blogList={blogs} />
        </div>
        <h3 className="my-2 py-4 text-center text-xl font-semibold text-base-content/70">
          My Blogs
        </h3>

        {error && (
          <div className="alert alert-error text-sm mb-6 py-2">
            <span>{error}</span>
          </div>
        )}
      </div>
      <Blogs blogList={blogs} onDelete={deleteBlog} />
    </div>
  );
}

export default Dashboard;
