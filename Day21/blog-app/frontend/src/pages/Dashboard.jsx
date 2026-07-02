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
      <div className="flex m-8 justify-around">
        <h1 className="text-4xl font-bold">Hey, User</h1>
      <Link to="/create" className="btn btn-primary">
        Create New Blog
      </Link>
      </div>
      <h3 className="font-mono font-bold text-3xl text-center mt-20">All Blogs</h3>
      <Blogs blogList={blogs} />
    </div>
  );
}

export default Dashboard;
