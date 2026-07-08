import { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";

function Feed() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/blogs",
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
  
  return (
    <div className="app-shell">
    <Navbar />
    <div className="page-container">
      <div className="mt-12 mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Public Feed
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          All Blogs
        </h1>
      </div>

      {error && (
        <div className="alert alert-error text-sm mb-6 py-2">
          <span>{error}</span>
        </div>
      )}
    </div>
    <Blogs blogList={blogs} />
  </div>
  );
}

export default Feed;
