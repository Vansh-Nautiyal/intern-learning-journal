import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/useAuth";

function BlogDetails() {
  const { id } = useParams();
  const { user, token } = useAuth();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  const isAuthor =
    user &&
    blog?.author &&
    user.id === (blog.author._id || blog.author);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/blogs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setBlog(res.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Could not load this blog.",
        );
      }
    };

    fetchBlog();
  }, [id, token]);

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
              <h1 className="my-3 text-3xl font-bold">{blog.title}</h1>
            </div>
            {isAuthor && (
              <Link
                to={`/edit/${blog._id}`}
                className="btn btn-primary rounded-xl shadow-lg shadow-primary/20 mr-8 mt-10 w-20"
              >
                Edit
              </Link>
            )}
          </div>
          <div className="flex  flex-wrap gap-2 mx-5 my-4">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-4  py-2 text-xs font-medium text-primary border border-primary/30"
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            ))}
          </div>

          <p className="mb-8 ml-6 border-b border-base-300 pb-6 text-sm text-base-content/60">
            By {blog.author?.username || "Unknown author"} |{" "}
            {formatDate(blog.createdAt)}
          </p>
          <p className="whitespace-pre-wrap text-lg mx-6 leading-8 text-base-content/85">
            {blog.content}
          </p>
        </article>
      </main>
    </div>
  );
}

export default BlogDetails;
