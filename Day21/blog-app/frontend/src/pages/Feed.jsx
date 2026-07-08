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
    <div>
    <Navbar />
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center justify-between mt-12 mb-10">
      <h3 className="text-center font-semibold text-xl opacity-70 mb-6">
        All Blogs
      </h3>
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
