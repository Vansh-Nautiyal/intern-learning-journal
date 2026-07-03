import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:3000/api/blogs/");
    setBlogs(res.data);
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/blogs/${id}`);

      // Remove deleted blog from state
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mt-12 mb-10">
          <h1 className="text-3xl font-bold">Hey, User 👋</h1>
          <Link
            to="/create"
            className="btn btn-primary bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-600/20 transition"
          >
            Create New Blog
          </Link>
        </div>

        <h3 className="text-center font-semibold text-xl opacity-70 mb-6">All Blogs</h3>
      </div>
      <Blogs blogList={blogs} onDelete={deleteBlog} />
    </div>
  );
}

export default Dashboard;
