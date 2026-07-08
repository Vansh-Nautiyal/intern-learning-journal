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
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mt-12 mb-10">
          <h1 className="text-3xl font-bold">
            Hey, {user?.username || "Writer"}
          </h1>
          <Link
            to="/create"
            className="btn btn-primary text-white bg-violet-700 hover:bg-violet-500 border-none shadow-lg shadow-blue-600/20 transition"
          >
            Create New Blog
          </Link>
        </div>
        <div className="flex justify-center mx-auto my-10">
          <Stats blogList={blogs}/>
        </div>
        <h3 className="text-center font-semibold text-xl opacity-70 mb-6">
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
