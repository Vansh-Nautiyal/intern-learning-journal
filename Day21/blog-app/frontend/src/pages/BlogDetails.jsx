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
      <div className="app-shell">
        <Navbar />
        <div className="page-container py-10">
          <div className="alert alert-error text-sm py-2">
            <span>{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="app-shell">
        <Navbar />
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-container py-10">
        <article className="premium-card rounded-2xl p-6 sm:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="ml-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Blog Details
            </p>
            <h1 className="my-3 text-3xl font-bold tracking-tight sm:text-5xl">
              {blog.title}
            </h1>
          </div>
          <Link
            to={`/edit/${blog._id}`}
            className="btn btn-primary rounded-xl shadow-lg shadow-primary/20 mr-8 mt-10 w-20"
          >
            Edit
          </Link>
        </div>

        <p className="mb-8 ml-6 border-b border-base-300 pb-6 text-sm text-base-content/60">
          By {blog.author?.username || "Unknown author"} |{" "}
          {formatDate(blog.createdAt)}
        </p>
        <p className="whitespace-pre-wrap text-lg ml-6 mr-6 leading-8 text-base-content/85">
          {blog.content}
        </p>
        </article>
      </main>
    </div>
  );
}

export default BlogDetails;
