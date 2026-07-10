import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/useAuth";

function CreateBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch existing blog if editing
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/blogs/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          setBlog(response.data);
        } catch (error) {
          setError(
            error.response?.data?.message ||
              error.message ||
              "Could not load this blog.",
          );
        }
      };

      fetchBlog();
    }
  }, [id, token]);

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (id) {
        // Edit existing blog
        await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, blog, config);
      } else {
        // Create new blog
        await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, blog, config);
      }

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Could not publish the blog. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();

    if (!tag) return;

    if (blog.tags.includes(tag)) return;

    setBlog((prev) => ({
      ...prev,
      tags: [...prev.tags, tag],
    }));

    setTagInput("");
  };

  const removeTag = (tagToRemove) => {
    setBlog((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className="app-shell">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-4">
        <div className="card px-6 premium-card w-full max-w-2xl rounded-2xl">
          <div className="card-body p-6 sm:p-8">
            <div className="mb-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {id ? "Update draft" : "New story"}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">
                {id ? "Edit Blog" : "Create New Blog"}
              </h1>
            </div>

            {error && (
              <div className="alert alert-error text-sm mb-6 py-2">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-4">
                <label className="label">
                  <span className="label-text mb-2">Blog Title</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  className="input premium-input w-full rounded-xl"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  <span className="label-text mb-2">Content</span>
                </label>

                <textarea
                  name="content"
                  placeholder="Write your blog..."
                  className="textarea premium-input h-56 w-full rounded-xl leading-7"
                  value={blog.content}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="label">
                  <span className="label-text mb-2">Tags</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter a tag"
                    className="input input-bordered w-full"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addTag}
                  >
                    <IoMdAdd/>
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <div
                      key={tag}
                      className="badge badge-primary badge-lg gap-2 px-4 py-2"
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}

                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="font-bold hover:text-error transition"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full rounded-xl shadow-lg shadow-primary/20 disabled:opacity-60"
              >
                {loading
                  ? id
                    ? "Updating..."
                    : "Publishing..."
                  : id
                    ? "Update Blog"
                    : "Publish Blog"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
