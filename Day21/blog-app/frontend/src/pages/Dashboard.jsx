import { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Please log in to view your blogs.");
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/blogs/my",
          getAuthConfig(),
        );
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
      await axios.delete(
        `http://localhost:3000/api/blogs/${id}`,
        getAuthConfig(),
      );

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

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-container">
        <div className="mt-8 mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Hey, {user?.username || "Writer"}
            </h1>
          </div>
          <Link
            to="/create"
            className="btn btn-primary rounded-xl shadow-lg shadow-primary/20 transition"
          >
            Create New Blog
          </Link>
        </div>
        <div className="mx-auto my-10 flex justify-center">
          <Stats blogList={blogs}/>
        </div>
        <h3 className="mb-4 text-center text-xl font-semibold text-base-content/70">
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
