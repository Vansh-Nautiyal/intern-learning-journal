import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function CreateBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Please log in before publishing a blog.");
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // Fetch existing blog if editing
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const config = getAuthConfig();
          const response = await axios.get(
            `http://localhost:3000/api/blogs/${id}`,
            config
          );

          setBlog(response.data);
        } catch (error) {
          setError(
            error.response?.data?.message ||
              error.message ||
              "Could not load this blog."
          );
        }
      };

      fetchBlog();
    }
  }, [id]);

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
      const config = getAuthConfig();

      if (id) {
        // Edit existing blog
        await axios.put(
          `http://localhost:3000/api/blogs/${id}`,
          blog,
          config
        );
      } else {
        // Create new blog
        await axios.post(
          "http://localhost:3000/api/blogs",
          blog,
          config
        );
      }

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Could not publish the blog. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center bg-base-200">
        <div className="mt-10 card px-6 bg-base-100 shadow-xl w-full max-w-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-6">
              {id ? "Edit Blog" : "Create New Blog"}
            </h1>

            {error && (
              <div className="alert alert-error text-sm mb-6 py-2">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text mb-2">Blog Title</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  className="input input-bordered w-full"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="label">
                  <span className="label-text mb-2">Content</span>
                </label>

                <textarea
                  name="content"
                  placeholder="Write your blog..."
                  className="textarea textarea-bordered w-full h-52"
                  value={blog.content}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full disabled:opacity-60"
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
