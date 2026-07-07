import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Please log in to view this blog.");
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/blogs/${id}`,
          getAuthConfig()
        );

        setBlog(res.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Could not load this blog."
        );
      }
    };

    fetchBlog();
  }, [id]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown date";
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "Unknown date";

    return (
      `${date.getDate().toString().padStart(2, "0")}/` +
      `${(date.getMonth() + 1).toString().padStart(2, "0")}/` +
      `${date.getFullYear().toString().slice(-2)} ` +
      `${date.getHours().toString().padStart(2, "0")}:` +
      `${date.getMinutes().toString().padStart(2, "0")}:` +
      `${date.getSeconds().toString().padStart(2, "0")}`
    );
  };

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="max-w-6xl mx-auto p-10">
          <div className="alert alert-error text-sm py-2">
            <span>{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        <div className="flex justify-between align-center">
          <h1 className="text-3xl font-bold my-4">{blog.title}</h1>
          <Link
            to={`/edit/${blog._id}`}
            className="btn bg-blue-800 rounded-4xl text-lg mr-20 mt-5 w-25"
          >
            Edit
          </Link>
        </div>

        <p className="text-gray-500 mb-8">
          By {blog.author?.username || "Unknown author"} |{" "}
          {formatDate(blog.createdAt)}
        </p>
        <p className="text-lg leading-8">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
